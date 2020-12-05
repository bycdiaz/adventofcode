const { puzzleInput } = require('./day3Input');
const { slopes } = require('./day3Input');

function move(terrainMap, maxLength, row, column, slope) {
  return {
    currentPosition: terrainMap[row][column],
    currentRow: row + slope.down,
    currentColumn: (column + slope.right) % maxLength,
  }
}

function treesEncountered(terrainMap, slope) {
  const maxRowLength = terrainMap[0].length;
  let currentRow = 0;
  let currentColumn = 0;
  let treesFound = 0;

  while (currentRow < terrainMap.length) {
    const moveResult = move(terrainMap, maxRowLength, currentRow, currentColumn, slope);
    const treeFound = moveResult.currentPosition === '#';
    currentRow = moveResult.currentRow;
    currentColumn = moveResult.currentColumn;

    if (treeFound) treesFound++;
  }
  
  return treesFound;
}

function treesEncounteredAllSlopes(map, slopes) {
  const treesFromAllSlopes = [];
  const multiply = (product, treesFound) => product * treesFound;

  for (slope of slopes) {
    treesFromAllSlopes.push(treesEncountered(map, slope));
  }

  return treesFromAllSlopes.reduce(multiply);
}

console.log(treesEncounteredAllSlopes(puzzleInput, slopes));
