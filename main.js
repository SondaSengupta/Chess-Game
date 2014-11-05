// at https://github.com/jspencersharpe/Chess-Game.git
var board = [
[{symbol: '\u2656', selected: 0, highlighted: 0, color: 'white', type: 'rook'},
{symbol: '\u2658', selected: 0, highlighted: 0, color: 'white', type: 'knight'},
{symbol: '\u2657', selected: 0, highlighted: 0, color: 'white', type: 'bishop'},
{symbol: '\u2655', selected: 0, highlighted: 0, color: 'white', type: 'queen'},
{symbol: '\u2654', selected: 0, highlighted: 0, color: 'white', type: 'king'},
{symbol: '\u2657', selected: 0, highlighted: 0, color: 'white', type: 'bishop'},
{symbol: '\u2658', selected: 0, highlighted: 0, color: 'white', type: 'knight'},
{symbol: '\u2656', selected: 0, highlighted: 0, color: 'white', type: 'rook'}],
[{symbol: '\u2659', selected: 0, highlighted: 0, color: 'white', type: 'pawn'},
{symbol: '\u2659', selected: 0, highlighted: 0, color: 'white', type: 'pawn'},
{symbol: '\u2659', selected: 0, highlighted: 0, color: 'white', type: 'pawn'},
{symbol: '\u2659', selected: 0, highlighted: 0, color: 'white', type: 'pawn'},
{symbol: '\u2659', selected: 0, highlighted: 0, color: 'white', type: 'pawn'},
{symbol: '\u2659', selected: 0, highlighted: 0, color: 'white', type: 'pawn'},
{symbol: '\u2659', selected: 0, highlighted: 0, color: 'white', type: 'pawn'},
{symbol: '\u2659', selected: 0, highlighted: 0, color: 'white', type: 'pawn'}],
[{symbol: '', selected: 0, highlighted: 0, color: '', type: ''},
{symbol: '', selected: 0, highlighted: 0, color: '', type: ''},
{symbol: '', selected: 0, highlighted: 0, color: '', type: ''},
{symbol: '', selected: 0, highlighted: 0, color: '', type: ''},
{symbol: '', selected: 0, highlighted: 0, color: '', type: ''},
{symbol: '', selected: 0, highlighted: 0, color: '', type: ''},
{symbol: '', selected: 0, highlighted: 0, color: '', type: ''},
{symbol: '', selected: 0, highlighted: 0, color: '', type: ''}],
[{symbol: '', selected: 0, highlighted: 0, color: '', type: ''},
{symbol: '', selected: 0, highlighted: 0, color: '', type: ''},
{symbol: '', selected: 0, highlighted: 0, color: '', type: ''},
{symbol: '', selected: 0, highlighted: 0, color: '', type: ''},
{symbol: '', selected: 0, highlighted: 0, color: '', type: ''},
{symbol: '', selected: 0, highlighted: 0, color: '', type: ''},
{symbol: '', selected: 0, highlighted: 0, color: '', type: ''},
{symbol: '', selected: 0, highlighted: 0, color: '', type: ''}],
[{symbol: '', selected: 0, highlighted: 0, color: '', type: ''},
{symbol: '', selected: 0, highlighted: 0, color: '', type: ''},
{symbol: '', selected: 0, highlighted: 0, color: '', type: ''},
{symbol: '', selected: 0, highlighted: 0, color: '', type: ''},
{symbol: '', selected: 0, highlighted: 0, color: '', type: ''},
{symbol: '', selected: 0, highlighted: 0, color: '', type: ''},
{symbol: '', selected: 0, highlighted: 0, color: '', type: ''},
{symbol: '', selected: 0, highlighted: 0, color: '', type: ''}],
[{symbol: '', selected: 0, highlighted: 0, color: '', type: ''},
{symbol: '', selected: 0, highlighted: 0, color: '', type: ''},
{symbol: '', selected: 0, highlighted: 0, color: '', type: ''},
{symbol: '', selected: 0, highlighted: 0, color: '', type: ''},
{symbol: '', selected: 0, highlighted: 0, color: '', type: ''},
{symbol: '', selected: 0, highlighted: 0, color: '', type: ''},
{symbol: '', selected: 0, highlighted: 0, color: '', type: ''},
{symbol: '', selected: 0, highlighted: 0, color: '', type: ''}],
[{symbol: '\u265F', selected: 0, highlighted: 0, color: 'black', type: 'pawn'},
{symbol: '\u265F', selected: 0, highlighted: 0, color: 'black', type: 'pawn'},
{symbol: '\u265F', selected: 0, highlighted: 0, color: 'black', type: 'pawn'},
{symbol: '\u265F', selected: 0, highlighted: 0, color: 'black', type: 'pawn'},
{symbol: '\u265F', selected: 0, highlighted: 0, color: 'black', type: 'pawn'},
{symbol: '\u265F', selected: 0, highlighted: 0, color: 'black', type: 'pawn'},
{symbol: '\u265F', selected: 0, highlighted: 0, color: 'black', type: 'pawn'},
{symbol: '\u265F', selected: 0, highlighted: 0, color: 'black', type: 'pawn'}],
[{symbol: '\u265C', selected: 0, highlighted: 0, color: 'black', type: 'rook'},
{symbol: '\u265E', selected: 0, highlighted: 0, color: 'black', type: 'knight'},
{symbol: '\u265D', selected: 0, highlighted: 0, color: 'black', type: 'bishop'},
{symbol: '\u265A', selected: 0, highlighted: 0, color: 'black', type: 'king'},
{symbol: '\u265B', selected: 0, highlighted: 0, color: 'black', type: 'queen'},
{symbol: '\u265D', selected: 0, highlighted: 0, color: 'black', type: 'bishop'},
{symbol: '\u265E', selected: 0, highlighted: 0, color: 'black', type: 'knight'},
{symbol: '\u265C', selected: 0, highlighted: 0, color: 'black', type: 'rook'}]];

