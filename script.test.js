//  randomWord test

function randomWord(wordList) {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex];
}

// Test case 1: Check if the returned word is from the wordList
const wordList = ['javascript', 'python', 'react'];
const randomWord1 = randomWord(wordList);
console.log(wordList.includes(randomWord1)); // Expected output: true

// Test case 2: Check if the returned word is a string
const randomWord2 = randomWord(wordList);
console.log(typeof randomWord2 === 'string'); // Expected output: true

// Test case 3: Check if the returned word is not an empty string
const randomWord3 = randomWord(wordList);
console.log(randomWord3.length > 0); // Expected output: true




describe('wordToArray', () => {
  it('should return an array with each letter as an index', () => {
    const word = 'hangman';
    const expectedArray = ['h', 'a', 'n', 'g', 'm', 'a', 'n'];
    expect(wordToArray(word)).toEqual(expectedArray);
  });

  it('should return an empty array if the word is empty', () => {
    const word = '';
    const expectedArray = [];
    expect(wordToArray(word)).toEqual(expectedArray);
  });

  it('should return an array with a single letter if the word has only one letter', () => {
    const word = 'a';
    const expectedArray = ['a'];
    expect(wordToArray(word)).toEqual(expectedArray);
  });
});describe('wordToArray', () => {
  it('should return an array with each letter as an index', () => {
    const word = 'hangman';
    const expectedArray = ['h', 'a', 'n', 'g', 'm', 'a', 'n'];
    expect(wordToArray(word)).toEqual(expectedArray);
  });
  it('should return an empty array if the word is empty', () => {
    const word = '';
    const expectedArray = [];
    expect(wordToArray(word)).toEqual(expectedArray);
  });
  it('should return an array with a single letter if the word has only one letter', () => {
    const word = 'a';
    const expectedArray = ['a'];
    expect(wordToArray(word)).toEqual(expectedArray);
  });
});