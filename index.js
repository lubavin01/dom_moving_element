import './css/style.css';

setInterval(drawGoblin, 1000);

function drawGoblin() {
  const img = document.getElementById('goblin');
  const idx = random(1, 16);
  document.getElementById(`cell${idx}`).append(img);
}

function random(min, max) {
  return Math.floor( min + Math.random() * (max + 1 - min) );
}
