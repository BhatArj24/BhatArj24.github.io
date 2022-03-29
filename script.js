var height = 8;
var width = 5;
const players = [];
var curr_height = 0;



window.onload = function(){
    intialize();
}

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
        let guess = document.getElementById("guess-field").value;
        guess = guess.toString()
        guess = guess.toLowerCase();
        if(guess == player.name.toLowerCase()){
            let user_guess_name = player.name;
            let user_guess_age = player.age;
            let user_guess_team = player.team;
            let user_guess_position = player.position;
            let user_guess_number = player.number;
            break;
        }

    });

    for(let i=0;i<width;i++){
        let ch = document.getElementById(curr_height+"-"+i);
        ch.innerText(player.name);
    }
    

    
}

const Hi = new Player('Hi',12,'j','wk',2);
players.push(Hi);



