const value = document.getElementById("value");
const decr = document.querySelector("button[data-action='decrement']")
const incr = document.querySelector("button[data-action='increment']")

let counterValue = 0;

decr.addEventListener('click', decrement);
incr.addEventListener('click', increment);

function decrement(e) {
    counterValue -= 1;
    value.textContent = counterValue;
};

function increment(e) { 
    counterValue += 1;
     value.textContent = counterValue;
}