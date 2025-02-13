

const p1 = {
    score: 0,
    button: document.querySelector('#p1'),
    display: document.querySelector('#p1score')
}

const p2 = {
    score: 0, // This refers to the player's score.
    button: document.querySelector('#p2'),
    display: document.querySelector('#p2score') // The span element displaying the score.
}


// Reset button and winning score selection
const reset = document.querySelector('#reset');
const winScoreSelect = document.querySelector('#select'); 

let winScore = 4;
let gameOver = false;

// Update/Modify both players' scores through this function
function updateScores(player, opponent){
    if(!gameOver){
        player.score++;
        if(player.score === winScore){
            gameOver = true;
            // When a player's score reaches the winScore, gameOver is set to true, preventing further score increments.
            player.display.classList.add('has-text-primary');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
        // If the score is not equal to the winning score, we'll update and display the new score.
    }
}

p1.button.addEventListener('click', function (){
    updateScores(p1, p2);
})

p2.button.addEventListener('click', function (){
    updateScores(p2, p1);
    })


// Select - for choosing the winning score
winScoreSelect.addEventListener('change', function () {
    winScore = parseInt(this.value);
    resetFunc(); // Reset the game after changing the winning score.
})
// 1. To get the value from the select, we use the 'this' keyword.
// 2. The value of select will be a string and not a number, so we use parseInt() to convert it.
// 3. The winScore now has the same value as the select.

//Reset
reset.addEventListener('click', resetFunc);
function resetFunc(){
    gameOver = false;
    for (let p of [p1, p2]) { // Loop through both players. Useful if we have more than 2 players.
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-primary', 'has-text-danger');
        p.button.disabled = false;
    }
}

//  All of this logic is looped into one function to reset the game state.
// p1.score = 0;
// p2.score = 0; // Set score back to 0.
// p1.display.textContent = 0;
// p2.display.textContent = 0; // Set display back to 0.
// p1.display.classList.remove('has-text-primary', 'has-text-danger');
// p2.display.classList.remove('has-text-primary', 'has-text-danger');
// p1.button.disabled = false;
// p2.button.disabled = false;

// p1score.style.color = "";
// p2score.style.color = ""; // Resets the color of the text once reset is hit.