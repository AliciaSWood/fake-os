
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


// Modal 1
const modal1 = document.querySelector(".largebox");

const icon1 = document.querySelector(".icons__icon1");

// When the user clicks on the button, open the modal

icon1.addEventListener("click", () => {
    modal1.style.display = "block";
})

// When the user clicks on <span> (x), close the modal
let closeButton = document.getElementsByClassName("close")[0];

closeButton.addEventListener("click", () => {
    modal1.style.display = "none";
})

// Modal 2

let modal2 = document.querySelector(".screen-image");
let icon2 = document.querySelector(".icons__icon2")

// When the user clicks on the button, open the modal
icon2.addEventListener("click", () => {
    modal2.style.visibility = "visible"
}) 

// When the user clicks on <span> (x), close the modal
let closeButton2 = document.getElementsByClassName("close2")[0];

closeButton2.addEventListener("click", () => {
    modal2.style.visibility = "hidden";
})


// Modal 3
let modal3 = document.getElementById("calcContainer");
let icon3 = document.querySelector(".icons__icon3")

// When the user clicks on the button, open the modal
icon3.addEventListener("click", () => {
    modal3.style.display = "block";
})

// When the user clicks on <span> (x), close the modal
let closeButton3 = document.getElementById("close3")
closeButton3.addEventListener("click", () => {
    modal3.style.display = "none";
})


// Start Menu
const startModal = document.querySelector(".start-menu")

const startButton = document.querySelector(".footer__startButton");

// When the user clicks on start, open/close the start menu modal

let isClosed = true;

startButton.addEventListener("click", () => {
    isClosed = !isClosed;

    if (isClosed) {
        startModal.style.display = "none" 
    } else {
        startModal.style.display = "block"
    }

});

// Calculator

let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName('button'))

buttons.map(button => {
    button.addEventListener("click", (e) => {
        switch(e.target.innerText) {
            case 'AC':
                display.innerText = "";
                break;
            case '←':
                    display.innerText = display.innerText.slice(0, -1)
                    break;

            case '=':
                try{
                    display.innerText = eval(display.innerText)
                } catch {
                    display.innerText = "Whoops!";
                }
                    break;
            default:
                display.innerText += e.target.innerText;
        }
    })
})
