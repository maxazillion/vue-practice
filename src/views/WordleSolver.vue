<template>
  <div class="container">
    <h2>Wordle Helper</h2>
    <p>Use this to help solve wordles</p>
    <p>
      Click the guesses or enter them manually. Click the colored boxes to match
      the wordle colors to generate good guesses.
    </p>
    <button class="btn btn-primary" @click.prevent="handleReset">Reset</button>
    <div class="row justify-content-center pt-3">
      <div class="col-md-4">
        <div class="options">
          <h4>Possible Options:</h4>

          <table class="table table-hover">
            <tbody>
              <tr
                v-for="(option, index) in possibleOptions"
                :key="index"
                @click.prevent="handleOptionsClick(option)"
              >
                <td>{{ option }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-md-4">
        <h4>Type your guess:</h4>

        <div class="wordle-input">
          <input
            v-for="(box, index) in boxes"
            :key="index"
            v-model="boxes[index]"
            @input="handleInput(index, $event)"
            @keydown.enter.prevent="handleEnter(index)"
            class="wordle-box"
            :class="{ filled: boxes[index] }"
            :maxlength="1"
            ref="inputs"
          />
        </div>
      </div>
      <div class="col-md-4">
        <div class="options">
          <h4>Guesses:</h4>
          <ul>
            <li v-for="(guess, index) in guesses" :key="index">
              <input
                v-for="(guessBreakdown, indexBreakdown) in guess.breakdown"
                :key="indexBreakdown"
                v-model="Array.from(guess.word)[indexBreakdown]"
                :class="colorCode[guessBreakdown]"
                class="wordle-box"
                :maxlength="1"
                ref="inputs"
                @click="
                  guess.isOldData
                    ? null
                    : handleChangeColorCode(index, indexBreakdown)
                "
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { goodGuesses } from "../utils/testWordle";

export default {
  data() {
    return {
      boxes: Array(5).fill(""),
      possibleOptions: ["water", "trick", "amber", "pluto", "shake"],
      colorCode: ["incorrect", "correct", "correct_letter"],
      guesses: [],
      excludedLetters: [],
      excludedLettersPerSlot: [[], [], [], [], []],
      neededLetters: [],
      neededLettersPerSlot: ["", "", "", "", ""],
    };
  },
  methods: {
    handleReset() {
      this.possibleOptions = ["water", "trick", "amber", "pluto", "shake"];
      this.guesses = [];
      this.excludedLetters = [];
      this.excludedLettersPerSlot = [[], [], [], [], []];
      this.neededLetters = [];
      this.neededLettersPerSlot = ["", "", "", "", ""];
    },
    handleInput(index, event) {
      if (event.target.value.length === 1 && index < this.boxes.length - 1) {
        this.$nextTick(() => {
          this.$refs.inputs[index + 1].focus();
        });
      }
    },
    handleEnter() {
      this.guesses.push({ word: this.boxes, breakdown: [0, 0, 0, 0, 0] });
      this.boxes = Array(5).fill("");
      if (this.guesses.length > 1) {
        this.guesses[this.guesses.length - 2].isOldData = true;
      }
      if (this.guesses.length >= 6) {
        this.guesses.shift();
      }
    },
    handleOptionsClick(option) {
      this.guesses.push({
        word: Array.from(option),
        breakdown: [0, 0, 0, 0, 0],
      });

      if (this.guesses.length >= 6) {
        this.guesses.shift();
      }
    },
    handleChangeColorCode(guessIndex, breakdownIndex) {
      const guessData = this.guesses[guessIndex];
      if (guessData.breakdown[breakdownIndex] > 1) {
        guessData.breakdown[breakdownIndex] = 0;
      } else {
        guessData.breakdown[breakdownIndex] += 1;
      }

      // remove all instances of entered letters from the included in order to get the count of each number correct
      const extenedNeededLetters = [
        ...this.neededLetters.filter(
          (letter) => !guessData.word.includes(letter)
        ),
      ];

      const extenededNeededLettersPerSlot = [...this.neededLettersPerSlot];
      const extendExcludedLetters = [...this.excludedLetters];
      const extendExcludedLettersPerSlot = [...this.excludedLettersPerSlot];

      guessData.breakdown.forEach((number, index) => {
        switch (number) {
          case 1:
            extenededNeededLettersPerSlot[index] = guessData.word[index];
            extenedNeededLetters.push(guessData.word[index]);
            if (extendExcludedLetters.includes(guessData.word[index])) {
              extendExcludedLetters.splice(
                extendExcludedLetters.indexOf(guessData.word[index]),
                1
              );
            }
            if (extendExcludedLettersPerSlot[index] == guessData.word[index]) {
              extendExcludedLettersPerSlot[index] = "";
            }
            break;
          case 2:
            extenedNeededLetters.push(guessData.word[index]);
            extendExcludedLettersPerSlot[index] = guessData.word[index];
            if (
              extenededNeededLettersPerSlot[index] === guessData.word[index]
            ) {
              extenededNeededLettersPerSlot[index] = "";
            }
            if (extendExcludedLetters.includes(guessData.word[index])) {
              extendExcludedLetters.splice(
                extendExcludedLetters.indexOf(guessData.word[index]),
                1
              );
            }
            break;
          case 0:
            if (
              !extendExcludedLetters.includes(guessData.word[index]) &&
              !extenedNeededLetters.includes(guessData.word[index])
            )
              extendExcludedLetters.push(guessData.word[index]);
            break;
          default:
            console.log("opse");
        }
      });

      this.excludedLetters = extendExcludedLetters;
      this.excludedLettersPerSlot = extendExcludedLettersPerSlot;
      this.neededLetters = extenedNeededLetters;
      this.neededLettersPerSlot = extenededNeededLettersPerSlot;

      this.possibleOptions = goodGuesses(
        extenedNeededLetters,
        extenededNeededLettersPerSlot,
        extendExcludedLetters,
        extendExcludedLettersPerSlot
      );
    },
  },
};
</script>

<style scoped>
.wordle-box {
  background-color: #f3f3f3;
  color: #000;
  width: 40px; /* Adjust width as needed */
  height: 40px; /* Adjust height as needed */
  margin: 10px;
  border: 2px solid #ddd;
  border-radius: 5px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
}

.filled {
  background-color: #007bff; /* Change color for filled boxes */
  color: #fff; /* Change color for filled box text */
}

.options {
  padding: 0px;
}

.options ul {
  list-style-type: none;
  padding: 0;
}

.options ul li {
  margin-bottom: 5px;
}

.incorrect {
  background-color: #ff5252;
  color: #fff;
}

.correct_letter {
  background-color: #ffeb3b;
  color: #fff;
}

.correct {
  background-color: #4caf50;
  color: #fff;
}

.table.table-hover tr:hover {
  cursor: pointer;
}
</style>
