/*1.1 - cheater*/
var player = "";
var opp = "";

do {
	player = prompt("rock, paper, or scissors");
	

	if(player =="rock") {
		opp = "paper"
		alert(opp+"! I win!")
	}
	else if(player =="paper") {
		opp = "scissors"
		alert(opp+"! I win!")
	}
	else if(player =="scissors") {
		opp = "rock"
		alert(opp+"! I win!")
	}
}while (player !="rock" || player !="paper" || player !="scissors");