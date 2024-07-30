const generateRGBColor = () => {
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);

    return `rgb(${r},${g},${b})`;
};

// console.log(generateRGBColor());

const updateColor = () => {
    const color = generateRGBColor();
    const colorBox = document.getElementById('colorBox');
    const colorCode = document.getElementById('colorCode');

    colorBox.style.backgroundColor = color;
    colorCode.textContent = color;
};

const copyColorCode = () => {
    const colorCode = document.getElementById('colorCode');
    const inputTag = document.createElement('input');
    document.body.appendChild(inputTag);
    inputTag.value = colorCode.textContent;

    inputTag.select();
    document.execCommand('copy');
    document.body.removeChild(inputTag);
    alert(`Color code: ${generateRGBColor()} copied to clipboard!`);
};

document.getElementById('copyBtn').addEventListener('click', () => {
    copyColorCode();
});

const generateNewColorBtn = () => {
    updateColor();  
};