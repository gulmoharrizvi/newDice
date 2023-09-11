
var images = ["images/dice1.png" , "images/dice2.png" , "images/dice3.png" , "images/dice4.png" , "images/dice5.png" , "images/dice6.png"];

function dice()
{
    var n1 = Math.floor(Math.random()*6) + 1;
    var n2 = Math.floor(Math.random()*6) + 1;

    document.querySelector(".img1").setAttribute("src" ,images[n1 - 1]);
    document.querySelector(".img2").setAttribute("src" , images[n2 -1]);


    console.log(n1);
    console.log(n2);
    if(n2>n1)
    {
        document.querySelector("h1").innerHTML = "player 2 wins";
        console.log("player 2 wins");
    }
    else if(n1>n2)
    {
        document.querySelector("h1").innerHTML = "player 1 wins";
        console.log("player 1 wins");
    }
    else
    {
        document.querySelector("h1").innerHTML = "both players win";   
        console.log("both players win");
    }
}

dice();