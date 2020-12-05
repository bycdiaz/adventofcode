// const { sampleMap } = require('./day3Input');
const { puzzleInput } = require('./day3Input');

function move(terrainMap, maxLength, row, column) {
  return {
    currentPosition: terrainMap[row][column],
    currentRow: row + 1,
    currentColumn: (column + 3) % maxLength,
  }
}

function treesEncountered(terrainMap) {
  const maxRowLength = terrainMap[0].length;
  let currentRow = 0;
  let currentColumn = 0;
  let treesFound = 0;
  

  while (currentRow < terrainMap.length) {
    const moveResult = move(terrainMap, maxRowLength, currentRow, currentColumn);
    const treeFound = moveResult.currentPosition === '#';
    currentRow = moveResult.currentRow;
    currentColumn = moveResult.currentColumn;

    if (treeFound) treesFound++;
  }
  
  return treesFound;
}

console.log(treesEncountered(puzzleInput));
