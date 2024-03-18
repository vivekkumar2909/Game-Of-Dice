var randonNumber1 = Math.floor(Math.random() * 6) +1;
var randomimage1 = "images/dice" + randonNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimage1);



var randonNumber2 = Math.floor(Math.random() * 6) +1;
var randomimage2 = "images/dice" + randonNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimage2);

if(randonNumber1>randonNumber1)
{
    document.getElementById("win").innerHTML="Player 1 Win";
}
else if(randonNumber1<randonNumber2)
{
    document.getElementById("win").innerHTML="Player 2 Win";
}
else{
    document.getElementById("win").innerHTML="Draw";
}

