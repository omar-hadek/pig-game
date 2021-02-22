
//game 
var scores,RoundScoure,activePlayer,gameplaying;
init();

//dice rolling function
document.querySelector('.btn--roll').addEventListener('click',function(){

    if(gameplaying){
        var dice = Math.floor( Math.random()*6) +1;
    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice').src = 'images/dice-'+dice+'.png' ;

    if(dice !== 1){
        RoundScoure += dice;
        document.querySelector('#current--'+activePlayer).textContent = RoundScoure;
    }else{
        NextPlayer();
    }
    }
})

//holding the score 
document.querySelector('.btn--hold').addEventListener('click',function(){
if(gameplaying){
    scores[activePlayer] += RoundScoure;
    document.getElementById('score--'+activePlayer).textContent = scores[activePlayer];


    if(scores[activePlayer] >= 20 ){
        document.getElementById('name--'+activePlayer).textContent = 'winner' ;
        document.querySelector('.player--'+activePlayer).classList.remove('player--active');
        document.querySelector('.player--'+activePlayer).classList.add('player--winner');
        document.querySelector('.dice').style.display = 'none';  
        gameplaying = false;    
    }else{
        NextPlayer();
    }
}
})
// new player
document.querySelector('.btn--new').addEventListener('click',init);
    
function NextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    RoundScoure = 0 ;   
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
    document.querySelector('.dice').style.display = 'none';
}


//game initialation
function init(){
    scores = [0,0];
    RoundScoure = 0;
    activePlayer = 0;
    gameplaying = true;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score--0').textContent = '0';
    document.getElementById('current--0').textContent ='0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--1').textContent = '0';
    document.getElementById('name--0').textContent = 'Player 1';
    document.getElementById('name--1').textContent = 'Player 2';
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
}
