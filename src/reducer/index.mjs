import extractMostColorfulSentences from "./poem-selector.mjs"
import Mustache from 'mustache';
import * as fs from 'fs'
import aws from 'aws-sdk'

/*global console*/
export const handler = async (data) => {
    console.trace(`entered reducer module. received ${data}`);
    const s3 = new aws.S3();
    const poem = extractMostColorfulSentences(data, 10);
    const formatted =
        poem
            .map(p => `<p>${p}</p>`)
            .join("\n");
    const html = renderTemplate(formatted);
    console.trace(`rendered html: ${html}`);

    const putParams = {
      Bucket: 'poeme-concrete',
      Key: 'index.html',
      Body: html,
      ContentType: 'text/html',
    };

    await s3.putObject(putParams).promise();
}

const renderTemplate = (poem) => {
    const template = fs.readFileSync('./template.html', 'utf8');

    return Mustache.render(template, {
      poem: poem
    });
  }