const gmailInpiut = document.querySelector('#gmail_input')
const gmailBtn = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[a-z0-9._%+-]+@gmail\.com$/

gmailBtn.onclick = () => {
    if (regExp.test(gmailInpiut.value)) {
        gmailResult.innerHTML = 'ok'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'Error'
        gmailResult.style.color = 'red'
    }
}

const childBlock = document.querySelector('.child_block')

let positionX = 0
let positionY = 0
const maxWidthParentBlock = 449

const moveChildBlock = () => {
    if (positionX <= maxWidthParentBlock && positionY === 0) {
        positionX++
        childBlock.style.left = `${positionX}px`
        setTimeout(moveChildBlock, 0)

    } else if (positionX >= maxWidthParentBlock && positionY <= maxWidthParentBlock) {
        positionY++
        childBlock.style.top = `${positionY}px`
        setTimeout(moveChildBlock, 0)
    } else if (positionY >= maxWidthParentBlock && positionX > 0) {
        positionX--;
        childBlock.style.left = `${positionX}px`
        setTimeout(moveChildBlock, 0);
    } else if (positionX < maxWidthParentBlock && positionY >= 0) {
        positionY--;
        childBlock.style.top = `${positionY}px`
        setTimeout(moveChildBlock, 0);
    }
}
moveChildBlock()




const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
const reset = document.querySelector("#reset")
const seconds = document.querySelector('#seconds')

let counter = 0;
let intervalId;

function render() {
    start.addEventListener("click", startCounter)
    stop.addEventListener("click", stopCounter);
    reset.addEventListener("click", resetCounter);
}
render()

function startCounter() {
    if (!intervalId) {
        intervalId = setInterval(function () {
            counter++;
            seconds.innerHTML = counter;
        }, 500);
    }
}

function stopCounter() {
    clearInterval(intervalId);
    intervalId = 0;
}

function resetCounter() {
    counter = 0;
    seconds.innerHTML = counter;
    stopCounter();
}





