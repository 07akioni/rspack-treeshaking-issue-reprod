import { math } from "micromark-extension-math";

console.log(math);

import("katex").then((katex) => {
  console.log(katex);
});
