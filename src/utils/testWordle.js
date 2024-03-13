var words = require("an-array-of-english-words");

const guesses = words.filter((d) => d.length === 5);

function countOccurrences(arr, val) {
  let count = 0;
  arr.forEach((item) => {
    if (item === val) {
      count++;
    }
  });
  return count;
}

function goodGuesses(
  neededLetters,
  neededLettersPerSlot,
  excludedLetters,
  excludedLettersPerSlot
) {
  let goodGuesses = guesses.filter((word) => {
    let isBadWord = false;

    // yellow letters
    neededLetters.forEach((neededLetter) => {
      if (word.indexOf(neededLetter) === -1) {
        isBadWord = true;
      } else if (
        countOccurrences(Array.from(word), neededLetter) <
        countOccurrences(neededLetters, neededLetter)
      ) {
        isBadWord = true;
      }
    });
    if (isBadWord) return false;

    // yellow letters
    excludedLettersPerSlot.forEach((excludedSlotLetter, index) => {
      if (word[index] === excludedSlotLetter) {
        isBadWord = true;
      }
    });
    if (isBadWord) return false;

    // green letters
    for (let i = 0; i < 5; i++) {
      if (
        neededLettersPerSlot[i] !== "" &&
        neededLettersPerSlot[i] !== word[i]
      ) {
        isBadWord = true;
      }
    }
    if (isBadWord) return false;

    // red letters
    excludedLetters.forEach((letter) => {
      if (word.includes(letter)) {
        isBadWord = true;
        return;
      }
    });
    if (isBadWord) return false;

    return isBadWord ? false : true;
  });
  return goodGuesses;
}

export { goodGuesses };
