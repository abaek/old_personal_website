$(document).ready(function(){





	var cardset = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
	var cardnames = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
	
	var playersum = 0;
	var dealersum = 0;
	//defines global variable so I can access and change it anywhere
	var rdn = 0;
	var win = 0;
	var numwin = 0;
	var numlose = 0;
	var numtie = 0;
	var pic = "";
	var gameover = 1;
	var ace = false;
	var aceplayer = 0;
	var acedealer = 0;


	var randomcard = function(){
		rdn = Math.floor((Math.random()*13));
		pic = "<img src = 'cards/" + cardnames[rdn] + ".jpg'/>"
	}

	var dealplayer = function(){
		randomcard();
		$('#playercards').append(pic);
		playersum += cardset[rdn];

		//ace count
		if (rdn === 0) {
			aceplayer++;
		}

		//ace exception (lower sum by 10 is over 21)
		if (playersum>21 && aceplayer > 0) {
				playersum -= 10;
				aceplayer--;
		}

		

		$('#playertotaltext').empty();
		$('#playertotaltext').append(playersum);	
	}

	var dealdealer = function(){
		randomcard();
		$('#dealercards').append(pic);
		dealersum += cardset[rdn];

		//ace count
		if (rdn === 0) {
			acedealer++;
		}

		//ace exception (lower sum by 10 is over 21)
		if (dealersum>21 && acedealer > 0) {
				dealersum -= 10;
				acedealer--;
		}
		

		
	}

	var finishdealer = function () {
		while (dealersum<17){
			dealdealer();
		}
		$('#dealertotaltext').append(dealersum);	
	}

	var reset = function(){
		$('.cardsarea').empty();
		$('#winmsg').empty();
		$('#playertotaltext').empty();
		$('#dealertotaltext').empty();
		dealersum = 0;
		playersum = 0;
		win = 0;
		gameover = 0;
		aceplayer = 0;
		acedealer = 0;

	}


		$('#deal').click(function(){
			if (gameover === 1) {
				//resets cards and deals cards for player and dealer
				reset();

				dealplayer();
				dealplayer();

				dealdealer();
			}



		});
	


		$('#hit').click(function(){
			if (gameover === 0) {
				dealplayer();

				//checks for bust
				if (playersum>21){
					$('#winmsg').append("You Bust!");
					numlose++;
					$('#losetext').empty();
					$('#losetext').append(numlose);	
					gameover = 1;
				}
			}
		});
	

	
		//determines win conditions after player stands
		$('#stand').click(function(){
			if (gameover === 0) {
				finishdealer();

				if (dealersum<22) {
					if (dealersum<playersum){
						win = 1;
					} else if (dealersum == playersum){
						win = 2;
					} else {
						win = 0;
					}
				} else {
					//dealer busts
					win = 1;
				}

				if (win === 1) {
					$('#winmsg').append("You win!");
					numwin++;
					$('#wintext').empty();
					$('#wintext').append(numwin);	
				} else if (win ==2) {
					$('#winmsg').append("You tie!");
					numtie++;
					$('#tietext').empty();
					$('#tietext').append(numtie);	
				} else {
					$('#winmsg').append("You lose!");	
					numlose++;
					$('#losetext').empty();
					$('#losetext').append(numlose);
				}

				gameover = 1;
			}

		});		
	

		//CSS STUFF
	$('.button').mouseenter(function(){
		$(this).css('background-color', '#4B8FC3');
	});

	$('.button').mouseleave(function(){
		$(this).css('background-color', '#B4DAFC');
	});

});