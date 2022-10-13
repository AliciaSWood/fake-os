setInterval(clock, 1000);
// Create function
function clock() {
    // Create time variables.
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "PM";
 
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
 
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    // Display the time, but don't include seconds on display
    let currentTime = hour + ":"
            + min + " " + am_pm;
 
    document.getElementById("footer__clock")
            .innerHTML = currentTime;
}
clock();


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

// When the user clicks anywhere outside of the start modal or start button, close it

document.addEventListener("click", (event) => {
    if (event.target != startButton, startModal) {
        console.log("closing")
        startModal.style.display = "none";
      }
}, true)


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
