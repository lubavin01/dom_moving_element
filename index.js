import './css/style.css';

function random(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function drawGoblin() {
  const img = document.getElementById('goblin');
  const idx = random(1, 16);
  document.getElementById(`cell${idx}`).append(img);
}

setInterval(drawGoblin, 1000);