$(document).ready(function(){   //Loads DOM
  generateGrid(board);  //Generates board with initial state of all the pieces  
  //currentBoardState(8, 8); //When piece is clicked, piece and location determined
    $('body').on('click', 'td', function(){
      $('td').removeClass("selectedPiece","possibleMoves");
      $(this).addClass("selectedPiece");
      var columnPosition = $(this).nextAll('td');
      var y = 7 - columnPosition.length;
      var rowPosition = $(this).parent('tr').nextAll('tr');
      var x = 7 - rowPosition.length;
      // board[x][y].selected === 1;
      console.log(x + ', ' + y);
      console.log(board[x][y]);
      rules(x, y);
      generateGrid(board);
      console.log(board);
      console.log(newBoard);
    })
}); //end of DOMContentLoaded    

function generateGrid(board){ //Creates initial board of pieces 
  var $table = document.querySelector('#board'); // $('#board')
  $table.innerHTML = '';
  board.forEach(function(row, i){
  var $tr = document.createElement('tr');
    row.forEach(function(cell, j){
      var $td = createTableCell(cell);
      $td.textContent = cell.symbol;
       if (board[i][j].highlighted === 1){
            $td.classList.add("possibleMoves");
        }
      $tr.appendChild($td);
    });
  $table.appendChild($tr);
  });
}
function createTableCell(value){ //Creates each cell on the board
  var $td = document.createElement('td');
  return $td;
}

// function currentBoardState(x, y){ //Loads currentBoardState() into memory
//   var board = [];
//   for(var i = 0; i < x; i++){
//   board[i] = [];
//   for(var j = 0; j < y; j++){
//     board[i][j] = board}
//   }
//   return board;
// }

function rules(x, y){ //Implements rules to know which cells need highlighting
 $td.classList.remove("possibleMoves"); 
  if (board[x][y].symbol === "\u2659"){
    posX = x + 1;
    posY = y;
    //console.log(posX, posY)
    board[posX][posY].highlighted = 1; 
    //console.log(board[posX][posY])
  }
  //highlightPossibleMoves(posX,posY);
}

//function highlightPossibleMoves(posX, posY) {
  // function calculateNextState(board){
  //   var nextState = [];
  //   board.forEach(function(currentRow, x){
  //     var nextRow = [];
  //     currentRow.forEach(function(currentCell, y){
  //     nextRow.push(currentCell);
  //     });
  //     nextState.push(nextRow);
  //   });

  //   return nextState;
  // }
//}

  //highlight (possibleMoves)
  //If counter of pawns variable === 0
  //Then highlight (test[x + 1][y]) && (test[x + 2][y])
  // console.log(possibleMoves[0]);
  //.log(possibleMoves);
  //highlightPossibleMoves(possibleMoves);

/*Implement into moving of pieces.
 var clicks = 0;
  function onClick() {
      clicks += 1;
      document.getElementById("clicks").innerHTML = clicks;
  };

//////// Capturing Pieces

// if statement about white pieces interfering with black pieces
/
var whitePieces = [wPawn1, wPawn2, wPawn3, wPawn4];
  var whiteCaptured = [];
  whiteCaptured = pieces.slice(1, 2)
      // whiteCaptured contains [wPawn2]
*/
