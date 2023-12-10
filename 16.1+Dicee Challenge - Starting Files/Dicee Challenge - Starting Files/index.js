
    var d1 = Math.ceil(Math.random()*6);
    var d2 = Math.ceil(Math.random()*6);
    var msg = "Player ";
    var imgPath = "images/dice";
    var ext = ".png";
    if(d1 > d2)
    {
        msg+="1 ";
    }
    else
    {
        msg+="2 ";
    }
    msg += " wins!";
    if(d1 == d2)
    {
        msg = "It's a draw!";
    }
    document.querySelector(".img1").setAttribute("src", imgPath+d1+ext);
    document.querySelector(".img2").setAttribute("src", imgPath+d2+ext);
    document.querySelector("h1").textContent = msg;

