


// document.querySelector(".set").addEventListener("click",function() {alert("I got clicked!")

// });
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click",function() {

       switch (buttonInnerHTML) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        
        case "s":
            var tom3 = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
    

    

            break;
        default
       }

        // alert("I got clicked!");
        // console.log(this.style.color="blue");

    

});

}







// function handleClick() {
//     alert("I got clicked!");
// }


// <h1 id="title">Drum 🥁 Kit</h1>
//   <div class="set">
//     <button class="w drum">w</button>
//     <button class="a drum">a</button>
//     <button class="s drum">s</button>
//     <button class="d drum">d</button>
//     <button class="j drum">j</button>
//     <button class="k drum">k</button>
//     <button class="l drum">l</button>
//   </div>
