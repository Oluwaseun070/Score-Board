let homeTimer = document.getElementById("home_display")
let guestTimer = document.getElementById("guest_display")

let counter = 0
let guestCounter = 0

// Home Scores counter
function home_increment_1(){
    counter +=1
    homeTimer.textContent= counter
}

function home_increment_2(){
    counter +=2
    homeTimer.textContent= counter
}

function home_increment_3(){
    counter +=3
    homeTimer.textContent= counter
}

// Guest scores counter 

function guest_increment_1(){
    guestCounter +=1
    guestTimer.textContent= guestCounter
}

function guest_increment_2(){
    guestCounter +=2
    guestTimer.textContent= guestCounter
}

function guest_increment_3(){
    guestCounter +=3
    guestTimer.textContent= guestCounter
}

// Reset Function to Zero

function reset (){
    homeTimer.textContent = 0
    counter = 0
    guestTimer.textContent= 0
    guestCounter = 0
    
}


// update scores

function updateScores(){
    
    let leaderBoard = "";
    
    if( homeTimer.textContent > guestTimer.textContent  ){
      leaderBoard = "HOME team is leading by " + homeTimer.textContent + " goals🏆";
    }
    
    else if (guestTimer.textContent> homeTimer.textContent){
       leaderBoard = "GUEST team is leading by " + guestTimer.textContent + " goals🏆"
    }
    
    else { leaderBoard = "It is a tie ⚖️"  
    }
    
    document.getElementById("leaderBoard").textContent ="Leader Board: " + leaderBoard;
}

setInterval(updateScores,2000)