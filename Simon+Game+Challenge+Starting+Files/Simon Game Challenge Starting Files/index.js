
var userPresses = [];
var buttonOrder = [];
var buttonColours = ["green", "red","yellow","blue"];
var pressedWrong = false;
var gameStarted = false;

$(document).on("keypress", function(event)
{
    console.log(event.key);
    
    if(event.key == 'a' || event.key == 'A')
    {
        $("#level-title").removeClass("game-over");
        $("h1").html("Level <div id='lvl'>1</div>");
        gameStarted = true;
        nextSequence();
    }
});

$(".btn").click(function(event) {
    var button = this; 
    buttonAnimation(this.id);
    userPresses.push(this.id);
    // console.log(userPresses);
    if(gameStarted)
    {
        if(buttonOrder[userPresses.length-1] != userPresses[userPresses.length-1])
        {
            pressedWrong = true;
            console.log("Game over!");
            $("#level-title").text("Game over!");
            $("#level-title").addClass("game-over");
            gameStarted = false;
            buttonOrder = [];
        }
        if(!pressedWrong && userPresses.length == buttonOrder.length)
        {
            setTimeout(function() {nextSequence(); }, 1500);
            userPresses = [];
        }
    }
});

function buttonAnimation(buttonid)
{
    var audioElement = new Audio("sounds/"+buttonid+".mp3");
    audioElement.play();
    var button = document.querySelector("#"+buttonid);
    console.log(button);
    button.classList.toggle("pressed");
    setTimeout(function() 
    {
        button.classList.toggle("pressed");
    }, 100);
}

function nextSequence()
{
    addButton();
    console.log("buttonOrder: "+buttonOrder);
    $("#level-title").text("Level "+buttonOrder.length);
    var lastButton = buttonOrder[buttonOrder.length-1];
    buttonAnimation(lastButton);
}

function addButton()
{
    var num = Math.floor(Math.random()*4);
    buttonOrder.push(buttonColours[num]);
}