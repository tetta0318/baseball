const game_start = document.querySelector('.game_start');
const play_screen = document.querySelector('#play_screen');

game_start.addEventListener("click", game_start1);

function game_start1(){
  game_start.style.display = 'none';
  play_screen.style.display = 'flex';
}