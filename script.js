const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['blue', 'green', 'red', 'grey', 'black', 'pink', 'purple'];

body.style.background = 'green'
button.addEventListener('click', mudarPlano)

function mudarPlano() {
    const colorIndex = parseInt(Math.random()*colors.length)
    body.style.background = colors[colorIndex]
}