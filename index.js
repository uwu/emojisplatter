import data from "./data.js";

export default (text) =>
  Object.entries(data).reduce(
    (prev, [r, e]) => prev.replaceAll(new RegExp(`(${r})('?e?s)?(ed)?(ing)?(er)?(or)?\\s`, "gi"), "$& " + e),
    text
  );
