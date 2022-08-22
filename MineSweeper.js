/*
Question:
https://exercism.org/tracks/javascript/exercises/minesweeper/edit
*/

// Replace a character in a string, given the index
function replaceStringAt(str, replacement, index)
{
    return str.substring(0, index) + replacement + str.substring(index + replacement.length)
}


function getAdjacentMines(input, rowLength, colLength, rowLoop, colLoop)
{
    // [[row, col]]
    const neighbours = [[0, 1], [0, -1], [1, 0], [-1, 0], [-1, -1], [1, 1], [1, -1], [-1, 1]];
    var minesCount = 0;
    for (var i = 0; i < neighbours.length; i++)
    {
      var neighboursRow = rowLoop + neighbours[i][0];
      var neighboursCol = colLoop + neighbours[i][1];
      
      if (neighboursRow >= 0 && neighboursRow < rowLength + 1 && neighboursCol >= 0 && neighboursCol < colLength + 1 && input[neighboursRow][neighboursCol] == "*") { // strict type checking not really needed here
            minesCount++;
      }
    }
    
    return minesCount;
}

export const annotate = (input) => {
  const rowLength = input.length - 1;
  // if there is no row
  if (rowLength < 0) {
    return input;
  }

  const colLength = input[0].split('').length - 1

  for(var rowLoop = 0; rowLoop <= rowLength; rowLoop++)
  {
    for (var colLoop = 0; colLoop <= colLength; colLoop++)
    {
      if (input[rowLoop][colLoop] == " ") {
        // Check all 8 neighbours and add up found mines
        var numOfAdjacentMines = getAdjacentMines(input, rowLength, colLength, rowLoop, colLoop);
  
        if (numOfAdjacentMines > 0) {
          var rowToUpdate = input[rowLoop]; // [[***]]
          input[rowLoop] = replaceStringAt(rowToUpdate, numOfAdjacentMines.toString(), colLoop)
        }
      }

    }
  }
  return input;
};
