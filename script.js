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

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const content = document.getElementById('game-container');
    const actions = document.getElementById('actions');
    const heading = document.getElementsByClassName('heading');
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

