function getRndInteger(min, max, choice) {
    let end = 0;
    let n1 = Math.floor(Math.random() * (max - min)) + min;
    let n2 = choice;
	
    console.log("n2: " + n2);
    
    //Number(n2 = 1)
    if (n1 == n2) {
        end = 2; // gleichstand

    }
    if (n1 == 1 && n2 == 2) {
        end = 3; // win

    }
    if (n1 == 1 && n2 == 3) {
        end = 1; // lose

    }
    if (n1 == 2 && n2 == 1) {
        end = 1; // lose

    }
    if (n1 == 2 && n2 == 3) {
        end = 3; // win
    }
    if (n1 == 3 && n2 == 1) {
        end = 3; // win

    }
    if (n1 == 3 && n2 == 2) {
        end = 1; // lose

    }
    console.log("end: " + end);
    if (n2 == 1) {
        document.getElementById("RPS").src="rock.png";
    }
    if (n2 == 2) {
        document.getElementById("RPS").src="paper.png";
    }
    if (n2 == 3) {
        document.getElementById("RPS").src="scissors.png";
    }
	
	
	
    return end;
}


