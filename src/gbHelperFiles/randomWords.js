import { generateSlug, totalUniqueSlugs } from "random-word-slugs";

const generateWord=generateSlug;

// const totalWords = totalUniqueSlugs();
// console.log(totalWords);
// const word="xxxxx";
// const word=generateSlug(4, { format: "title" });

export const word = generateSlug(1, {
  partsOfSpeech: ["noun"],
  // categories: {
  //   noun: ["animals","business"],
  // },
});

export const words = generateSlug(5, { format: "sentence" });

// console.log("totalWords",totalWords);

// console.log("This is the word=>",word);

// export default word;


// https://www.npmjs.com/package/random-word-slugs