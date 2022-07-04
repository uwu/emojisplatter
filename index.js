import data from "./data";

export default (text) =>
  Object.entries(data).reduce(
    (prev, [r, e]) => prev.replaceAll(new RegExp(r, "g"), "$& " + e),
    text
  );
