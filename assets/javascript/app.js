var trivia= {
    onLoad: function() {
        $("#start").show();
        trivia.startGame();
    },
    timeLeft: 30,
    selected: 0,
    score:0,
    remaining: 11,
    timeRunning: false,
    intervalId:[],

    questionArray: [
        {
            question: "A Sphinx, which is seen guarding the front of the Khafres Pyramid, is made up of which two distinguishing features?",
            answers: {
                a: { text: "A: Half Lion, Half Human", correct: true}, 
                b: { text: "B: Half Snake, Half Human", correct: false }, 
                c: { text: "C: Half Tiger, Half Human", correct: false }, 
            },
        },{
            question: "The Kelpie, a shape shifting water spirit inhabits local lochs and pools of Scotland, what shape is it more commonly known to appear as before luring victims to their death?",
            answers:{
                a: { text: "A: Dragon", correct: false },
                b: { text: "B: Dolphin", correct: false },
                c: { text: "C: Horse", correct: true },
            },
        },{
            question: "Described as a female spirit in Irish Mythology who usually shrieks, or wailes to kill their vicitms, is known as what?",
            answers:{
                a: { text: "A: Bannik", correct: false },
                b: { text: "B: Baba Yaga", correct: false },
                c: { text: "C: Banshee", correct: true },
            },
        },{
            question: "A Doppelganger is also known as what?",
            answers: {
                a:{ text: "A: An evil twin",  correct: true },
                b:{ text: "B: A second cousin", correct: false },
                c:{ text: "C: An unfamiliar person", correct: false },
            },
        },{
            question: "A Wendigo,which is native to the nortern forests of the Atlantic Coast and Great Lakes Region, commonly eats what?",
            answers:{
                a:{ text: "A: Household pets", correct: false },
                b:{ text: "B: Humans", correct: true },
                c:{ text: "C: Leftover food left out", correct: false},
            },
        }, {
            question: "Roger Patterson and Bob Gimlin famously claimed to have caught which beast on video in 1967?",
            answers: {
                a: { text: "A: Unicorn", correct: false },
                b: { text: "B: Bigfoot", correct: true },
                c: { text: "C: Jersey Devil", correct: false },
            },
        }, {
            question: "Which of these is said to ward of Werewolves?",
            answers: {
                a: { text: "A: Household pets", correct: false },
                b: { text: "B: Humans", correct: true },
                c: { text: "C: Leftover food left out", correct: false },
            },
        }, {
            question: "In which of these locations would you most likey find the Kraken?",
            answers: {
                a: { text: "A: A Desert oasis", correct: false },
                b: { text: "B: A Dark Forest", correct: false },
                c: { text: "C: The Ocean", correct: true },
            },
        }, {
            question: "Medusa's gaze could turn a man to stone, but what was her hair made out of?",
            answers: {
                a: { text: "A: Stone", correct: false },
                b: { text: "B: Snakes", correct: true },
                c: { text: "C: Daggers", correct: false },
            },
        }, {
            question: "Which British Saint is best known for slaying a Dragon?",
            answers: {
                a: { text: "A: St David", correct: false },
                b: { text: "B: St George", correct: true },
                c: { text: "C: St Dragonslayer", correct: false },
            },
        }, {
            question: "In which year was the first recorded sighting of Scotland's Loch Ness Monster?",
            answers: {
                a: { text: "A: 1987", correct: false },
                b: { text: "B: 1933", correct: true },
                c: { text: "C: 1867", correct: false },
            },
        }
    ],
    startGame: function(){
        $("#start").click(function () {
            $("#start").hide('fast');
            $('.panel-default').show('slow');
            var intervalId;
            trivia.start();
            trivia.decrement();
            trivia.questionInput();
        })
    },
    start: function() {
        if (trivia.timeRunning === false) {
            intervalId: setInterval(trivia.decrement, 1000),
            trivia.timeRunning = true;
        }
    },
    stop: function () {
        clearInterval(trivia.intervalId);
        trivia.timeRunning = true;
    },
    decrement: function() {
        if (trivia.timeLeft == 0 && trivia.timeRunning === true) {
            $("#display").hide("fast");
            $("#answerDisplay").show("fast");
            $("#answerDisplay").html("Sorry that is incorrect!");
            trivia.timeRunning = false;
            setTimeout(trivia.pause, 1000 * 3);
        }else {
            trivia.timeLeft--;
            $('#display').html(trivia.timeLeft);
        }
    },
    
    questionInput: function() {
        pickRandom = Math.floor(Math.random() * trivia.questionArray.length);
        randomQuestion = trivia.questionArray[pickRandom];
        $("#questionDisplay").html(randomQuestion.question);
        $("#answerA").html(randomQuestion.answers.a.text);
        $("#answerA").attr("correct", randomQuestion.answers.a.correct);
        $("#answerB").html(randomQuestion.answers.b.text);
        $("#answerB").attr("correct", randomQuestion.answers.b.correct);
        $("#answerC").html(randomQuestion.answers.c.text);
        $("#answerC").attr("correct", randomQuestion.answers.c.correct);
        trivia.questionArray.splice(trivia.randomQuestion, 1);
    },

    answerSelect: function() {
        $(".answers").click(function() {           
            var val = $(this).attr("correct")
            if (val == "true" && trivia.selected === 0) {
                $("#answerDisplay").show("fast");
                $("#answerDisplay").html("That is Correct!");
                trivia.selected = 1;
                $("#display").hide("fast");
                trivia.score++;
                trivia.remaining--;
                setTimeout(trivia.pause, 1000 * 3);
                trivia.stop();
            } if (val == "false" && trivia.selected === 0) {
                $("#display").hide("fast");
                $("#answerDisplay").show("fast");
                $("#answerDisplay").html("Sorry that is incorrect!");
                trivia.selected = 1;
                trivia.remaining--;
                setTimeout(trivia.pause, 1000 * 3);

            }
        })
    },
    pause: function () {
        if (trivia.remaining == 0) {
            $("#display").hide("slow");
            $("#answerA").hide("slow");
            $("#answerB").hide("slow");
            $("#answerC").hide("slow");
            $("#answerDisplay").hide("fast");
            $("#questionDisplay").html("You Have Finished, Score: " + trivia.score + " out of 11");
            trivia.stop();
            $(".front-btn").show("slow");
        } else {
        
        $("#answerDisplay").html("");
        trivia.timeLeft = 31;
        trivia.selected = 0;
        trivia.questionInput();
        trivia.stop();
        $("#display").show("slow");
        $('#display').text("30")
        }
    },

}







trivia.onLoad();
trivia.answerSelect();