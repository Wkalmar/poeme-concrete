import extractMostColorfulSentences from "./poem-selector.mjs"

/*global console*/
export const handler = async (data) => {
    console.trace(`entered reducer module. received ${data}`);
    const poem = extractMostColorfulSentences(data, 10);
    console.trace(`extracted poem: ${poem}`);
}