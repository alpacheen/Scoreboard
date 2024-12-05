let homeScore = document.getElementById("home-score");
let awayScore  = document.getElementById("away-score")

let homeCount = 0;
let awayCount = 0;


function updateScore(team, points) {
    
    if (team === "home") {
        homeCount += points; 
        homeScore.innerText = homeCount; 
    }  else if (team === "away") {
        awayCount += points;
        awayScore.innerText = awayCount;
    }
}

function reset(){
    homeCount = 0;
    awayCount = 0;
    homeScore.innerText = homeCount;
    awayScore.innerText = awayCount;
}