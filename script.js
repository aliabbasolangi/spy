let players = [];
let currentPlayerIndex = 0;
let spyIndex = -1;
let location = '';
const locations = ['Beach', 'Casino', 'Hospital', 'School', 'Theater'];

function addPlayer() {
  const nameInput = document.getElementById('playerName');
  const name = nameInput.value.trim();
  if (name) {
    players.push(name);
    const listItem = document.createElement('li');
    listItem.textContent = name;
    document.getElementById('playerList').appendChild(listItem);
    nameInput.value = '';
  }
}

function startGame() {
  if (players.length < 3) {
    alert('Need at least 3 players!');
    return;
  }
  spyIndex = Math.floor(Math.random() * players.length);
  location = locations[Math.floor(Math.random() * locations.length)];
  document.getElementById('setup').style.display = 'none';
  document.getElementById('game').style.display = 'block';
  showNextPlayer();
}

function showNextPlayer() {
  if (currentPlayerIndex >= players.length) {
    document.getElementById('game').innerHTML = '<h2>Let the Game Begin!</h2>';
    return;
  }
  document.getElementById('currentPlayer').textContent = `Player: ${players[currentPlayerIndex]}`;
  document.getElementById('role').style.display = 'none';
}

function revealRole() {
  const roleText = currentPlayerIndex === spyIndex ? 'You are the Spy!' : `Location: ${location}`;
  document.getElementById('role').textContent = roleText;
  document.getElementById('role').style.display = 'block';
  currentPlayerIndex++;
  setTimeout(showNextPlayer, 2000);
}
