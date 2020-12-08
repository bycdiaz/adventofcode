const { sampleInput } = require('./day5SampleInput');
const { puzzleInput } = require('./day5PuzzleInput');

function parseInput(input) {
  const inputGroups = input.split('\n\n');
  const lettersOnly = [];

  for (group of inputGroups) {
    const groupCount = {};
    const groupLetters = group.split('\n').join('');
    for (letter of groupLetters) {
      if (!groupCount[letter]) {
        groupCount[letter] = 1;
      }
    }

    lettersOnly.push(groupCount)
  }

  return lettersOnly;
}

function questionsAnswered(input) {
  const groupCount = parseInput(input);
  let answers = 0;

  for (group of groupCount) {
    answers += Object.keys(group).length;
  }

  return answers;
}

console.log(questionsAnswered(puzzleInput));