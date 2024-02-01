import extractMostColorfulSentences from "./poem-selector.mjs"

/*global console*/
export const handler = async (data) => {
    console.trace(`entered reducer module. received ${data}`);
    const poem = extractMostColorfulSentences(data, 10);
    const formatted =
        poem
            .map(p => `<p>${p}</p>`)
            .join("\n");
    const html = renderTemplate(formatted);
    console.trace(`rendered html: ${html}`);
}

const renderTemplate = (poem) => {
    const template = fs.readFileSync('./template.html', 'utf8');

    return Mustache.render(template, {
      poem: poem
    });
  }