$(document).ready(function() {
    $("h1").css("color", "red");
});

$("h1").click(function() {
    $("h1").css("color","purple");
});

$("button").click(function() {
    $("h1").css("color", "purple");
    // $("h1").toggle();
    // $("h1").fadeToggle();
    // $("h1").fadeOut();
    // $("h1").fadeIn();
    // $("h1").slideToggle();
    $("h1").animate({opacity: 0.5});
    $("h1").animate({margin: "20%"});
});

$("input").keypress(function(event)
{
    console.log(event);
});

// $(document).keypress(function(event)
// {
//     console.log(event.key);
//     $("h1").text(event.key);
// });

$(document).on("keypress", function(event)
{
    console.log(event.key);
    $("h1").text(event.key);
});