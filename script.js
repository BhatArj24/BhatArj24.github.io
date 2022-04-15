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
    
    
    //Getting info of user guessed player
   
        let guess = document.getElementById("guess-field").value;
        let name_split = guess.split(" ");
        let first_name = name_split[0];
        let last_name = name_split[1];
        let url_name = first_name +"%20"+last_name;
        let url = "https://api.cricapi.com/v1/players?apikey=f24486e8-5f6f-44b9-a205-b80a9dcf2fc0&offset=0&search="+url_name;
        fetch(url)
            .then(response => response.json())
            .then(player => {
                document.getElementById("fetch_id").innerHTML = player.data[0].id;
            });
        guess = guess.toString();
        guess = guess.toLowerCase();
      
        let id = document.getElementById("fetch_id");
        
        // id.style.visibility = 'hidden';

        setTimeout(console.log('wait'),50000);
        url = "https://api.cricapi.com/v1/players_info?apikey=f24486e8-5f6f-44b9-a205-b80a9dcf2fc0&offset=0&id="+id.innerHTML;
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(player=>{
                document.getElementById("user_name").innerHTML = player.data[0].name;
            });

        user_guess_name = document.getElementById("user_name").innerHTML;
        
            

        
        
    
    // Putting info user guessed player in tiles
    if(true){
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
        
        curr_height+=1;
    }
    //Displays not in list if user guess not valid

    console.log(answer_name);
    
    
    

    
    
    
}







