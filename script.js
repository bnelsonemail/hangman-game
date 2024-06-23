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
// todohighlight.toggleURI = true

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

const matchingGuesses = []
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
    //console.log(`the random index: ${randomIndex}`)
    

    // return the selected word to access outside of the function
    return selectedWord = randomIndex.split('');
}

// call to initialize game
const startGame = initializeGame();
// call to display the selected word
const wordDisplay = displayWord(selectedWord);









// function to display the current state of the game
function displayGameState(){
    //console.log('word:  ' + guessedLetters.join(' '));
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
/*
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
*/
let inputs = {
    userGuesses: ''
}


function handleGuess(e){
    console.log(`change event: ${e.type}`)
    //console.log(`input value: ${e.target.value}`)

    // Update the inputs object with the new value
    inputs.userGuesses = e.target.value;
    /*switch (e.target.type){
        case 'name':
            inputs = {...inputs, [e.target.name]: e.target.value};
            break;
    };*/
    let letter = inputs.userGuesses
    console.log(`letter: ${letter}`)
    return letter
};

//console.log(`The return value: ${guesses}`)

function submitForm(e){
    e.preventDefault();
    //console.log(`Form submitted with the following data: ${inputs.userGuesses}`);
    // Also add here => form validation, api calls (try, catch), error handling
    document.getElementById('guesses-form');
    /*inputs = {
        userGuesses: ''
    };*/
    console.log('=========')
    console.log(`Form submitted with the following data: ${inputs.userGuesses}`);
    console.log('=========')
    
}



















// function to analyze a guess
function analyzeGuess(){
    
    const guessesSubmit = document.getElementById('guesses-submit')
    guessesSubmit.addEventListener('click', () => {
        let analyzedLetter = inputs.userGuesses
        console.log(`analyzed letter: ${analyzedLetter}`)
        let isCorrectGuess = false;
        console.log(`return value letter: ${inputs.userGuesses}`)
        
        // Check if guessed letter is in the selected word
        for (let i = 0; i < selectedWord.length; i++){
            if(selectedWord [i] === analyzedLetter){
                guessedLetters[i] = analyzedLetter;
                isCorrectGuess = true;
                console.log(`the guess is: ${isCorrectGuess}`);
            }
        }
        // Decrease the number of remaining guesses if the guess is incorrect
        if(!isCorrectGuess) {
            remainingGuesses--;
        }

        // Display letters in separate array 
        if(isCorrectGuess){
            matchingIndices(selectedWord, analyzedLetter)
            console.log(`matchingGuesses: ${matchingGuesses}`)
            // TODO:   fillArray.... is not working
            let test = fillArrayWithMatchingIndices(matchingGuesses, analyzedLetter)
            console.log(`test: ${test}`)
            //console.log(`new array: ${resultArray}`)
        }
        // Display the updated game state
        displayGameState();

        // check if game is won or lost
        if (guessedLetters.join(' ') === selectedWord.join('')) {
            alert (`Congratulations! You guessed the word: ${selectedWord.join("")}`);
        } else if (remainingGuesses === 0) {
            alert (`Game Over!  The word was: ${selectedWord.join("")}`);
        }
    })
}

analyzeGuess()


// function to compare the guess to the selected word and match all the matching indices. 
function matchingIndices(arr,value){
    let index = arr.indexOf(value)
    console.log(arr)
    console.log(value)
    const values = arr.map(value => arr[value]); 
    console.log (`array values: ${values}`)
    
    while (index !== -1){
        matchingGuesses.push(index)
        index = arr.indexOf (value, index + 1)
        console.log(`matching guess value: ${matchingGuesses}`)
        console.log(`index: ${index}`)
    }
    // TODO: matching guesses returns all the indexes and pushes as more matches are correct
    return matchingGuesses
}


// TODO: This function needs work and is not working properly
// FIXME:    
function fillArrayWithMatchingIndices(string, value) {
    // Create an array with the same length as the string, initialized with null
    let resultArray = Array(string.length).fill(null);

    // Iterate through the string to find matching indices
    for (let i = 0; i < string.length; i++) {
        if (string[i] === value) {
            resultArray[i] = value;
        }
    }
    console.log(`resultArray: ${resultArray}`)
    return resultArray;
}


// Display guesses on the webpage
function displayGuesses() {
    //console.log('function is being executed')
    const btn = document.getElementById('guesses-submit')
    btn.addEventListener('click', function(e){
        e.preventDefault()
        // collect form data
        let guesses = inputs.userGuesses
        console.log(`the guess is: ${guesses}`)
        // create a <p> to contain the guesses
        let p = document.createElement('p')
        p.textContent = guesses + ', '
        // append the paragraph to the output div
        let display = document.getElementById('display-guesses')
        display.appendChild(p)
        // clear form after submission
        document.getElementById('guesses-form').reset()     

    })
}

displayGuesses()



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