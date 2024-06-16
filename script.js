/*              Game Requirements

Description:  User will try to guess a hidden word by guessing letters one at a time.

Requirements:
1.  Display a seriese of blanks representing the hidden word.
2.  Allow users to guess letters one at a time.
3.  Keep track of which letters have been guessed.
4.  Display the guessed letters and the blanks for the hidden word.
5.  Display a win/loss message when the game is over.

Optional:
1.  First screen is a heading with a start button.
2.  The heading and start button will disappear once the game starts.




                    Pseudo Code
Image:
1.  Use photoshop to cut different sections of a picture to use.

Random words:
1.  Either use an array of words or; 
2.  Call on an encyclopedia API (This will be an improvement on a second build)
3.  Once the word is chosen, return it to another array with each of the letters.

// Initialize game variables
wordList = ["javascript", "hangman", "pseudocode", "game"]
selectedWord = random choice from wordList
guessedLetters = []
remainingGuesses = 6
displayWord = "_" repeated for each letter in selectedWord

// Main game loop
while remainingGuesses > 0 and displayWord contains "_":
    print displayWord
    print "Remaining guesses: " + remainingGuesses
    guessedLetter = prompt "Guess a letter: "
    
    if guessedLetter in guessedLetters:
        print "You already guessed that letter."
    else:
        guessedLetters.append(guessedLetter)
        
        if guessedLetter in selectedWord:
            // Update displayWord
            for each letter in selectedWord:
                if letter == guessedLetter:
                    update displayWord at that position with guessedLetter
        else:
            remainingGuesses -= 1
            print "Incorrect guess."

// End game
if displayWord contains no "_":
    print "Congratulations! You guessed the word: " + selectedWord
else:
    print "Game over! The word was: " + selectedWord



                    Working Code
*/

document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    const startButton = document.getElementById('start-button');
    const content = document.getElementById('game-container');
    const actions = document.getElementById('actions');
    const intro = document.getElementById('intro');
    

    startButton.addEventListener('click', () => {
        //Reveal the content
        content.style.display = 'flex';
        content.style.flexWrap = 'wrap';

        actions.style.display = 'flex';
        actions.style.justifyContent = 'center';
        actions.style.alignItems = 'center';
    
        // Optionally, you can hide the start button after clicking
        startButton.style.display = 'none';
        intro.style.display = 'none';
    })
})

let guessedLetters = [];
let wrongGuesses = 0;
let remainingGuesses = 6;
console.log(`guessed letters: ${guessedLetters}`);
console.log(`wrong guesses: ${wrongGuesses}`);


const gameContainer = document.getElementById('game-container');

// set up an array to track the guessed letters
//const guessedLetters = Array(selectedWord).fill(' ');
//console.log(`The guessed letters: ${guessedLetters}`);




// provide an array of words for the random selection of words
const wordList = [
    'javascript', 
    'python', 
    'react',
    'hangman',
    'labrador',
    'pseudocode',
    'game',
    'cobol',
    'swift',
    'rust',
    'pascal',
    'perl',
    'java',
    'waterskiing',
    'software',
    'programming',
    'computer',
    'hardware',
    'engineering',
    'google',
    'netflix',
    'weather',
    'hurricane',
    'summer',
    'autumn',
    'clock'
];

// Add an initialized game function
function initializeGame(){
    // select a random word from the word list
    const randomIndex = randomWord(wordList);
    console.log(`the random index: ${randomIndex}`)
    

    // return the selected word to access outside of the function
    return selectedWord = randomIndex.split('');
}

// call to initialize game
const startGame = initializeGame();
// call to display the selected word
const wordDisplay = displayWord(selectedWord);









// function to display the current state of the game
function displayGameState(){
    console.log('word:  ' + guessedLetters.join(' '));
    console.log('Remaining Guesses:  ' + remainingGuesses);
}




// function to generate a random word from the wordList 

function randomWord(wordList) {
    const randomIndex = Math.floor(Math.random() * wordList.length);
   // const selectedWord = wordList[randomIndex];
    return wordList[randomIndex];;
}



// function to place selected word into an array on the web page in the word container

console.log(`the selectedWord is: ${selectedWord}`)

// Call the container


// create and append an element for each item in the array
function displayWord(selectedWord) {
    const wordContainer = document.getElementById('selected-word-container');
    selectedWord.forEach(function (val) {
        const word = document.createElement('div');
        word.classList.add('selected-word');

        // Convert the letter to uppercase
        //word.textContent = val.toUpperCase(); 
       word.textContent = '_';
       wordContainer.appendChild(word);


    });
}

const guessForm = document.getElementById('guesses-form');
    guessForm.addEventListener('submit', function (e){
        // prefent the default form submission behavior
        e.preventDefault();

        // collect form data
        const formData = new FormData(e.target);

        // stor form data in a variable
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        console.log(formObject)
        return formObject;
    });

//let letter = formObject

let inputs = {
    userGuesses: ''
}


function handleGuess(e){
    console.log(`change event: ${e}`)
    inputs[e.target.name] = target.value
};


function submitForm(e){
    e.preventDefault();
    console.log(`submit event: ${e}`);
    console.log(`Form submitted with the following data: ${inputs}`);
    // Also add here => form validation, api calls (try, catch), error handling
    document.getElementById('guesses-form');
    inputs = {
        userGuesses: ''
    };
}




/*
// function to handle a guess
function handleGuess(letter){
    let isCorrectGuess = false;
    console.log(`inital guess: ${isCorrectGuess}`);
    // Check if guessed letter is in the selected word
    for (let i = 0; i < selectedWord.length; i++){
        if(selectedWord [i] === letter){
            guessedLetters[i] = letter;
            isCorrectGuess = true;
            console.log(`the guess is: ${isCorrectGuess}`);
        }
    }
    // Decrease the number of remaining guesses if the guess is incorrect
    if(!isCorrectGuess) {
        remainingGuesses--;
    }
    // Display the updated game state
    displayGameState();

    // check if game is won or lost
    if (guessedLetters.join(' ') === selectedWord) {
        alert (`Congratulations! You guessed the word: ${selectedWord}`);
    } else if (remainingGuesses === 0) {
        alert (`Game Over!  The word was: ${selectedWord}`);
    }
}
*/
//handleGuess(letter);
/*
function revealWord (selectedWord) {
    const revealContainer = document.getElementById('reveal-word-container');
    const guessForm = document.getElementById('guesses-form');
    guessForm.addEventListener('submit', function (e){
        // prefent the default form submission behavior
        e.preventDefault();

        // collect form data
        const formData = new FormData(e.target);

        // stor form data in a variable
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        console.log(formObject)
    });
*/
    /*
    // use forEach loop and index (idx) to run if statement with includes to reveal letters.
    selectedWord.forEach(function (val, idx)){
        // create div element and class to contain revealed word and styling capabilities
        const reveal = document.createElement('div');
        reveal.classList.add('reveal-word');

        // if statement to compare guess with selectedWord


    }
}*/


/*
// function to place chosen word into an array making each letter an index
function wordToArray(selectedWord) {
    return selectedWord.split('');
}

// Example usage:
let selectedWord = randomWord(wordList);
let wordArray = wordToArray(selectedWord);
console.log (`the wordToArray: ${wordArray}`);
*/