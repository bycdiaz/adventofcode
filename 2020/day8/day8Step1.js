const { sampleInput } = require('./day8SampleInput');
const { puzzleInput } = require('./day8PuzzleInput');

function parseInput(input) {
  const commands = input.split('\n');
  const parsedCommands = [];

  for (command of commands) {
    const [operation, argument] = command.split(' ');
    const commandDetails = {
      operation,
      sign: argument.slice(0,1),
      number: argument.slice(1),
    }
    parsedCommands.push(commandDetails);
  }

  return parsedCommands;
}

function executeCommand(command, currentIndex, accumulator) {
  let computedIndex = null;
  const commandNumber = Number(command.number);

  if (command.operation === 'acc' && command.sign === '+') {
    accumulator += commandNumber;
  } else if (command.operation === 'acc' && command.sign === '-') {
    accumulator -= commandNumber;
  }

  if (command.operation === 'jmp' && command.sign === '+') {
    computedIndex = currentIndex + commandNumber;
    accumulator = 0;
  } else if (command.operation === 'jmp' && command.sign === '-') {
    computedIndex = currentIndex - commandNumber;
    accumulator = 0;
  }

  return {
    accumulator,
    computedIndex
  }
}

function handheldHalting(input) {
  const parsedInput = parseInput(input);
  const indexOfCommandsSeen = new Set();
  let accumulatorValue = 0;
  
  for (let index = 0; index < parsedInput.length; index++) {
    if (indexOfCommandsSeen.has(index)) {
      return accumulatorValue;
    } else {
      indexOfCommandsSeen.add(index);
    }

    const currentCommand = parsedInput[index];
    const commandResult = executeCommand(currentCommand, index, accumulatorValue);
    
    if (commandResult.computedIndex) {
      index = commandResult.computedIndex - 1;
    }

    if (currentCommand.operation === 'acc') {
      accumulatorValue = commandResult.accumulator;
    }
  }
}

console.log(handheldHalting(puzzleInput));
