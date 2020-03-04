$(document).ready(function(){

    var userScore = 0;
    var randomNumber = Math.ceil(Math.random()*120);
    var Crystal1Value = Math.ceil(Math.random()*12);
    var Crystal2Value = Math.ceil(Math.random()*12);
    var Crystal3Value = Math.ceil(Math.random()*12);
    var Crystal4Value = Math.ceil(Math.random()*12);

    var wins = 0; 
    var losses = 0; 

    function checkUserScore(){
        if (userScore > randomNumber){
            losses++;
            $("#losses").text(losses);
            randomNumber = Math.ceil(Math.random()*120);
            $("#randomNumber").text(randomNumber);
            Crystal1Value = Math.ceil(Math.random()*12);
            Crystal2Value = Math.ceil(Math.random()*12);
            Crystal3Value = Math.ceil(Math.random()*12);
            Crystal4Value = Math.ceil(Math.random()*12);
            userScore = 0;
            $("#userScore").text(userScore);
        }
        else if (userScore == randomNumber){
            wins++;
            $("#wins").text(wins);
            randomNumber = Math.ceil(Math.random()*120);
            $("#randomNumber").text(randomNumber);
            Crystal1Value = Math.ceil(Math.random()*12);
            Crystal2Value = Math.ceil(Math.random()*12);
            Crystal3Value = Math.ceil(Math.random()*12);
            Crystal4Value = Math.ceil(Math.random()*12);
            userScore = 0;
            $("#userScore").text(userScore);
        }
    }

    // print socres onto the page
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#userScore").text(userScore);
    $("#randomNumber").text(randomNumber);


    //what happens when user presses each button
    $("#Crystal1Button").on('click', function(){userScore += Crystal1Value; 
        checkUserScore(); $("#userScore").text(userScore);})
    $("#Crystal2Button").on('click', function(){userScore += Crystal2Value; 
        checkUserScore(); $("#userScore").text(userScore);})
    $("#Crystal3Button").on('click', function(){userScore += Crystal3Value; 
        checkUserScore(); $("#userScore").text(userScore);})
    $("#Crystal4Button").on('click', function(){userScore += Crystal4Value; 
        checkUserScore(); $("#userScore").text(userScore);})

    

})

