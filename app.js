// Game vars
let 
	min =1,
	max =10,
	winNum = 2,
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

//Liisten for guess
guessBtn.addEventListener('click', function(){
	let guess = parseInt(guessInput.value);

	//Validte number range
	if( isNaN(guess) || guess < min || guess > max ){
		setMessage(`Please enter a number between ${min} an ${max}`, 'red' )
	}

	//Check for win
	if (guess === winNum) {
		//Game over - Game won
		//disable Input
		guessInput.disabled = true;
		//Chamge boder color
		guessInput.style.borderColor = 'green'
		//Set message
		setMessage(`${winNum} is correct, YOU WIN!`, 'green' )
	}
	else{
		guessLeft -= 1 ;

		if(guessLeft === 0){
		//disable Input
		guessInput.disabled = true;
		//Chamge boder color
		guessInput.style.borderColor = 'red';
		//Set message
		setMessage(` Game over, you lost. The correct Number is ${winNum} `, 'red' );
		}
		else{
			//clear Input
			guessInput.value = ' ';
			//Chamge boder color
			guessInput.style.borderColor = 'red';
			//Set message
			setMessage(` ${guess} is wrong. ${guessLeft}  guesses left`, 'red' );
		}
	}
});

//Set Message
function setMessage(msg, color){
	message.textContent = msg;
	message.style.color = color;
};