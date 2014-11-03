var test = [["\u2659", "\u2659", "\u2659", "\u2659"],
            ['', '', '', ''],
            ['', '', '', ''],
            ["\u265F", "\u265F", "\u265F", "\u265F"]];
// at https://github.com/jspencersharpe/Chess-Game.git
$(document).ready(function(){
  //The double array of the board

  
  //Gives each piece it's own variable
  // var wp1 = test[0][0];
  // var wp2 = test[1][0];
  // var wp3 = test[2][0];
  // var wp4 = test[3][0];

  // var bp1 = test[3][0];
  // var bp2 = test[3][1];
  // var bp3 = test[3][2];
  // var bp4 = test[3][3];
   
  //Function generates the board with initial state of all the pieces          
  generateGrid(test);

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
    // console.log(x + ', ' + y);
    // console.log(test[x]);
    // console.log(test[x][y]);

    possibleMoves = rules(x, y);
    // console.log(currentPiecePosition);
      // $('td').click(function(){
      // if (currentPiecePosition === "\u2659"){
      //   console.log("This is a white pawn.");
      // } else if (this.innerHTML === "\u265F"){
      //   console.log("This is a black pawn.");
      // } else {
      //     return false;
      // }
  })
}); //end of DOMContentLoaded
    ///////////BEGIN MOVE TESTING////////////
    

    // return newPiecePosition;

  //else if (this.innerHTML === "\u265F"){
  //     //highlight (test[x - 1][y])
  //       //If counter of pawns variable === 0
  //         //Then highlight (test[x - 1][y]) && (test[x - 2][y])
  // } else if (this.innerHTML === "\u2656"){
  //     //highlight etc...    
  // }

  

  ////////////////////////////////////////////////////////
  ////$(selector).text(function(index,currentcontent))////
  ////////////////////////////////////////////////////////



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

//Loads currentBoardState() into memory
function currentBoardState(x, y){
  var test = [];
  for(var i = 0; i < x; i++){
    test[i] = [];
    for(var j = 0; j < y; j++){
      test[i][j] = test}
  }
return test;
}

function rules(x, y){
  var currentPiecePosition = test[x][y];
      if (currentPiecePosition === "\u2659"){
        possibleMoves = [{x:x+1, y:y}];
      //highlight (possibleMoves)
      //If counter of pawns variable === 0
        //Then highlight (test[x + 1][y]) && (test[x + 2][y])
        console.log(possibleMoves.type);
        highlightPossibleMoves(possibleMoves.x, possibleMoves.y);
    }
}
    function highlightPossibleMoves() {
      $('td').removeClass("possibleMoves");
      possibleMoves.forEach(function(highlight){
      $('td').addClass("possibleMoves");
      });
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