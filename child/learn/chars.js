// JavaScript to dynamically create 28 squares with Arabic characters
const content = document.querySelector('.content');
const overlay = document.getElementById('overlay');
const overlayImage = document.getElementById('overlayImage');
console.log(overlayImage);
// Arabic characters array
const arabicChars = ['ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'ه', 'و', 'ي'];

for (let i = 0; i < arabicChars.length; i++) {
    const square = document.createElement('div');
    square.className = 'square';
    square.innerText = arabicChars[i];
    square.addEventListener('click', () => {
        console.log(overlayImage)
        overlayImage.src = `../../images/chars/${i+1}.jpg`;
        overlay.style.display = 'flex';
    });
    content.appendChild(square);
}

overlay.addEventListener('click', () => {
    closeOverlay();
});

function closeOverlay() {
    overlay.style.display = 'none';
}
