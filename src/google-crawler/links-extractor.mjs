/*global console*/
const blacklist = ["youtube.com"];

const extractLinks = (data) => {
    console.trace(`extracting links from ${JSON.stringify(data)}`)
    const links = data.items.map(item => item.link);
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