let team1Score = 0

const addPoint = () => {
  team1Score += 1
  // update the score in HTML
  document.querySelector('.team1Score').textContent = team1Score
}

const subtractPoint = () => {
  team1Score -= 1
  // update the score in HTML
  document.querySelector('.team1Score').textContent = team1Score
}

const main = () => {
  console.log('hello there!')
}

let team2Score = 0

const add2Point = () => {
  team2Score += 1
  document.querySelector('.team2Score').textContent = team2Score
}

const subtract2Point = () => {
  team2Score -= 1
  document.querySelector('.team2Score').textContent = team2Score
}

document.querySelector('.team-1-add-1-button').addEventListener('click', addPoint)
document.querySelector('.team-1-subtract-1-button').addEventListener('click', subtractPoint)

// document.querySelector('.add-1').addEventListener('click', addPoint)
// document.querySelector('subtract-1').addEventListener('click', subtractPoint)

document.querySelector('.add-button').addEventListener('click', add2Point)
document.querySelector('.subtract-button').addEventListener('click', subtract2Point)

document.addEventListener('DOMContentLoaded', main)
