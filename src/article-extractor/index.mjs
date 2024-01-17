/*global console, fetch*/
import jsdom from "jsdom";
import readability from "@mozilla/readability";
import { SecretsManagerClient, GetSecretValueCommand } from "@aws-sdk/client-secrets-manager";

export const handler = async (url) => {
    console.trace(`entered article tokenizer. processing ${url}`);
    try {
        const article = await extractArticleText(url);
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

async function extractArticleText(url) {
    const res = await fetch(url);
    const html = await res.text();
    const doc = new jsdom.JSDOM(html);
    const reader = new readability.Readability(doc.window.document);
    const article = reader.parse();
    return article;
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
    const sentimentAnalysisResponse = await fetch('http://api.text2data.com/v3/Analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            DocumentText: article.textContent,
            PrivateKey: sentimentAnalysisApiKey,
            Secret: ""
        })
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