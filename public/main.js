var balls = 0;

function ballJuggle(number){
    balls = balls + number;
    document.getElementById("balls").innerHTML = balls;
};

var clowns = 0;

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,clowns));     //works out the cost of this cursor
    if(balls >= cursorCost){                                   //checks that the player can afford the cursor
        clowns = clowns + 1;                                   //increases number of clowns
    	balls = balls - cursorCost;                          //removes the balls spent
        document.getElementById('clowns').innerHTML = clowns;  //updates the number of clowns for the user
        document.getElementById('balls').innerHTML = balls;  //updates the number of balls for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,clowns));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
};



window.setInterval(function(){

	ballJuggle(clowns);

}, 1000);
