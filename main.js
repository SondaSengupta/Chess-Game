https://github.com/jspencersharpe/Chess-Game.git//Load the DOM
document.addEventListener('DOMContentLoaded', function(){  //Loads the DOM
	var test = [["\u2659", "\u2659", "\u2659", "\u2659"],
						['', '', '', ''],
						['', '', '', ''],
						["\u265F", "\u265F", "\u265F", "\u265F"]];
						
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


