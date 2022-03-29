var height = 8;
var width = 5;
const players = [];


window.onload = function(){
    intialize();
}



const Hi = new Player('Hi',12,'j','wk',2);
players.add(Hi);

class Player{
    name;
    age;
    team;
    position;
    number;
    constructor(name,age,team,position,number){
        this.name = name;
        this.age = age;
        this.team = team;
        this.position = position;
        this.number = number;

    }
    

}
function intialize() {
            
    // Create the game board
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            // <span id="0-0" class="tile">P</span>
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            console.log(tile.id)
            tile.classList.add("tile");
            tile.innerText = "";
            if(c==0){
                tile.classList.add("name");
            }
            else if(c==2){
                tile.classList.add("team");
            }
            document.getElementById("guesses").appendChild(tile);
        }
    }
}

function checkGuess(){
    players.forEach(player => {
        if(document.getElementById("guess-field").value == player.name){
            console.log("match")
        }
    });
    
}

