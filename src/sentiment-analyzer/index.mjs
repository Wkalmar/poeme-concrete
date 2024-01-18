/*global console, fetch*/
import { SecretsManagerClient, GetSecretValueCommand } from "@aws-sdk/client-secrets-manager";

export const handler = async (article) => {
    console.trace(`entered sentiment analyzer. article ${article}`);
    try {
        const sentimentAnalysisApiKey = await getSentimentAnalysisApiKey();
        const data = await performSentimentAnalysis(article, sentimentAnalysisApiKey);
        const negativeSentences = extractMostGraphicSentences(data);
        negativeSentences.forEach(sentence => {
            console.trace(`extracted ${sentence.Text}`);
        });

        const response = {
            statusCode: 200,
            body: negativeSentences,
          };
        return response;
    }
    catch (err) {
        console.log(err);
    }
}

async function getSentimentAnalysisApiKey() {
    const secret_name = "SENTIMENT_ANALYSIS_API_KEY";

    const client = new SecretsManagerClient({
        region: "eu-central-1",
    });

    let response;

    try {
        response = await client.send(
            new GetSecretValueCommand({
                SecretId: secret_name,
                VersionStage: "AWSCURRENT"
            })
        );
    } catch (error) {
        console.log(error);
        throw error;
    }

    return response.SecretString;
}

async function performSentimentAnalysis(article, sentimentAnalysisApiKey) {
    const body = JSON.stringify({
        DocumentText: article.textContent,
        PrivateKey: sentimentAnalysisApiKey,
        Secret: ""
    })
    console.trace(`sentiment analysis request body: ${body}`);
    const sentimentAnalysisResponse = await fetch('http://api.text2data.com/v3/Analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: body
    });

    const data = await sentimentAnalysisResponse.json();
    return data;
}

function extractMostGraphicSentences(data) {
    const coreSentences = data.CoreSentences;
    const negativeSentences = coreSentences.filter(sentence => {
        return sentence.SentimentPolarity === '-' && sentence.SentimentValue > 0.5;
    });
    return negativeSentences;
}