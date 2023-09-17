const displayEl = document.querySelector(".display")
const buttons = Array.from(document.querySelectorAll("button"))

buttons.map (button => {
    button.addEventListener('click', function(e) {
        if (e.target.dataset.value === 'C') {
            displayEl.value = ""
        } else if (e.target.dataset.value === "DEL") {
            displayEl.value = displayEl.value.slice(0, -1)
        } else if (e.target.dataset.value === "=") {
            displayEl.value = eval(displayEl.value)
        } else {
            displayEl.value += e.target.dataset.value
        }  
    })
    
})


