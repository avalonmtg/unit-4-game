$(document).ready(function () {

    // Generate random number
    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    var numberGoal = generateRandomNumber(19, 120);
    var crystalValue1 = generateRandomNumber(1, 12);
    var crystalValue2 = generateRandomNumber(1, 12);
    var crystalValue3 = generateRandomNumber(1, 12);
    var crystalValue4 = generateRandomNumber(1, 12);
    var score = 0;

    var crystalRandom = [];
    var wins = 0;
    var losses = 0;

    $("#randomNumber").text(numberGoal)
      

    game();
    function game() {
        var counter = 0;
        $("#crystal1").on("click", function () {
            this.value = parseInt(crystalValue1);
            console.log("this.value", this.value);
            console.log("counter", counter);
            $("#score").text(counter += crystalValue1);
        })

        $("#crystal2").on("click", function () {
            console.log("test");
            this.value = crystalValue2
            console.log(this.value)
            $("#score").text(counter += crystalValue2);
        })
        $("#crystal3").on("click", function () {
            console.log("test");
            this.value = crystalValue3
            console.log(this.value)
            $("#score").text(counter += crystalValue3);
        })
        $("#crystal4").on("click", function () {
            console.log("test");
            this.value = crystalValue4
            console.log(this.value)
            $("#score").text(counter += crystalValue4);
        })

    }

    $("button").on("click", function (event) {
        event.preventDefault();
        var gemValue = $(this).attr("value");
        score += parseInt(gemValue);
        console.log(score);
        $("#score").text("Your Total Score: " + score);
        if (score === numberGoal) {
            wins++;
            alert("You Won!");
            $("#wins").text("Wins" + wins);
            $("#score").text("Your Total Score: " + score);
            reset();
        }
        else if (score > numberGoal) {
            losses++;
            alert("You Lost :(")
            $("#losses").text("Losses" + losses);
            reset();
        }
    })

    // game reset
    function reset() {
        alert("Another Game?");
        score = 0;
        $("#score").text("Your Total Score: " + score);
        

    }
    
})