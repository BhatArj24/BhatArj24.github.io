var height = 8;
var width = 5;
const players = [];
var curr_height = 0;
var answer_name;
var answer_country;
var answer_role;
var answer_year;
var answer_hand;
window.onload = function(){
    intialize();
}

function get_answer_info(){
    answer_name = "virat kohli";
    answer_name.split(" ");
    let url_name = answer_name[0]+"%20"+answer_name[1];
    let url = "https://api.cricapi.com/v1/players?apikey=f24486e8-5f6f-44b9-a205-b80a9dcf2fc0&offset=0&search="+url_name;
        fetch(url)
            .then(response => response.json())
            .then(player => {
                let other = "https://api.cricapi.com/v1/players_info?apikey=f24486e8-5f6f-44b9-a205-b80a9dcf2fc0&offset=0&id="+player.data[0].id;
                fetch(other)
                    .then(response => response.json())
                    .then(player => {
                        answer_country = player.data.country;
                        answer_role = player.data.role;
                        hand = player.data.battingStyle;
                        hand_Split = hand.split(" ");
                        console.log(hand_Split);
                        answer_hand = hand_Split[0];
                        DOB = player.data.dateOfBirth;
                        DOB_Split = DOB.split("-");
                        answer_year = DOB_Split[0];
                    })
            })
}
function check_name(u_guess_name,answer_name){
    if(u_guess_name==answer_name){
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
    get_answer_info();
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
            else if(c==1){
                tile.classList.add("team");
            }
            else if(c==2){
                tile.classList.add("role");

            }
            else if(c==4){
                tile.classList.add("batting-hand");
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
    guess = guess.toString();
    guess = guess.toLowerCase();
    let url = "https://api.cricapi.com/v1/players?apikey=f24486e8-5f6f-44b9-a205-b80a9dcf2fc0&offset=0&search="+url_name;
    fetch(url)
        .then(response => response.json())
        .then(player => {
            let other = "https://api.cricapi.com/v1/players_info?apikey=f24486e8-5f6f-44b9-a205-b80a9dcf2fc0&offset=0&id="+player.data[0].id;
            console.log(other);
            fetch(other)
                .then(response => response.json())
                .then(player=>{
                    user_guess_name = player.data.name;
                    user_guess_country = player.data.country;
                    user_guess_role = player.data.role;
                    hand = player.data.battingStyle;
                    hand_Split = hand.split(" ");
                    console.log(hand_Split);
                    user_guess_hand = hand_Split[0];
                    DOB = player.data.dateOfBirth;
                    DOB_Split = DOB.split("-");
                    user_guess_year = DOB_Split[0];
                    // Putting info user guessed player in tiles
                    if(true){
                        console.log('in');
                        for(let i=0;i<width;i++){
                            let ch = document.getElementById(curr_height+"-"+i);
                            if(i==0){
                                ch.innerHTML = user_guess_name;
                            }
                            else if(i==1){
                                ch.innerHTML = user_guess_country;
                            }
                            else if(i==2){
                                ch.innerHTML = user_guess_role;
                            }
                            else if(i==3){
                                ch.innerHTML = user_guess_year;
                            }
                            else if(i==4){
                                ch.innerHTML = user_guess_hand;
                            }
                            
                        }
                        
                        curr_height+=1;
                            }
                })
                .catch(err => console.error(err));

            
        })
        .catch(err=>console.err(err));
    
}
            
    
    //Displays not in list if user guess not valid

    console.log(answer_name);
    
    
    

    
    
    








