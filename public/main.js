var balloons = 0;

function buyBalloon(number){
    balloons = balloons + number;
    document.getElementById("balloons").innerHTML = balloons;
};

var clowns = 0;

function buyClown(){
    var clownCost = Math.floor(10 * Math.pow(1.1,clowns));     //works out the cost of this cursor
    if(balloons >= clownCost){                                   //checks that the player can afford the cursor
        clowns = clowns + 1;                                   //increases number of clowns
    	balloons = balloons - clownCost;                          //removes the balloons spent
        document.getElementById('clowns').innerHTML = clowns;  //updates the number of clowns for the user
        document.getElementById('balloons').innerHTML = balloons;  //updates the number of balloons for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,clowns));       //works out the cost of the next cursor
    document.getElementById('clownCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

var streetPerformers = 0;

function buyStreetPerformer(){
    var streetPerformerCost = Math.floor(100 * Math.pow(1.1,streetPerformers));     //works out the cost of this cursor
    if(balloons >= streetPerformerCost){                                   //checks that the player can afford the cursor
        streetPerformers = streetPerformers + 1;                                   //increases number of streetPerformers
    	balloons = balloons - streetPerformerCost;                          //removes the balloons spent
        document.getElementById('streetPerformers').innerHTML = streetPerformers;  //updates the number of streetPerformers for the user
        document.getElementById('balloons').innerHTML = balloons;  //updates the number of balloons for the user
    };
    var nextCost = Math.floor(100 * Math.pow(1.1,streetPerformers));       //works out the cost of the next cursor
    document.getElementById('streetPerformerCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

var carnys = 0;

function buyCarny(){
    var carnyCost = Math.floor(800 * Math.pow(1.12,carnys));     //works out the cost of this cursor
    if(balloons >= carnyCost){                                   //checks that the player can afford the cursor
        carnys = carnys + 1;                                   //increases number of carnys
    	balloons = balloons - carnyCost;                          //removes the balloons spent
        document.getElementById('carnys').innerHTML = carnys;  //updates the number of streetPerformers for the user
        document.getElementById('balloons').innerHTML = balloons;  //updates the number of balloons for the user
    };
    var nextCost = Math.floor(800 * Math.pow(1.12,carnys));       //works out the cost of the next cursor
    document.getElementById('carnyCost').innerHTML = nextCost;  //updates the cursor cost for the user
};


window.setInterval(function(){

	buyBalloon(clowns + (5 * streetPerformers) + (10 * carnys));

}, 1000);

window.setInterval(function() {
  save()
}, 30000)

function save() {
  var save = {
    balloons: balloons,
    clowns: clowns,
    streetPerformers: streetPerformers,
    carnys: carnys,
    // prestige: prestige
  }

  localStorage.setItem("save",JSON.stringify(save));
  console.log("saved game:", localStorage);
}

function load() {
  var savedgame = JSON.parse(localStorage.getItem("save"));
  console.log("loaded game:", savedgame);

  if (typeof savedgame.balloons !== "undefined") balloons = savedgame.balloons;

  if (typeof savedgame.clowns !== "undefined") clowns = savedgame.clowns;

  if (typeof savedgame.streetPerformers !== "undefined") streetPerformers = savedgame.streetPerformers;

  if (typeof savedgame.carnys !== "undefined") carnys = savedgame.carnys;
}

window.onload = load()

function deleteGame() {
  localStorage.removeItem("save")
}
