
function Time() {
    // Creating object of the Date class
    var date = new Date();
    // Get current hour
    var hour = date.getHours();
    // Get current minute
    var minute = date.getMinutes();
 
    // Variable to store AM / PM
    var period = "";
    // Assigning AM / PM according to the current hour
    if (hour >= 12) {
    period = "PM";
    } else {
    period = "AM";
    }
    // Converting the hour in 12-hour format
    if (hour == 0) {
    hour = 12;
    } else {
    if (hour > 12) {
    hour = hour - 12;
    }
    }
    // Updating hour and minute if they are less than 10
    hour = update(hour);
    minute = update(minute);

    // Adding time elements to the div
    document.getElementById("footer__clock").innerText = hour + " : " + minute + "  "  + period;
    // Set Timer to 1 sec (1000 ms)
    // setTimeout(Time, 1000);
   }
    // Function to update time elements if they are less than 10
    // Append 0 before time elements if they are less than 10
   function update(t) {
    if (t < 10) {
    return "0" + t;
    }
    else {
    return t;
    }
   }
   Time();

   












   const counter = document.getElementById("numberCounter");
   const upButton = document.getElementById("upButton");
   const downButton = document.getElementById("downButton");

   // Add a listener that will listen to the click event on the button
   // Write a function that will happen when the click event occurs

//    const increaseCounter = () => {
//         const number = +counter.innerText;
//         counter.innerText = number + 1;
//    }

//    const decreaseCounter = () => {
//     const number = +counter.innerText;
//     counter.innerText = number - 1;
// }

//    upButton.addEventListener("click", increaseCounter);
//    downButton.addEventListener("click", decreaseCounter);



    // const icon = document.getElementById("icon");
    
    // const changeLargebox = () => {
    //     const box = document.getElementsByClassName("largebox");
    //     if(box.classList.contains("__hidden")) {
    //         box.classList.remove("__hidden") 
    //     } else {
    //         box.classList.add("__hidden")
    //     }
    // }

    // const toggleLargebox = () => {
    //    const box = document.getElementsById("largebox")[0];
    //    box.classList.toggle("largebox")
    // }

    // icon.addEventListener("click", changeLargebox);

// let largeBox = document.querySelector(".largebox");
// let isShow =true;
// function showHide () {
//     if(isShow) {
//         largeBox.style.display = "none"
//         isShow = false;
//     } else {
//         largeBox.style.display = "block"
//         isShow = true;
//     }

// }

const modal1 = document.querySelector(".largebox");

const icon1 = document.querySelector(".icons__icon1");

// When the user clicks on the button, open the modal
icon1.onclick = function() {
    modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
let closeButton = document.getElementsByClassName("close")[0];
closeButton.onclick = function() {
    modal1.style.display = "none";
}



const startModal = document.querySelector(".start-menu")

const startButton = document.querySelector(".footer__startButton");

// When the user clicks on start, open the start menu modal

let isClosed = true;

// startButton.onclick = function () {
//     isClosed = !isClosed;
//     console.log(isClosed)
//     }

    if(isClosed) {
        startModal.style.display = "none"
    }
    else  {
        startModal.style.display = "block";}

        function clicking() {
            isClosed = !isClosed
            
            }
                      
           
startButton.addEventListener("click", clicking())