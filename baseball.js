const game_start = document.querySelector('.game_start');
const play_screen = document.querySelector('#play_screen');

/*2次元配列に選手能力を格納
  batter_ability = [弾道,ミート,パワー,走力,肩力,捕球,守備力]
  pitcher_ability = [球速,コントロール,スタミナ,変化球]
*/
const A_ability = [ [2,48,50,96,63,61,41],
                    [3,67,74,64,74,67,62],
                    [4,74,95,78,85,42,52],
                    [4,60,92,64,61,59,55],
                    [4,74,73,57,39,47,54],
                    [4,44,76,47,60,59,71],
                    [3,44,72,81,65,76,78],
                    [2,57,57,56,82,66,74],
                    [2,43,42,86,67,89,77]];

const A_pitcher=[[152,71,68,72],[152,59,74,80],[159,54,51,80],[163,44,80,80]];

const B_ability = [ [2,88,68,91,85,88,69],
                    [3,73,72,71,68,50,65],
                    [3,85,68,78,64,75,69],
                    [3,50,72,54,88,75,38],
                    [3,79,85,51,55,55,52],
                    [3,87,61,59,60,55,62],
                    [4,75,75,52,58,49,60],
                    [3,71,60,70,73,70,77],
                    [3,55,49,84,53,75,67]];

const B_pitcher = [157,80,84,90];

game_start.addEventListener("click", game_start1);

function game_start1(){
  game_start.style.display = 'none';
  play_screen.style.display = 'flex';

    console.log(batting(A_ability[0][0], A_ability[0][1], A_ability[0][2], B_pitcher[0], B_pitcher[1], B_pitcher[2], B_pitcher[3]))
  
}

function getRandom (min, max){
  return Math.floor(Math.random() * (max - min) + min);
}

function batting(tranjectory, meet, running_ability, ball_speed, control, breaking_ball){
  let A = 0;
  const ba = meet * 1150 / (ball_speed + control + breaking_ball);
  const P1 = getRandom(1,1000);
  const P2 = getRandom(1,120);

  if(ba > P1){
    if(P2 < 30 - running_ability / 9) A = 1;
    else if(P2 < 90) A = 2;
    else if(P2 < 98 + running_ability / 9) A = 4;
    else A = 3;
  }
  return A;
}
