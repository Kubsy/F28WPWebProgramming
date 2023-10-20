var square = document.getElementById('square')
var Clicked = 0;

function addTotal()
{
    Clicked++ 
    document.getElementById("score").innerHTML = Clicked;
    return true 
}

window.onload = function()
{
    prepareGame()
}

function prepareGame()
{
    square.style.top = 600 + 'px'
    square.style.bottom = 234 + 'px'
}