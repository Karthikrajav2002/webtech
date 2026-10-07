let but = document.querySelector('button');
const img = document.querySelector('img'); // Moved outside the listener for better performance
const main= document.querySelector('main')


but.addEventListener('click', () => {
    // Use .includes() to safely check the file name regardless of the full URL path
    if (img.src.includes('bulb2.png')) {
        img.src = './asset/bulb.png';
        but.innerText = 'OFF';
        main.style.backgroundColor='white'
    } else {
        img.src = './asset/bulb2.png';
        but.innerText = 'ON';
        main.style.backgroundColor='black'
        
    }
});