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

// at https://github.com/jspencersharpe/Chess-Game.git
$(document).ready(function(){   
  //Function generates the board with initial state of all the pieces        
  generateGrid(board);

  //When piece is clicked, function determines which piece is selected
  currentBoardState(8, 8);
  $('td').click(function(){
  $('td').removeClass("selectedPiece");
  $(this).text();
  $(this).addClass("selectedPiece");
  var columnPosition = $(this).nextAll('td');
  var y = 7 - columnPosition.length;
  var rowPosition = $(this).parent('tr').nextAll('tr');
  var x = 7 - rowPosition.length;
  // board[x][y].selected === 1;
  console.log(x + ', ' + y);
  // console.log(board[x]);
  console.log(board[x][y]);
  var possibleMoves = rules(x, y);
  })
  // $('td').click(function(){
  //   $('td').removeClass("possibleMoves");
    
  // })
}); //end of DOMContentLoaded    

function generateGrid(board){
  var $table = document.querySelector('#board');
$table.innerHTML = '';
  board.forEach(function(row){
  var $tr = document.createElement('tr');
  row.forEach(function(cell){
    var $td = createTableCell(cell);
    $td.textContent = cell.symbol;
    $tr.appendChild($td);
  });
  $table.appendChild($tr);
  });
}

function createTableCell(value){
  var $td = document.createElement('td');
  return $td;
}

//Loads currentBoardState() into memory
function currentBoardState(x, y){
  var board = [];
  for(var i = 0; i < x; i++){
  board[i] = [];
  for(var j = 0; j < y; j++){
    board[i][j] = board}
  }
return board;
}

function rules(x, y){
  if (board[x][y].symbol === "\u2659"){
    posX = x + 1;
    posY = y;
    console.log(posX, posY)
    board[posX][posY].highlighted = 1; 
    console.log(board[posX][posY])
    if (board[posX][posY].highlighted == 1){
      $('td').addClass("possibleMoves");
    }
  }
  //highlight (possibleMoves)
  //If counter of pawns variable === 0
  //Then highlight (test[x + 1][y]) && (test[x + 2][y])
  // console.log(possibleMoves[0]);
  //.log(possibleMoves);
  //highlightPossibleMoves(possibleMoves);
}

function highlightPossibleMoves(array) {
  $('td').removeClass("possibleMoves");
  // for(var i = 0, i < 0; i++){
  $('td').addClass("possibleMoves");
  // }
}

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

