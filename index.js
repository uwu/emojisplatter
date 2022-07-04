import data from "./data";

export default (text) =>
  Object.entries(data).reduce(
    (prev, [r, e]) => prev.replaceAll(new RegExp(`${r}('?e?s)?(ed)?(ing)?(er)?(or)?\\w`, "gi"), "$& " + e),
    text
  );
