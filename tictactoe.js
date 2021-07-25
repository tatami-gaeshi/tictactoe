/* jshint esversion: 6 */

function printBoard(board){
	console.log(`${board[0]} ${board[1]} ${board[2]}
${board[3]} ${board[4]} ${board[5]}
${board[6]} ${board[7]} ${board[8]}`);
}

function cpuMove(size){
	return Math.floor((Math.random() * size) + 1);
}

function verifyBoard(board, player){
	//check columns  
	let c1 = 1; let c2 = 4; let c3 = 7;	
	for(i = 0; i < 3; i++){
		if(board[c1+i] === `${player.symbol}` &&
		board[c2+i] ===`${player.symbol}` &&
		board[c3+i] ===`${player.symbol}`){
			return 1;
		}
	}
}

let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];


let turn = 0;

const available = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);

while(1){
	printBoard(board);
	console.log(`# of open spaces: ${available.size}`);
	let input = prompt("Choose a board space:");

	board[input-1] = `X`;
	available.delete(+input);

	let cpuInput = cpuMove(available.size);
	board[cpuInput - 1] = `O`;
	available.delete(+cpuInput);
	

	if(turn > 1) break;

	turn++;
}

