import jsdom from "jsdom";
import readability from "@mozilla/readability";

import splitIntoSentences from "./article-tokenizer.mjs";

const url = 'https://www.politico.eu/article/ex-russia-wagner-officer-russia-atrocities-ukraine-war-crimes-igor-salikov/'
const res = await fetch(url);
const html = await res.text();
const doc = new jsdom.JSDOM(html);
const reader = new readability.Readability(doc.window.document);
const article = reader.parse();
console.log(article.textContent);
const sentences = splitIntoSentences(article.textContent);