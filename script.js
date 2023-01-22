let homeScore = document.getElementById("homeScore")
let homeScoreIncrease = 0
let matchTime = document.getElementById("timer")
let timer = 300

function addPointsHome() {
    homeScoreIncrease += 1
    homeScore.textContent = homeScoreIncrease
    timer -= 1
    matchTime.textContent = timer 
}

function addPointsHome2() {
    homeScoreIncrease += 2
    homeScore.textContent = homeScoreIncrease
    timer -= 2
    matchTime.textContent = timer
}

function addPointsHome3() {
    homeScoreIncrease += 3
    homeScore.textContent = homeScoreIncrease
    timer -= 3
    matchTime.textContent = timer
}

let guestScore = document.getElementById("guestScore")
let guestScoreIncrease = 0

function addPointsGuest() {
    guestScoreIncrease += 1
    guestScore.textContent = guestScoreIncrease
    timer -= 1
    matchTime.textContent = timer
}
function addPointsGuest2() {
    guestScoreIncrease += 2
    guestScore.textContent = guestScoreIncrease
    timer -= 2
    matchTime.textContent = timer
}
function addPointsGuest3() {
    guestScoreIncrease += 3
    guestScore.textContent = guestScoreIncrease
    timer -= 3
    matchTime.textContent = timer
}

function newGame() {
    guestScoreIncrease = 0
    homeScoreIncrease = 0
    timer = 300
    guestScore.textContent = guestScoreIncrease
    homeScore.textContent = homeScoreIncrease
    matchTime.textContent = timer
}