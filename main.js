
// at https://github.com/jspencersharpe/Chess-Game.git
document.addEventListener('DOMContentLoaded', function(){
  //The double array of the board
  var test = [["\u2659", "\u2659", "\u2659", "\u2659"],
            ['', '', '', ''],
            ['', '', '', ''],
            ["\u265F", "\u265F", "\u265F", "\u265F"]];
  
  //Gives each piece it's own variable
  var wp1 = test[0][0];
  var wp2 = test[0][1];
  var wp3 = test[0][2];
  var wp4 = test[0][3];

  var bp1 = test[3][0];
  var bp2 = test[3][1];
  var bp3 = test[3][2];
  var bp4 = test[3][3];
   
  //Function generates the board with initial state of all the pieces          
  generateGrid(test);
  function generateGrid(test){
    var $table = document.querySelector('#board');
  $table.innerHTML = '';
    test.forEach(function(row){
      var $tr = document.createElement('tr');
      row.forEach(function(cell){
        var $td = createTableCell(cell);
        $td.textContent = cell;
        $tr.appendChild($td);
      });
      $table.appendChild($tr);
    });
  }
  function createTableCell(value){
    var $td = document.createElement('td');
    return $td;
  }

  function currentBoardState(x, y){  //Loads currentBoardState() into memory
  var test = [];
    for(var i = 0; i < x; i++){
      test[i] = [];
      for(var j = 0; j < y; j++){
        test[i][j] = test
      }
    }
    return test;
  }

  //When piece is clicked, function determines which piece is selected
  currentBoardState(4, 4);
  $('td').click(function(){
    $('td').removeClass("selectedPiece");
    $(this).text();
    $(this).addClass("selectedPiece");
    var columnPosition = $(this).nextAll('td');
    var y = 3 - columnPosition.length
    var rowPosition = $(this).parent('tr').nextAll('tr');
    var x = 3 - rowPosition.length
    var currentPiecePosition = test[x][y];
    var newPiecePosition;
    console.log(x + ', ' + y);
    console.log(test[x]);
    console.log(test[x][y]);
    
    rules(x, y);
    // console.log(currentPiecePosition);
      $('td').click(function(){
      if (currentPiecePosition === "\u2659"){
        console.log("This is a white pawn.");
      } else if (this.innerHTML === "\u265F"){
        console.log("This is a black pawn.");
      } else {
          return false;
      }

    ///////////BEGIN MOVE TESTING////////////
    function rules(x, y){
      if (currentPiecePosition.innerHTML === "\u2659"){
        newPiecePosition = test[x + 1][y];
      //highlight (test[x + 1][y])
      //If counter of pawns variable === 0
        //Then highlight (test[x + 1][y]) && (test[x + 2][y])
        console.log(newPiecePosition);
      }

    return newPiecePosition;

  //else if (this.innerHTML === "\u265F"){
  //     //highlight (test[x - 1][y])
  //       //If counter of pawns variable === 0
  //         //Then highlight (test[x - 1][y]) && (test[x - 2][y])
  // } else if (this.innerHTML === "\u2656"){
  //     //highlight etc...    
  // }

    function move(){

    }
  }
    ///////////END MOVE TESTING////////////////
  });

  ////////////////////////////////////////////////////////
  ////$(selector).text(function(index,currentcontent))////
  ////////////////////////////////////////////////////////  

}); //end of DOMContentLoaded

/*Implement into moving of pieces.
 var clicks = 0;
    function onClick() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };

    if even, black's turn. if odd, white's turn.
<<<<<<< HEAD
    add an onClick that disables color class once clicked

  function generateGrid(test){
    var $table = $('#board');
	$table.innerHTML = ''; // if replaced by $table.empty(); it will remove everything and give 0;

    test.forEach(function(row){ // first time, row => [0, 0, 0]
      // create a tr for the row
      var $tr = document.createElement('tr');
      row.forEach(function(cell){ // first time, cell => 0
        // cell goes into a new td
        // that td goes into a tr
        var $td = createTableCell(cell);
        $td.textContent = cell;
        $tr.appendChild($td);
        // alternative:
        // $tr.appendChild( createTableCell(cell) );
      });
      // add that tr to the table
      $table.append($tr);
    });
  }
  function createTableCell(value){
    var $td = document.createElement('td');
    // Apply black or white class to the td
    if(value === 1){
      $td.classList.add('bCell');
    } else {
      $td.classList.add('wCell');
    }
    return $td;
  } 
 
=======
    add an onClick that disables color class once clicked.
>>>>>>> ab5e7656d4f5ca31bf9c16d654d00f7ace384539

function neighborCellCount(x, y) {
var neighbors = 0;
//checks its row neighbors 
  for (var i = x-1; i <= x+1; i++) {
    if (i < 0 || i > (test.length - 1)) {
    }
     else {
//checks the cell neighbors
  for(var j = y-1; j <= y+1; j++) {
    if (j < 0 || j > (test[i].length - 1) || (j === y && i === x)) {
     }
    else {
    if(test[i][j] === 1) {
     neighbors += 1;
     }
    }
   }
  }
 }
    return neighbors;
}
function calculateNextState(currentState){
    var nextState = [];
    currentState.forEach(function(currentRow, x){
      var nextRow = [];
      currentRow.forEach(function(currentCell, y){
        var nextCellState = neighborCellCount(x, y);
        nextRow.push(nextCellState);
      });
      nextState.push(nextRow);
    });
    return nextState;
  }
  

//////// Capturing Pieces

// if statement about white pieces interfering with black pieces
/
var whitePieces = [wPawn1, wPawn2, wPawn3, wPawn4];
  var whiteCaptured = [];
  whiteCaptured = pieces.slice(1, 2)
        // whiteCaptured contains [wPawn2]





*/



