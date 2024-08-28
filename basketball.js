let programmerDOM = document.querySelector('.programmer');
let codewarsDOM = document.querySelector('.codewars');
const resetDOM = document.querySelector('.reset');


const oneScoreDOMP = document.querySelector('.oneScoreP');
const twoScoreDOMP = document.querySelector('.twoScoreP');
const threeScoreDOMP = document.querySelector('.threeScoreP');
const oneScoreDOMC = document.querySelector('.oneScoreC');
const twoScoreDOMC = document.querySelector('.twoScoreC');
const threeScoreDOMC = document.querySelector('.threeScoreC');

let countP = 0;
function scoreUpOneProgrammer() {
    programmerDOM.innerText =  countP += 1; 
}
function scoreUptwoProgrammer() {
    programmerDOM.innerText = countP += 2;     
}
function scoreUpthreeProgrammer() {
    programmerDOM.innerText = countP += 3; 
}

let countC = 0;
function scoreUpOneCodewars() {
    codewarsDOM.innerText = countC += 1;     
}
function scoreUptwoCodewars() {
    codewarsDOM.innerText = countC += 2;    
}
function scoreUpthreeCodewars() {
    codewarsDOM.innerText = countC += 3;  
}

function resetP(){
    programmerDOM.innerText = countP *= 0;
} 
function resetC(){
    codewarsDOM.innerText = countC *= 0;
} 

oneScoreDOMP.addEventListener('click', scoreUpOneProgrammer);
twoScoreDOMP.addEventListener('click', scoreUptwoProgrammer);
threeScoreDOMP.addEventListener('click', scoreUpthreeProgrammer);
oneScoreDOMC.addEventListener('click', scoreUpOneCodewars);
twoScoreDOMC.addEventListener('click', scoreUptwoCodewars);
threeScoreDOMC.addEventListener('click', scoreUpthreeCodewars);

resetDOM.addEventListener('click', resetP);
resetDOM.addEventListener('click', resetC);


