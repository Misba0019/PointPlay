

const p1 = {
    score: 0,
    button: document.querySelector('#p1'),
    display: document.querySelector('#p1score')
}

const p2 = {
    score: 0, //sum
    button: document.querySelector('#p2'),
    display: document.querySelector('#p2score')//span
}


//reset
const reset = document.querySelector('#reset');
const winScoreSelect = document.querySelector('#select'); 

let winScore = 4;
let gameOver = false;

//Update/Modify, both the player's performace through this function.
function updateScores(player, opponent){
    if(!gameOver){
        player.score++;
        if(player.score === winScore){
            gameOver = true;
            //When a player's score reaches the winScore, gameOver is set to true, preventing further score increments.
            player.display.classList.add('has-text-primary');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
//If score is not equal to winning score then we'll update and display new score. Otherwise, nothing happens.
    }
}

p1.button.addEventListener('click', function (){
    updateScores(p1, p2);
})

p2.button.addEventListener('click', function (){
    updateScores(p2, p1);
    })


//Select - for choosing the winning score
winScoreSelect.addEventListener('change', function () {
    winScore = parseInt(this.value);
    resetFunc(); //reset after score change
})
//1. To get the value out of the select we used this keyword.
//2. The value of select will be a string and not number, to make that string into number, we used pareInt().
//3. The winScore now has the same value as select.

//Reset
reset.addEventListener('click', resetFunc);
function resetFunc(){
    gameOver = false;
    for(let p of [p1, p2]){ //Here we looped 2 players, if we have 2 or more players, this is useful for that.
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-primary', 'has-text-danger');
        p.button.disabled = false;
    }
}

//  So, all of this logic here we looped it into one piece function.
    // p1.score = 0;
    // p2.score = 0; //set score back to 0
    // p1.display.textContent = 0;
    // p2.display.textContent = 0;// set display back to 0;
    // p1.display.classList.remove('has-text-primary', 'has-text-danger');
    // p2.display.classList.remove('has-text-primary', 'has-text-danger');
    // p1.button.disabled = false;
    // p2.button.disabled = false;

// p1score.style.color = "";
// p2score.style.color = ""; //Resets the color of the text once hit reset.
