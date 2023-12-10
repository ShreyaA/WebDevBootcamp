  document.querySelectorAll('.drum').forEach(item => {
    item.addEventListener('click', function()
    {
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
  })

  function buttonAnimation(key)
  {
    var activeButton = document.querySelector("."+key);
    activeButton.classList.toggle("pressed");
    setTimeout(function() 
    {
        activeButton.classList.toggle("pressed");
    }, 100);
  }

  function makeSound(key)
  {
    switch(key)
    {
        case "w":
            var audioElement = new Audio("sounds/tom-1.mp3");
            audioElement.play();
        break;
        case "a":
            var audioElement = new Audio("sounds/tom-2.mp3");
            audioElement.play();
        break;
        case "s":
            var audioElement = new Audio("sounds/tom-3.mp3");
            audioElement.play();
        break;
        case "d":
            var audioElement = new Audio("sounds/tom-4.mp3");
            audioElement.play();
        break;
        case "j":
            var audioElement = new Audio("sounds/snare.mp3");
            audioElement.play();
        break;
        case "k":
            var audioElement = new Audio("sounds/crash.mp3");
            audioElement.play();
        break;
        case "l":
            var audioElement = new Audio("sounds/kick-bass.mp3");
            audioElement.play();
        break;
    }
    
  }

  document.addEventListener("keydown", (event) => {
    // var name = event.key;
    // var code = event.code;
  // Alert the key name and key code on keydown
    // alert(`Key pressed ${name} \r\n Key code value: ${code}`);
    //console.log(event);
    var eventkey = event.key;
    makeSound(eventkey);
    buttonAnimation(eventkey);

    // if (eventkey == 'w') { // if a letter pressed
    //     // play that funky music.  
    //     const audioElement = new Audio("sounds/tom-1.mp3");
    //      audioElement.play();
    //  }
    // if (eventkey == 'a') { // if a letter pressed
    //    // play that funky music.  
    //    const audioElement = new Audio("sounds/tom-2.mp3");
    //     audioElement.play();
    // }
    // if (eventkey == 's') { // if a letter pressed
    //     // play that funky music.  
    //     const audioElement = new Audio("sounds/tom-3.mp3");
    //      audioElement.play();
    //  }
    //  if (eventkey == 'd') { // if a letter pressed
    //     // play that funky music.  
    //     const audioElement = new Audio("sounds/tom-4.mp3");
    //      audioElement.play();
    //  }
    //  if (eventkey == 'j') { // if a letter pressed
    //     // play that funky music.  
    //     const audioElement = new Audio("sounds/snare.mp3");
    //      audioElement.play();
    //  }
    //  if (eventkey == 'k') { // if a letter pressed
    //     // play that funky music.  
    //     const audioElement = new Audio("sounds/crash.mp3");
    //      audioElement.play();
    //  }
    //  if (eventkey == 'l') { // if a letter pressed
    //     // play that funky music.  
    //     const audioElement = new Audio("sounds/kick-bass.mp3");
    //      audioElement.play();
    //  }
  });

  // document.querySelectorAll('.drum').forEach(item => {
//     item.addEventListener('click', keyClicked)
//   })

//   function keyClicked(event, key)
//   {
//     console.log(this);
//     this.style.color = "white";
//     console.log(event);
//     cl = event.srcElement.classList;
//     var audioElement;

//     var buttonInnerHTML = this.innerHTML;

//     switch(buttonInnerHTML)
//     {
//         case "w":
//             audioElement = new Audio("sounds/tom-1.mp3");
//         break;
//         case "a":
//             audioElement = new Audio("sounds/tom-2.mp3");
//         break;
//         case "s":
//             audioElement = new Audio("sounds/tom-3.mp3");
//         break;
//         case "d":
//             audioElement = new Audio("sounds/tom-4.mp3");
//         break;
//         case "j":
//             audioElement = new Audio("sounds/snare.mp3");
//         break;
//         case "k":
//             audioElement = new Audio("sounds/crash.mp3");
//         break;
//         case "l":
//             audioElement = new Audio("sounds/kick-bass.mp3");
//         break;
//     }
//     audioElement.play();
//     this.style.color = "#DA0463";
//   }
