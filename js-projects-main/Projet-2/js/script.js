const colors = ['black', 'white', 'blue', 'yellow', 'pink', 'green'];

let button = document.getElementById('button');

button.addEventListener('click',function(){
    var randomcolor = colors[Math.floor(Math.random()* colors.length)]

    let background = document.getElementById('body');

    body.style.background= randomcolor;
});