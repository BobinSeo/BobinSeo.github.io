function getRndInteger(min, max, choice) {
          	let end = 0;
	        let n1 = Math.floor(Math.random() * (max - min)) + min;
          	let n2 = choice;
	        console.log(n2);
          //Number(n2 = 1)
          if(n1 == n2){
    	      end = 2; // gleichstand
    	      return end;
          }
          if(n1 == 1 && n2 == 2){
    	      end = 3; // win
    	      return end;
          }
          if(n1 == 1 && n2 == 3){
    	      end = 1; // lose
    	      return end;
          }
          if(n1 == 2 && n2 == 1){
    	      end = 1; // lose
    	      return end;
          }
          if(n1 == 2 && n2 == 3){
    	      end = 3; // win
    	      return end;
          }
          if(n1 == 3 && n2 == 1){
    	      end = 3; // win
    	      return end;
          }
          if(n1 == 3 && n2 == 2){
    	      end = 1; // lose
    	      return end;
          }
	console.log(end);
	if(n2 == 1){
		onclick="document.getElementById('RPS').src='rock.png'";
	}
	if(n2 == 2){
		onclick="document.getElementById('RPS').src='paper.png'";
	}
	if(n2 == 3){
		onclick="document.getElementById('RPS').src='scissors.png'";
	}
        }
        

