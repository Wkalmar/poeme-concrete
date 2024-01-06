/*global console, fetch*/
import jsdom from "jsdom";

import readability from "@mozilla/readability";

import splitIntoSentences from "./article-tokenizer.mjs";

export const handler = async (url) => {
    console.trace(`entered article tokenizer. processing ${url}`);
    try {
        const res = await fetch(url);
        const html = await res.text();
        const doc = new jsdom.JSDOM(html);
        const reader = new readability.Readability(doc.window.document);
        const article = reader.parse();
        const sentences = splitIntoSentences(article.textContent);
        const response = {
            statusCode: 200,
            body: sentences,
          };
        return response;
    }
    catch (err) {
        console.log(err);
    }
}

