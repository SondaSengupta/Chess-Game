pawn: [x + 1][y]
	initial move: if(pawn counter === 0){[x + 1 || x + 2][y]}
	promote: if(wpawn x === 7 || bpawn x === 0){choose piece to replace}

rook: [x + 1*n][y]
			[x - 1*n][y]
			[x][y + 1*n]
			[x][y - 1*n]

knight: [x + 2][y + 1]
				[x + 1][y + 2]
				[x - 2][y + 1]
				[x + 2][y - 1]

bishop: [x + 1*n][y + 1*n]
				[x - 1*n][y + 1*n]
				[x + 1*n][y - 1*n]
				[x - 1*n][y - 1*n]

queen: [x + 1*n][y]
			 [x - 1*n][y]
			 [x][y + 1*n]
			 [x][y - 1*n]
			 [x + 1*n][y + 1*n]
			 [x - 1*n][y + 1*n]
			 [x + 1*n][y - 1*n]
			 [x - 1*n][y - 1*n]

king: [x + 1][y]
			[x - 1][y]
			[x][y + 1]
			[x][y - 1]
			[x + 1][y + 1]
			[x - 1][y + 1]
			[x + 1][y - 1]
			[x - 1][y - 1]

castle-right: king: [x][y + 2]
							rook: [x][y - 2]
castle-left:  king: [x][y -2]
							rook:	[x][y + 3]