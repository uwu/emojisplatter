import emojiSplatter from "./index.js";

function allTextNodes() {
  const textNodes = [];

  for (const elem of document.querySelectorAll("*"))
    for (const node of elem.childNodes)
      if (node instanceof Text) textNodes.push(node);
  return textNodes;
}

export const replaceAll = () =>
  allTextNodes().forEach((node) => {
    if (node.ESPLAT === node.data) return;
    node.ESPLAT_O = node.data;
    node.data = emojiSplatter(node.data);
    node.ESPLAT = node.data;
  });

export const unreplaceAll = () =>
  allTextNodes().forEach((node) => {
    if (!node.ESPLAT) return;
    node.data = node.ESPLAT_O;
    delete node.ESPLAT;
    delete node.ESPLAT_O;
  });
