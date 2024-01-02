// JavaScript to dynamically create 28 squares with Arabic characters
const content = document.querySelector('.content');
const overlay = document.getElementById('overlay');
const overlayImage = document.getElementById('overlayPics');
console.log(overlayImage);
// Arabic characters array
const arabicNumerals = ['١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩', '١٠', '١١', '١٢', '١٣', '١٤', '١٥', '١٦', '١٧', '١٨', '١٩', '٢٠', '٢١', '٢٢', '٢٣', '٢٤', '٢٥'];

for (let i = 0; i < arabicNumerals.length; i++) {
    const square = document.createElement('div');
    square.className = 'square';
    square.innerText = arabicNumerals[i];
    square.addEventListener('click', () => {
        console.log(overlayImage)
        overlayImage.src = `../../images/numbers/ƒΘ⌐τΩ1.mp4`;
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
