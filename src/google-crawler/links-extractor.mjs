/*global console*/
import jsdom from "jsdom";

const blacklist = ["youtube.com"];

const extractUrl = (url) =>
{
  const qIndex = url.indexOf('q=');
  const saIndex = url.indexOf('&sa=');

  return url.substring(qIndex + 2, saIndex);
}

const extractLinks = (data) => {
    console.trace(`extracting links from ${data}`)
    const links = [];
    const dom = new jsdom.JSDOM(data);
    const anchors = dom.window.document.querySelectorAll('a[data-ved]');

    anchors.forEach(a => {
      if (!a.href.startsWith('/search')) {
        links.push(extractUrl(a.href));
      }
    });
    console.trace(`returning ${links}`);
    return links.filter(_ => !containsBlacklistedItems(_));
}

const containsBlacklistedItems = (str) => {
  for (let i = 0; i < blacklist.length; i++) {
    if (str.includes(blacklist[i])) {
      return true;
    }
  }
  return false;
}

export default extractLinks;