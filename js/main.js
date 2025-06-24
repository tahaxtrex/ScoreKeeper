const button1 = document.querySelector('#playera');
const button2 = document.querySelector('#playerb');
const resetbutton = document.querySelector("#reset")
let scoreboard = document.querySelector("h2")

let p1 = 0;
let p2 = 0;
let winningscore = 7
let gameover = false


button1.addEventListener('click', function(){
  if(!gameover){
    p1 += 1;
    scoreboard.textContent = `${p1} to ${p2}`;
    if(p1 === winningscore){
       alert('player 1 won!! ')
       gameover = true
      }
  
  }
  

})
button2.addEventListener('click', function(){
  if(!gameover){
    p2 += 1;
    scoreboard.textContent = `${p1} to ${p2}`;
    if(p2 === winningscore){ 
      alert('player 1 won!! ')
      gameover = true
    }
  }
})

resetbutton.addEventListener('click', function(){
  p1 = 0;
  p2 = 0;
  gameover = false;
  scoreboard.textContent = `${p1} to ${p2}`;

})






