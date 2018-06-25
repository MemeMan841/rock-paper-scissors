// var userMove = prompt("Rock Paper Scissors\nEnter r, p, or s");
// console.log(userMove);
//var userMove="0";
function rock(){
	evaluate("r");
}

function paper(){
	evaluate("p");
}

function scissors(){
	evaluate("s");
}

var userCount = 0;
var enemyCount = 0;

function evaluate(userMove){
	var enemyNum = Math.floor(Math.random() * Math.floor(3));

	var enemyMove;
	var score;
	if(enemyNum == 0){
		enemyMove = "r";
	}else if(enemyNum == 1){
		enemyMove = "p";
	}else if(enemyNum == 2){
		enemyMove = "s";
	}
	console.log(enemyMove);
	var win = "You win!";
	var lose = "You lose!";
	var tie = "You tie!";

	//rock
	if((userMove == "r") && (enemyMove == "s")){
		console.log(win);
		userCount += 1;
		score = win;
	}else if((userMove == "r") && (enemyMove == "p")){
		console.log(lose);
		enemyCount += 1;
		score = lose;
	}else if((userMove == "r") && (enemyMove == "r")){
		console.log(tie);
		score = tie;
		//paper
	}else if((userMove == "p") && (enemyMove == "r")){
		console.log(win);
		userCount += 1;
		score = win;
	}else if((userMove == "p") && (enemyMove == "s")){
		console.log(lose);
		enemyCount += 1;
		score = lose;
	}else if((userMove == "p") && (enemyMove == "p")){
		console.log(tie);
		score = tie;
		//scissors
	}else if((userMove == "s") && (enemyMove == "p")){
		console.log(win);
		userCount += 1;
		score = win;
	}else if((userMove == "s") && (enemyMove == "r")){
		console.log(lose);
		enemyCount += 1;
		score = lose;
	}else if((userMove == "s") && (enemyMove == "s")){
		console.log(tie);
		score = tie;
	}

	document.getElementById("status").innerHTML=score;
	document.getElementById("counter1").innerHTML=userCount;
	document.getElementById("counter2").innerHTML=enemyCount;
}





