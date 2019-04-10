var food = [{ }, {question: "Where were pineapples orginally spread?", answer: "South America"}, {question: "What do you call a fake noodle?", answer: "an impasta"}, {question: "Is a tomato a fruit or vegetable?", answer: "fruit"} ];

var animals = [{ }, {question: "What animal has the longest lifespan?", answer: "giant tortoise"}, {question: "What is the slowest animal on earth?", answer: "sloth"}, {question: "What is a female deer referred to as?", answer: "doe"} ];

var disney = [{ }, {question: "Where is Walt Disney World located?", answer: "Flordia"}, {question: "What is the first animated Disney movie?", answer: "Snow White and the Seven Dwarfs"}, {question: "Who's prince is named Prince Charming?", answer: "Cinderella"} ];

var total = 0;

function showQuestion(category, amount) {
    var index = amount / 100;
    var score = document.getElementById("score");
    var buttonF = document.getElementsByClassName("food");
    var buttonA = document.getElementsByClassName("animals");
    var buttonD = document.getElementsByClassName("disney");
    
    if (category == 'food') {
        var inputF = prompt(food[index].question);
        if (inputF == food[index].answer) {
            total  += amount;
            buttonF[index].disabled = true;
        }
        else {
            alert("You are incorrect");
            buttonF[index].disabled = true;
        }
    }
    else if (category == 'animals') {
        var inputA = prompt(animals[index].question);
        if (inputA == animals[index].answer) {
            total += amount;
            buttonA[index].disabled = true;
        }
        else {
            alert("You are incorrect");
            buttonA[index].disabled = true;
        }
    }
    else if (category == 'disney') {
        var inputD = prompt(disney[index].question);
        if (inputD == disney[index].answer) {
            total += amount;
            buttonD[index].disabled = true;
        }
        else {
            alert("You are incorrect");
            buttonD[index].disabled = true;
        }
    }
    score.innerHTML = "Score: $" + total;
}