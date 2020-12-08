const { sampleInput } = require('./day5SampleInput');
const { puzzleInput } = require('./day5PuzzleInput');

function parseInput(input) {
  const inputGroups = input.split('\n\n');
  const lettersOnly = [];

  for (group of inputGroups) {
    const groupSize = group.split('\n').length;
    const groupCount = {
      size: groupSize,
      letterCounts: {}
    };
    
    const groupLetters = group.split('\n').join('');
    for (letter of groupLetters) {
      if (groupCount.letterCounts[letter]) {
        groupCount.letterCounts[letter] += 1;
      } else {
        groupCount.letterCounts[letter] = 1;
      }
    }

    lettersOnly.push(groupCount)
  }

  return lettersOnly;
}

function questionsAnswered(input) {
  const groupsInfo = parseInput(input);
  let answers = 0;

  for (group of groupsInfo) {
    for(count of Object.values(group.letterCounts)) {
      if (count === group.size) answers++;
    }
  }

  return answers;
}

console.log(questionsAnswered(puzzleInput));
