const slider = document.querySelector('.slider')
const screens = document.querySelectorAll('.screen')
const nextButtons = document.querySelectorAll('.next')
const inputs = document.querySelectorAll('.input')
const restartButton = document.querySelector('.restart')
const values = document.querySelectorAll('.value')

let activeScreen = 0

nextButtons.forEach(next => {
    next.addEventListener('click', () => {
        nextScreen()
    })
})
restartButton.addEventListener('click', () => {
    restart()
})

function nextScreen() {
    if (activeScreen >= 0) {
        activeScreen++
    }
    if (activeScreen > screens.length) {
        activeScreen = 0
    }

    const height = slider.clientHeight

    slider.style.transform = `translateY(-${activeScreen * height}px)`

    let value = count()
    values[0].textContent = value + 700
    values[1].textContent = value
    values[2].textContent = value - 300
}

function count() {
    let weight = 0
    let height = 0
    let age = 0

    inputs.forEach(input => {
        
        if (input.id === 'weight') {
            weight = input.value
        } else if (input.id === 'height') {
            height = input.value
        } else if (input.id === 'age') {
            age = input.value
        }
    })

    let calorie = 10 * weight + 6.25 * height - 5 * age + 5
    return Math.floor(calorie)
}

function restart() {
    window.location = 'http://127.0.0.1:5500/index.html'
}