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

// const randomWord = commonWords[Math.floor(Math.random() * commonWords.length)]
// console.log("Word is,", randomWord)

let filteredWords = (x) => {
  for (let i = 0; i < x.length; i++) {
    // console.log(x.length)
    // console.log(x)
    let wordLength = x.length
    if (wordLength >= 3) {
      return x
    }

    // let filteredWords = commonWords.value.length > 3
    // console.log(filteredWords)
    // return filteredWords
  }
}
let trueWord = commonWords.filter(filteredWords)
console.log(trueWord)

const randomWord = trueWord[Math.floor(Math.random() * commonWords.length)]
// console.log(randomWord.filter(filteredWords))

// let filterFunct = (function (x) {
//   console.log(x)

//   // return x = x.length > 3 ? x : false
// })
// let word = randomWord.filter(filterFunct)
// console.log(word)

// let filteredWords = (x) => {
//   console.log(x)
// return x.length >= 3
// }
// console.log(randomWord.filter(filteredWords))
// let word = randomWord.filter(filteredWords)

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

// const wordArr = word.split('')
// console.log(wordArr)

// const mappedWord = wordArr.map(function (item) {
//   for (let i = 0; i < wordArr.length; i++) {
//   console.log(wordArr[i])
//   // return item
//   }
// })
// document.querySelector("#test").innerHTML = mappedWord.join("")

let dashes = ""
for (let i = 0; i < randomWord.length; i++) {
  let currentLetter = randomWord[i]
  // let hiddenWord = ""
  dashes += "_ "
  console.log(dashes)
  console.log("This is the current letter,", currentLetter)
  // hiddenWord += dashes
  // console.log(hiddenWord)
  // hiddenWord = dashes.toString('')

  // let wordArr = word.split("")
  // const mappedWord = wordArr.map(function (item) {
  //   console.log(mappedWord)
  // })
  // console.log(wordArr)
  // console.log(wordArr[i])
}
document.querySelector("#line").innerHTML = dashes

// let dashes = word.replace(word.charAt([i]), '_')
// console.log(dashes)

// good job my dude (: go home and breezy it up g you need it

// Soooooo now I've got each item from the array filtered into words only longer than 3 characters
// and after that I took my filtered list and randomized them, taking those random words
//    and replacing their characters with placeholders.

//yet now I've got to figure out how to input a value, whether it be a button with a corresponding value,
//  or like a text input(char. limit set to 1 and then and make sure it's toLowerCase so i can use a strict ( === ) comparison operator)

// tbh I don't think that'll be too bad, the real hurdle is gonna be correlating the values so that it removes the dashes

// this should be a function right?
// TEXT INPUT VS. TEST AQUÍ
let guess = document.getElementById("guess").value
let guessBtn = document.getElementById("guessButton")
console.log(guessBtn)
console.log(guess)


// grab input value from text field
// check if input value is strictly equal to (===) a possible value in through the word,
//    so either I've got to put a function within my preestablished for loop or make another one?


//.........................................................................................
//.FFFFFFFFFFFFFFFF..FIIII...INNNNNN.......NNNNN.........AAAAAAA.........LLLLL.............
//.FFFFFFFFFFFFFFFF..FIIII...INNNNNN.......NNNNN........AAAAAAAA.........LLLLL.............
//.FFFFFFFFFFFFFFFF..FIIII...INNNNNNN......NNNNN........AAAAAAAA.........LLLLL.............
//.FFFFFFFFFFFFFFFF..FIIII...INNNNNNNN.....NNNNN........AAAAAAAAA........LLLLL.............
//.FFFFFFFFFFFFFFFF..FIIII...INNNNNNNN.....NNNNN.......AAAAAAAAAA........LLLLL.............
//.FFFFF.............FIIII...INNNNNNNNN....NNNNN.......AAAAAAAAAAA.......LLLLL.............
//.FFFFF.............FIIII...INNNNNNNNN....NNNNN.......AAAAAAAAAAA.......LLLLL.............
//.FFFFF.............FIIII...INNNNNNNNNN...NNNNN......AAAAAAAAAAAA.......LLLLL.............
//.FFFFFFFFFFFFFFF...FIIII...INNNNNNNNNN...NNNNN......AAAAAAAAAAAAA......LLLLL.............
//.FFFFFFFFFFFFFFF...FIIII...INNNNNNNNNNN..NNNNN......AAAAAA.AAAAAA......LLLLL.............
//.FFFFFFFFFFFFFFF...FIIII...INNNNNNNNNNNN.NNNNN.....AAAAAA..AAAAAA......LLLLL.............
//.FFFFFFFFFFFFFFF...FIIII...INNNNN.NNNNNN.NNNNN.....AAAAAA..AAAAAAA.....LLLLL.............
//.FFFFFFFFFFFFFFF...FIIII...INNNNN..NNNNNNNNNNN....AAAAAAA...AAAAAA.....LLLLL.............
//.FFFFF.............FIIII...INNNNN..NNNNNNNNNNN....AAAAAAAAAAAAAAAA.....LLLLL.............
//.FFFFF.............FIIII...INNNNN...NNNNNNNNNN....AAAAAAAAAAAAAAAAA....LLLLL.............
//.FFFFF.............FIIII...INNNNN...NNNNNNNNNN...AAAAAAAAAAAAAAAAAA....LLLLL.............
//.FFFFF.............FIIII...INNNNN....NNNNNNNNN...AAAAAAAAAAAAAAAAAA....LLLLL.............
//.FFFFF.............FIIII...INNNNN....NNNNNNNNN...AAAAAAAAAAAAAAAAAAA...LLLLL.............
//.FFFFF.............FIIII...INNNNN.....NNNNNNNN...AAAAAA.......AAAAAA...LLLLL.............
//.FFFFF.............FIIII...INNNNN......NNNNNNN..AAAAAA........AAAAAA...LLLLLLLLLLLLLLLL..
//.FFFFF.............FIIII...INNNNN......NNNNNNN..AAAAAA........AAAAAAA..LLLLLLLLLLLLLLLL..
//.FFFFF.............FIIII...INNNNN.......NNNNNN.AAAAAAA.........AAAAAA..LLLLLLLLLLLLLLLL..
//.........................................................................................

// let filteredWords = (x) => {
//   for (let i = 0; i < x.length; i++) {
//     console.log(x.length)
//     console.log(x)
//     let wordLength = x.length
//     if (wordLength >= 3) {
//       return x
//     }
//   }
// }

// let trueWord = commonWords.filter(filteredWords)
// console.log(trueWord)

// const randomWord = trueWord[Math.floor(Math.random() * commonWords.length)]

// let dashes = ""
// for (let i = 0; i < randomWord.length; i++) {
//   let currentLetter = randomWord[i]
//   dashes += "_ "
//   console.log(dashes)
//   console.log("This is the current letter,", currentLetter)
// }
// document.querySelector("#line").innerHTML = dashes
