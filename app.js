// Game vars
let 
	min =1,
	max =10,
	winNum = randomNum(min, max),
	guessLeft = 3
;

//Dom Elements
const
	 game = document.querySelector('#game'),
	  minNum = document.querySelector(".min-num"),
	  maxNum = document.querySelector(".max-num"),
	  guessBtn = document.querySelector("#guess-btn"),
	  guessInput = document.querySelector("#guess-input"),
	  message = document.querySelector(".message")
;		  

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Listen for guess
guessBtn.addEventListener('click', function(){
	let guess = parseInt(guessInput.value);

	//clear Input
	guessInput.value = ' ';

	//Validte number range
	if( isNaN(guess) || guess < min || guess > max ){
		setMessage(`Please enter a number between ${min} an ${max}`, 'red' ); 
	}

	//Check for win
	if (guess === winNum) {
		//Game over - Game won
		gameOver(true, `${winNum} is correct, YOU WIN!` );
	
	}
	else{
		guessLeft -= 1 ;

		if(guessLeft === 0){

			gameOver(false, ` Game over, you lost. The correct Number is ${winNum} ` );

		}
		else{
			//Chamge boder color
			guessInput.style.borderColor = 'red';
			//Set message
			setMessage(` ${guess} is wrong. ${guessLeft}  guesses left`, 'red' );
		}
	}
});

// Play Again Listener
game.addEventListener('mousedown', function(e){
	if(e.target.className === 'play-again'){
		window.location.reload();
	}
});
//Game over Function
function gameOver(won, msg){
	let color;
	won === true ? color = 'green' : color = 'red';
	//disable Input
	guessInput.disabled = true;
	//Chamge boder color
	guessInput.style.borderColor = color;
	//Set message
	setMessage(msg, color );

	//Play Again
	guessBtn.value = "PLAY AGAIN";
	guessBtn.className = 'play-again';
}

//Random Number function
function randomNum(){
	return Math.floor(Math.random()*(max - min + 1) + min);
}

//Set Message
function setMessage(msg, color){
	message.textContent = msg;
	message.style.color = color;
};