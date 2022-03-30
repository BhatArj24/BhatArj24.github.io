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
function check_name(user_guess_name,answer_name){
    if(user_guess_name==answer_name){
        for (let i = 0; i < 5; i++) {
            let l = document.getElementById(curr_height+"-"+i);
            l.classList.add('correct');
        }
    }
    else{
        let l = document.getElementById(curr_height+"-0");
        l.classList.add('absent');
    }
}
function check_age(user_guess_age,answer_age){
    if(user_guess_age==answer_age){
        let l = document.getElementById(curr_height+"-"+1);
        l.classList.add('correct');
    }
    else if(user_guess_age-2 == answer_age || user_guess_age-1 == answer_age || user_guess_age+2 == answer_age || user_guess_age-1 == answer_age){
        let l = document.getElementById(curr_height+"-"+1);
        l.classList.add('present');
    }
    else{
        let l = document.getElementById(curr_height+"-"+1);
        l.classList.add('absent');
    }
}
function intialize() {
            
    // Create the game board
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            // <span id="0-0" class="tile">P</span>
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
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
    let valid = false;
    let user_guess_name;
    let user_guess_age;
    let user_guess_team;
    let user_guess_position;
    let user_guess_number;
    let r_answer = 'Virat Kohli';
    let answer_name;
    let answer_age;
    let answer_team;
    let answer_position;
    let answer_number;
    players.forEach(player => {
        
        r_answer.toLowerCase();
        if(r_answer == player.name){
            answer_name = player.name;
            console.log(answer_name);
            answer_age = player.age;
            answer_team = player.team;
            answer_position = player.position;
            answer_number = player.number;
        }
    
    });
    //Getting info of user guessed player
    players.forEach(player => {
        let guess = document.getElementById("guess-field").value;
        
        guess = guess.toString()
        guess = guess.toLowerCase();
        if(guess == player.name.toLowerCase()){
            user_guess_name = player.name;
            user_guess_age = player.age;
            user_guess_team = player.team;
            user_guess_position = player.position;
            user_guess_number = player.number;
            valid = true;
        }

    });
    //Putting info user guessed player in tiles
    if(valid){
        for(let i=0;i<width;i++){
            let ch = document.getElementById(curr_height+"-"+i);
            if(i==0){
                ch.innerHTML = user_guess_name;
            }
            else if(i==1){
                ch.innerHTML = user_guess_age;
            }
            else if(i==2){
                ch.innerHTML = user_guess_team;
            }
            else if(i==3){
                ch.innerHTML = user_guess_position;
            }
            else if(i==4){
                ch.innerHTML = user_guess_number;
            }
            
        }
        check_name(user_guess_name,answer_name);
        check_age(user_guess_age,answer_age);
        curr_height+=1;
    }
    //Displays not in list if user guess not valid
    else{
        document.getElementById("message").innerHTML = "Not in list";
    }
    console.log(answer_name);
    
    
    

    
    
    
}



const Virat_Kohli = new Player('Virat Kohli',32,'India','Bat',18);
players.push(Virat_Kohli);
const KL_Rahul = new Player('Kl Rahul',30,'India','Bat',22);
players.push(KL_Rahul);




