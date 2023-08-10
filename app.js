const incrementP1=document.querySelector('#incrementP1');
const incrementP2=document.querySelector('#incrementP2');
const resetButton=document.querySelector('#reset');
const winningScoreSelect=document.querySelector('#playTo');

const p1Display=document.querySelector('#p1Display');
const p2Display=document.querySelector('#p2Display');

let scoreP1=0;
let scoreP2=0;
let winningScore=3;
let isGameOver=false;

winningScoreSelect.addEventListener('change', function(){
    winningScore=parseInt(this.value);
    reset();
})

incrementP1.addEventListener('click', function(){
    if(!isGameOver){
        scoreP1++;
        if(scoreP1===winningScore){
            isGameOver=true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            incrementP1.disabled=true;
            incrementP2.disabled=true;
        }
        p1Display.textContent=scoreP1;
    }
})

incrementP2.addEventListener('click', function(){
    if(!isGameOver){
        scoreP2++;
        if(scoreP2===winningScore){
            isGameOver=true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            incrementP1.disabled=true;
            incrementP2.disabled=true;
        }
        p2Display.textContent=scoreP2;
    }
})

resetButton.addEventListener('click', reset);

function reset(){
    isGameOver=false;
    scoreP1=0;
    scoreP2=0;
    p1Display.textContent=scoreP1;
    p2Display.textContent=scoreP2;
    p1Display.classList.remove('has-text-danger','has-text-success');
    p2Display.classList.remove('has-text-danger','has-text-success');
    incrementP1.disabled=false;
    incrementP2.disabled=false;
}