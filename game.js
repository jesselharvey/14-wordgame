import { commonWords } from "./constants.js"

console.log(commonWords)

// document.querySelector("#test").innerHTML = commonWords[0]
// /\ this was to test the commonWords arr /\

// got the words my dude now whats the move??
// sort? filter? loop?

//i think loop bc if i can get it to bring up 'i' and keep 'i' for each round

// for (let i = 0; i < commonWords.length; i++) {
//   console.log(commonWords[i])
// }

// https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array/23976260#23976260
// /\ this link shows about using Math. methods /\

let word = commonWords[Math.floor(Math.random() * commonWords.length)]
console.log("Word is,", word)

// cool got the random shit down,
// now, oi, (lmao) I gotta figure out how to put my new "word" var to use
// probs using the .length method.
// After that I think ive got to map or somehow
// transform the chars of the string "word" into unified placeholders

// OG for loop right here
// for (let i = 0; i < word.length; i++) {
//   console.log(word[i])
// }

// maybe mixing a for loop in here might work keep that shit in mind,
// like a mix of charAt([i]) or something like that and replacing the char w underscores or hwatever
// n o i c e  my guy beautiful (:

// https://www.w3schools.com/jsref/jsref_obj_string.asp <<==={ suuuuper dank ref right here my dude
// so from here ima run some testing in converting charAt([i]) into my characters

// just as a note, might need to make dashes global,
// and then put a for loop inside of it ???

for (let i = 0; i < word.length; i++) {
  let currentLetter = word[i]
  let wordArr = word.split("")
  wordArr
  console.log(wordArr)
  console.log(wordArr[i])
  // console.log("This is the current letter,", currentLetter)
  // console.log(word.charAt(currentLetter))
}
// let dashes = word.replace(word.charAt([i]), '_')
// console.log(dashes)
