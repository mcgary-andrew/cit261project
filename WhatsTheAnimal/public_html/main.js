function storePlayerName(){
    var firstName = document.getElementById('name1').value;
    var lastName = document.getElementById('name2').value;
    
    var player = {
        firstname: firstName,
        lastname: lastName,
    };
    
    var json = JSON.stringify(player);
    if(window.localStorage){
        localStorage.setItem('Player', json);
    };
}

function load(){
    var player = JSON.parse(localStorage.getItem('Player'));
    console.log(player);
    document.getElementById('name').innerHTML = player.firstname + " " + player.lastname;
    if(window.localStorage){
        highScore = localStorage.getItem('High Score');
        currentScore = localStorage.getItem('Current Score');
        document.getElementById('high_score').innerHTML = highScore;
        document.getElementById('current_score').innerHTML = currentScore;
    }
}

var currentScore = 0;
var highScore;

function getHighScore(){
    if(window.localStorage){
        highScore = localStorage.getItem('High Score');
        document.getElementById('high_score').innerHTML = highScore;
    }
}

function setHighScore(){
    if(window.localStorage){
        topScore = localStorage.getItem('High Score');
        if(currentScore >= highScore){
            localStorage.setItem('High Score', currentScore);
            document.getElementById('high_score').innerHTML = currentScore;
        }
    }
}
