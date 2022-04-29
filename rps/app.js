let ourscore = 0;
let opponentscore = 0;
let roundsPlayed = 0;
let roundsToPlay = 3;

 function restart(){
	ourscore = 0;
        opponentscore = 0;
	document.getElementById("ourscore").innerHTML = ourscore;
        document.getElementById("opponentscore").innerHTML = opponentscore;
	roundsPlayed = 0;
	end = 0;
}

function rounds(rounds){
	roundsToPlay = rounds;
	
}
function getRndInteger(min, max, choice) {
    let end = 0;
    let opponent = Math.floor(Math.random() * (max - min)) + min;
    let player = choice;
	
    console.log("n2: " + player);
    console.log("opponent: " + opponent);
	

    //Number(n2 = 1)
    if (opponent == player) {
        end = 2; // gleichstand

    }
    if (opponent == 1 && player == 2) {
        end = 3; // win

    }
    if (opponent == 1 && player == 3) {
        end = 1; // lose

    }
    if (opponent == 2 && player == 1) {
        end = 1; // lose

    }
    if (opponent == 2 && player == 3) {
        end = 3; // win
    }
    if (opponent == 3 && player == 1) {
        end = 3; // win

    }
    if (opponent == 3 && player == 2) {
        end = 1; // lose

    }
	
	document.getElementById("RPS").src = "XVo6.gif";
	document.getElementById("opponent").src = "";
	
	
    setTimeout(function(){
	    if (player == 1) {
        document.getElementById("RPS").src="rock.png";
    }
    if (player == 2) {
        document.getElementById("RPS").src="paper.png";
    }
    if (player == 3) {
        document.getElementById("RPS").src="scissors.png";
    }
	
	
	
    if (opponent == 1) {
        document.getElementById("opponent").src="rock.png";
    }
    if (opponent == 2) {
        document.getElementById("opponent").src="paper.png";
    }
    if (opponent == 3) {
        document.getElementById("opponent").src="scissors.png";
    }
	
    if (end == 1) {
        opponentscore += 1;
    }
    if (end == 2) {
	opponentscore += 1;
        ourscore += 1;
    }
    if (end== 3) {
        ourscore += 1;
    }
	
    document.getElementById("ourscore").innerHTML = ourscore;
    document.getElementById("opponentscore").innerHTML = opponentscore;
    }, 1300);

	roundsPlayed = roundsPlayed +1;
	
	if (roundsPlayed == roundsToPlay) {
		if (ourscore > opponentscore) {
			//user gewinnt
			alert("Du hast gewonnen!");
			restart();
		}
		if (ourscore < opponentscore) {
			//user verliert
			alert("Du hast leider verloren!");
			restart();
		}
			
	}
    
	
	
	
    return end;
}


