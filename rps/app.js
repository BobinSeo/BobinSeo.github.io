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
    console.log("end: " + end);
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
	
	
	
    return end;
}


