// Array of correct words
let correctWords = ['قط', 'اسد', 'بط', 'قرد', 'جمل', 'غنم'];

// Array of Arabic characters
const arabicChars = ['ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'ه', 'و', 'ي'];

// Array to store clicked Arabic characters
let clickedChars = [];

// Function to create image elements and append them to the image box
function populateImageBox() {
    const imageBox = document.getElementById('image-box');
    const correctWordsElement = document.getElementById('correct-words');
    const formedWordsElement = document.getElementById('formed-words');

    // Display correct words
    correctWordsElement.textContent = correctWords.join(' - ');

    // Array representing the order of image numbers
    const orderOfImages = [16,2,13,23,1,24,22,24,21,12,25,5,27,16,8,19,28,8,10,21];
    
    const folderPath = '../../../images/wordgame/';

    for (let i = 0; i < orderOfImages.length; i++) {
        const imageNumber = orderOfImages[i];
        const imageUrl = `${folderPath}${imageNumber}.jpg`;

        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.alt = `Image ${imageNumber}`;

        // Use a closure to capture the correct pageNumber for each image
        imageElement.addEventListener('click', (function (pageNumber) {
            return function () {
                handleImageClick(pageNumber);
            };
        })(imageNumber));

        imageBox.appendChild(imageElement);
    }
}


// Function to handle image click
function handleImageClick(pageNumber) {
    const arabicChar = arabicChars[pageNumber - 1];
    clickedChars.push(arabicChar);

    console.log(arabicChar);

    // Check if two or three characters are clicked
    if (clickedChars.length === 2 ) {
        const formedWord = clickedChars.join('');

        // Check if the formed word is correct
        if (isCorrectWord(formedWord)) {
            console.log(`Correct! You formed the right word: ${formedWord}`);
            highlightCorrectWord(formedWord);
            removeCorrectWord(formedWord);
            clickedChars = [];
        } 
         
    }
    if (  clickedChars.length === 3) {
        const formedWord = clickedChars.join('');

        // Check if the formed word is correct
        if (isCorrectWord(formedWord)) {
            console.log(`Correct! You formed the right word: ${formedWord}`);
            highlightCorrectWord(formedWord);
            removeCorrectWord(formedWord);
        } 
        else {
            console.log(`Incorrect! Try again.`); 
            displayErrorMessage();
        }

        // Clear the clicked characters array for the next attempt
        clickedChars = [];
    }
}

// Function to display an error message
function displayErrorMessage() {
    const errorMessageElement = document.getElementById('error-message');
    errorMessageElement.textContent = 'Try again';
    errorMessageElement.style.color = 'red';
    setTimeout(clearErrorMessage, 2000); // Clear the message after 2 seconds
}

// Function to clear the error message
function clearErrorMessage() {
    const errorMessageElement = document.getElementById('error-message');
    errorMessageElement.textContent = '';
}
// Function to check if the formed word is correct
function isCorrectWord(formedWord) {
    console.log(formedWord);
    return correctWords.includes(formedWord);
}

// Function to highlight the correct word
function highlightCorrectWord(formedWord) {
    const formedWordsElement = document.getElementById('formed-words');
    formedWordsElement.innerHTML += `<span class="highlight">${formedWord}</span> - `;
}

// Function to remove the formed word from the list of correct words
function removeCorrectWord(formedWord) {
    correctWords = correctWords.filter(word => word !== formedWord);
    const correctWordsElement = document.getElementById('correct-words');
    correctWordsElement.textContent = correctWords.join(' - ');

    // Check if all words are formed
    if (correctWords.length === 0) {
        console.log('All words formed!');
    }
}

// Call the function to populate the image box
populateImageBox();
// 3,27,3,24,3,4,7,28,27,20,10,27,7,11,1,11,25,28,3,6