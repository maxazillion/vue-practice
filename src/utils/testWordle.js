var words = require("an-array-of-english-words");
var _ = require("lodash");
prompt = require("prompt-sync")();

guesses = words.filter((d) => d.length === 5);

function testMyWordle(wordToGuess) {
  let neededLetters = [];
  let neededLettersPerSlot = ["", "", "", "", ""];
  let excludedLetters = [];
  let excludedLettersPerSlot = [[], [], [], [], []];
  let wordsGuessed = [];
  let count = 0;
  let myGuess = "anvil";

  for (let i = 0; i < 5; i++) {
    if (i !== 0) {
      myGuess = goodGuesses(
        neededLetters,
        neededLettersPerSlot,
        excludedLetters,
        excludedLettersPerSlot
      )[count];
      while (wordsGuessed.indexOf(myGuess) !== -1) {
        myGuess = goodGuesses(
          neededLetters,
          neededLettersPerSlot,
          excludedLetters,
          excludedLettersPerSlot
        )[count];
        count++;
      }
      count = 0;
    }
    for (let j = 0; j < 5; j++) {
      if (wordToGuess.indexOf(myGuess[j]) !== -1) {
        if (wordToGuess[j] === myGuess[j]) {
          neededLettersPerSlot[j] = wordToGuess[j];
        } else {
          neededLetters.push(myGuess[j]);
          excludedLettersPerSlot[j].push(myGuess[j]);
        }
      } else {
        excludedLetters.push(myGuess[j]);
      }
    }
    if (wordToGuess === myGuess) {
      i = 20;
      return {
        win: 1,
        wordGuessed: myGuess,
        wordToGuess,
      };
    }
    wordsGuessed.push(myGuess);
    myGuess = "";
  }
  return {
    win: 0,
    wordGuessed: myGuess,
    wordToGuess,
  };
}

function goodGuesses(
  neededLetters,
  neededLettersPerSlot,
  excludedLetters,
  excludedLettersPerSlot
) {
  let excludedLettersPlaceholder = [];
  let areExcludedLetters = false;
  excludedLettersPerSlot.forEach((slot, index) => {
    excludedLetters.forEach((letter) => {
      if (slot.indexOf(letter) === -1) {
        if (letter !== "" && !areExcludedLetters) {
          areExcludedLetters = true;
        }

        slot.push(letter);
      }
    });
    excludedLettersPlaceholder.push(slot);
  });
  excludedLettersPerSlot = excludedLettersPlaceholder;

  let goodGuesses = guesses.filter((word) => {
    let badWord = false;
    neededLetters.forEach((neededLetter, index) => {
      if (word.indexOf(neededLetter) === -1) {
        badWord = true;
      }
    });
    for (let i = 0; i < 5; i++) {
      if (neededLettersPerSlot[i] !== "") {
        if (neededLettersPerSlot[i] !== word[i]) {
          badWord = true;
        }
      }
    }
    if (areExcludedLetters) {
      for (let i = 0; i < 5; i++) {
        if (excludedLettersPerSlot[i].indexOf(word[i]) !== -1) {
          badWord = true;
          i = 50;
        }
      }
    }
    return !badWord;
  });
  return goodGuesses;
}

function worldeCompanion() {
  let neededLetters = [];
  let neededLettersPerSlot = ["", "", "", "", ""];
  let excludedLetters = [];
  let excludedLettersPerSlot = [[], [], [], [], []];
  let myGuess = "";
  let codedResult = "";
  for (let i = 0; i < 5; i++) {
    while (myGuess.length !== 5) {
      myGuess = prompt("what did you guess?");
    }
    while (codedResult.length !== 5) {
      console.log("enter your results");
      console.log("0 right");
      console.log("1 wrong spot");
      console.log("2 wrong letter");
      codedResult = Array.from(prompt("what is your coded result?"));
    }

    codedResult.forEach((number, index) => {
      switch (number) {
        case "0":
          neededLettersPerSlot[index] = myGuess[index];
          break;
        case "1":
          neededLetters.push(myGuess[index]);
          excludedLettersPerSlot[index].push(myGuess[index]);
          break;
        default:
          excludedLetters.push(myGuess[index]);
        // code block
      }
    });
    console.log(
      goodGuesses(
        neededLetters,
        neededLettersPerSlot,
        excludedLetters,
        excludedLettersPerSlot
      )
    );
    myGuess = "";
    codedResult = "";
  }
}

// worldeCompanion();

function wordleAnnal() {
  let win = 0;
  let lose = 0;
  let game;
  let wordsWeDidnt = [];
  let wordsWeGuessed = [];
  let wrongGuessPairs = [];
  for (let i = 0; i < 50; i++) {
    game = testMyWordle(guesses[Math.floor(Math.random() * 10000)]);
    if (game.win === 1) {
      win++;
      wordsWeGuessed.push(game.wordGuessed);
    } else {
      lose++;
      wordsWeDidnt.push(game.wordToGuess);
      wordsWeGuessed.push(game.wordGuessed);
      wrongGuessPairs.push([[game.wordToGuess][game.wordGuessed]]);
    }
  }
  console.log(win + " wins");
  console.log(lose + " losses");
  console.log(wordsWeGuessed);
  console.log(wordsWeDidnt);
}

worldeCompanion();
