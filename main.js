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
{symbol: '\u265B', selected: 0, highlighted: 0, color: 'black', type: 'king'},
{symbol: '\u265A', selected: 0, highlighted: 0, color: 'black', type: 'queen'},
{symbol: '\u265D', selected: 0, highlighted: 0, color: 'black', type: 'bishop'},
{symbol: '\u265E', selected: 0, highlighted: 0, color: 'black', type: 'knight'},
{symbol: '\u265C', selected: 0, highlighted: 0, color: 'black', type: 'rook'}]];

$(document).ready(function(){
   
  //Function generates the board with initial state of all the pieces          
  generateGrid(board);

  //When piece is clicked, function determines which piece is selected
  $('body').on('click', 'td', function(){
    $('td').removeClass("selectedPiece");
    $(this).addClass("selectedPiece");
    var columnPosition = $(this).nextAll('td');
    var y = 7 - columnPosition.length;
    var rowPosition = $(this).parent('tr').nextAll('tr');
    var x = 7 - rowPosition.length;
    // console.log(x + ', ' + y);
    // console.log(board[x][y]);
    // console.log(board[xPos][yPos]);
    rules(x, y);
    if(board[xPos][yPos].highlighted === 1) {
      $(this).addClass("possibleMoves");
    }
      else {$('td').removeClass("possibleMoves");
      } 
    // console.log(board);
  })
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

function rules(x, y){
  // console.log(board[x][y]);
  var selectedPiece = board[x][y];
  selectedPiece.selected = 1;
  // console.log(selectedPiece);
  if (selectedPiece.symbol === '\u2659'){
    xPos = x + 1;
    yPos = y;
    board[xPos][yPos].highlighted = 1;
    console.log(xPos + ', ' + yPos);
    // console.log(possibleMoves);
    // console.log(board);
  }
  return board;
}