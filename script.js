var height = 8;
var width = 6;

window.onload = function(){
    intialize();
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
    var value = document.getElementById("guess-field").value;
    
}

