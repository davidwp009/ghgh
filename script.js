// 1
let count = 0;
const interval = setInterval(() => {
    console.log(`Повідомлення ${count + 1}`);
    count++;
    if (count === 5) clearInterval(interval);
}, 1000);

// 2
let position = 50;
const moveBox = setInterval(() => {
    position += 10;
    document.getElementById('box').style.left = position + 'px';
    if (position > 300) clearInterval(moveBox);
}, 100);

// 4
document.getElementById('startTimer').addEventListener('click', () => {
    let time = document.getElementById('timeInput').value;
    setTimeout(() => {
        alert('Час вийшов!');
    }, time * 1000);
});
