var scores:any, roundScore:number, activePlayer:any ,gamePlaying:boolean,numbere:string,lastThrow:number,lastThrowe:number,proof:number, sameSix:boolean,sameSixone:boolean;
init();
//document.querySelector("#current-"+activePlayer).textContent=dice;
//document.querySelector("#current-"+activePlayer).innerHTML="<em>"+dice+"</em>"
//var x= document.querySelector("#score-0").textContent;

 

document.querySelector(".btn-roll").addEventListener("click", function() {
  if (gamePlaying){//1.Random number
    var dice1:number = Math.floor(Math.random() * 6) + 1;
    

    console.log (lastThrow," ", dice1);
    
    var dice2:number = Math.floor(Math.random() * 6) + 1;
    
    //2.Display
    var diceDom:any = document.querySelector(".dice");
    diceDom.style.display = "block";
    diceDom.src = "dice-" + dice1 + ".png";
    
    var diceDom:any = document.querySelector(".dice2");
    diceDom.style.display = "block";
    diceDom.src = "dice-" + dice2 + ".png";
  
    //3.Update round score if number not 1
    
    if (dice1 !== 1 && dice2 !==1 && sameSix !==true && sameSixone!==true) {
      //add score
      roundScore += dice1;
      roundScore += dice2;
      document.querySelector("#current-" +activePlayer).textContent= roundScore.toString();
    } 
    else {
      //nextPlayer();
      hey();
    }

    var hello= function(stati:number,useddice:number,vari:boolean){
      if (stati ==6 && useddice==6){ vari=true} else{vari=false}};
    
      console.log(activePlayer);
     
    lastThrow=dice1;
    lastThrowe=dice2
    hello(lastThrow,dice1,sameSix);
    hello(lastThrowe,dice2,sameSixone);
    
}
    
});



document.querySelector('.btn-hold').addEventListener('click',function(){
if(gamePlaying){
        //add current score to global score
scores[activePlayer]+= roundScore;
//scores[activePlayer]= scores[activePlayer]+roundScore
//update UI
document.querySelector("#score-"+activePlayer).textContent =scores[activePlayer];
//Check if player won the Game
if(scores[activePlayer]>= numbere ){
    document.querySelector("#name-"+activePlayer).textContent="Winner!";
    document.querySelector('.dice').style.display='none';
    document.querySelector('.player-'+activePlayer+'-panel').classList.add("winner");
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove("active");
    gamePlaying=false;
}
else {
  nextPlayer();
}

//next Player


}


});
function nextPlayer(){
    
        //activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
        /*same as*/ if (activePlayer===0) {activePlayer =1;} else {activePlayer=0;}
        roundScore = 0;
        document.getElementById("current-0").textContent = "0";
        document.getElementById("current-1").textContent = "0";
    
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
    
        document.querySelector(".dice").style.display = "none";
        document.querySelector(".dice2").style.display = "none";
    
        //document.querySelector(".player-0-panel").classList.remove("active");
        //document.querySelector(".player-1-panel").classList.add("active");
 
}
document.querySelector(".btn-new").addEventListener("click",init);

function init(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying=true;
    document.querySelector(".dice").style.display = "none";
    document.querySelector(".dice2").style.display = "none";

    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.getElementById('name-0').textContent="Player 1";
    document.getElementById('name-1').textContent="Player 2";
    document.querySelector('.player-1-panel').classList.remove("winner");
    document.querySelector('.player-0-panel').classList.remove("winner");
    document.querySelector('.player-1-panel').classList.remove("active");
    document.querySelector('.player-0-panel').classList.remove("active");
    document.querySelector('.player-0-panel').classList.add("active");
    numbere= prompt("Please enter the Point Goal");
    
    
}