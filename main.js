https://github.com/jspencersharpe/Chess-Game.git//Load the DOM
<<<<<<< HEAD
$(document).ready(function(){  //Loads the DOM
=======
document.addEventListener('DOMContentLoaded', function(){  //Loads the DOM
>>>>>>> bfb0d53a35cbd1df5e9933e8886ab544041a9663
	var test = [["\u2659", "\u2659", "\u2659", "\u2659"],
						['', '', '', ''],
						['', '', '', ''],
						["\u265F", "\u265F", "\u265F", "\u265F"]];

//Give each piece it's own variable
var wp1 = test[0][0];
var wp2 = test[0][1];
var wp3 = test[0][2];
var wp4 = test[0][3];

var bp1 = test[3][0];
var bp2 = test[3][1];
var bp3 = test[3][2];
var bp4 = test[3][3];
						
<<<<<<< HEAD
generateGrid(test);
=======
// <<<<<<< HEAD
console.log(test);
});
=======
  generateGrid(test);
  function generateGrid(test){
    var $table = document.querySelector('#board');
	$table.innerHTML = '';
    // matrix => [0, 1, 0]
    //           [0, 1, 1]
    //           [0, 1, 1]

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
      $table.appendChild($tr);
    });
  }
  function createTableCell(value){
    var $td = document.createElement('td');
    // Apply alive or dead class to the td
    return $td;
  }

});
>>>>>>> 0ea2dfc654e9b9515999252d25f0f08b59d6a8eb



/* 
 * Implement into moving of pieces.
 var clicks = 0;
    function onClick() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };

    if even, black's turn. if odd, white's turn.
    add an onClick that disables color class once clicked
>>>>>>> bfb0d53a35cbd1df5e9933e8886ab544041a9663

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

//$(document).ready(function() {
    // refresh
    test = calculateNextState(test);
    generateGrid(test); // if this statement removed it doesn't generate
 


  // Implement into moving of pieces.
    var clicks = 0;
    function onClick() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    }

   // if even, black's turn. if odd, white's turn.
   //add an onClick that disables color class once clicked
});

