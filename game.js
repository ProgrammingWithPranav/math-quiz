question_turn = "player1";
question_turn = "player2";

player1_score = 0;
player2_score = 0;

var player1Name;
var player2Name;

function onLoad() {
    player1Name = localStorage.getItem("player1Name");
    player2Name = localStorage.getItem("player2Name");

    document.getElementById("player1Name").innerHTML = player1Name;
    document.getElementById("player2Name").innerHTML = player2Name;
}

function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_ans = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='check' />";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;

    document.getElementById("questionOutput").innerHTML = row;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

function check() {
    get_answer = document.getElementById("check").value;

    if(get_answer == "player1") {
        update_player1_score = player1_score + 1;
        document.getElementById("player1score").innerHTML = update_player1_score;
    }

    else {
        update_player2_score = player2_score + 1;
        document.getElementById("player2score").innerHTML = update_player2_score;
    }

    if (question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2Name;
    }

    else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1Name;
    }
}
