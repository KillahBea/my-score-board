let team1Score = 0

const addPoint = () => {
  team1Score += 1
  // update the score in HTML
  document.querySelector('.team1Score').textContent = team1Score
  if (team1Score >= 21) {
    document.querySelector('.team1Score').textContent = 'You Win!!'
  }
}

const subtractPoint = () => {
  if (team1Score > 0) team1Score -= 1
  // update the score in HTML
  document.querySelector('.team1Score').textContent = team1Score
}

const updateTeam1Name = () => {
  let team1Name = document.querySelector('.team-one')
  let updateTeam1Name = document.querySelector('.team-1-update')
  team1Name.textContent = updateTeam1Name.value
}

const main = () => {
  console.log('hello there!')
}

let team2Score = 0

const add2Point = () => {
  team2Score += 1
  document.querySelector('.team2Score').textContent = team2Score
  if (team2Score >= 21) {
    document.querySelector('.team2Score').textContent = 'You Win!!'
  }
}

const subtract2Point = () => {
  if (team2Score > 0) {
    team2Score -= 1
  }
  document.querySelector('.team2Score').textContent = team2Score
}

const updateTeam2Name = () => {
  let team2Name = document.querySelector('.team-two')
  let updateTeam2Name = document.querySelector('.team-2-update')
  team2Name.textContent = updateTeam2Name.value
}

const resetScores = () => {
  team1Score = 0
  document.querySelector('.team1Score').textContent = team1Score
  team2Score = 0
  document.querySelector('.team2Score').textContent = team2Score
}

document.querySelector('.team-1-add-1-button').addEventListener('click', addPoint)
document.querySelector('.team-1-subtract-1-button').addEventListener('click', subtractPoint)
document.querySelector('.update-team-1-name').addEventListener('click', updateTeam1Name)

document.querySelector('.add-button').addEventListener('click', add2Point)
document.querySelector('.subtract-button').addEventListener('click', subtract2Point)
document.querySelector('.update-team-2-name').addEventListener('click', updateTeam2Name)
document.querySelector('.reset-button').addEventListener('click', resetScores)
document.addEventListener('DOMContentLoaded', main)
