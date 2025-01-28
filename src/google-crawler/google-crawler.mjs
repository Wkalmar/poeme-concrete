/*global console, fetch*/
import extractLinks from './links-extractor.mjs';
import { SecretsManagerClient, GetSecretValueCommand } from "@aws-sdk/client-secrets-manager";

const performSearch = async () => {
  console.trace('entered performSearch');

    const apiKeySecretName = "GOOGLE_SEARCH_API_KEY";
    const apiIdSecretName = "GOOGLE_SEARCH_ID";

    const client = new SecretsManagerClient({
        region: "eu-central-1",
    });

    try {
      const apiKey = await client.send(
          new GetSecretValueCommand({
              SecretId: apiKeySecretName,
              VersionStage: "AWSCURRENT"
          })
      );
      const apiId = await client.send(
        new GetSecretValueCommand({
            SecretId: apiIdSecretName,
            VersionStage: "AWSCURRENT"
        })
      );
      const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${apiId}&q=russian+war+crimes+in+ukraine&dateRestrict=w`;
      console.trace(`getting data from ${url}`);

      const res = await fetch(url);

      const data = await res.json();

      console.trace('retrieved all data');
      return extractLinks(data);

    } catch (err) {
      console.error(err);
    }
}

export default performSearch;
