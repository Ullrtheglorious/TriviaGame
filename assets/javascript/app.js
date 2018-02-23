var trivia= {
    onLoad: function() {
        $("#start").show();
        trivia.startGame();
    },
    
    tickSound: function () {
        var sound = $("#tick");
        sound[0].play();
      },
    endSound: function () {
        var sound = $("#end");
        sound[0].play();
    },

    timeLeft: 30,

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
            question: "Described as a female spirit in Irish Mythology who usually shrieks, or wailes to killt their vicitms, is known as what?",
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
        }
    ],
    
    
    startGame: function(){
        $("#start").click(function () {
            $("#start").hide('fast');
            $('.panel-default').show('slow');
            var intervalId;
            start()
            function start() {
                clearInterval(intervalId);
                intervalId = setInterval(decrement, 1000);
            }
            function decrement() {
                trivia.timeLeft--;
                trivia.tickSound();
                $('#display').html(trivia.timeLeft);
                if (trivia.timeLeft == 0) {
                    trivia.endSound();
                    timeOut();
                    trivia.questionInput();
                    trivia.startGame(start());
                    $('#display').text("5")
                    trivia.timeLeft = 30;
                }
            }
            function timeOut() {
                clearInterval(intervalId);
            }
            start();
            trivia.questionInput();
        })
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
    },

    answerSelect: function() {
        $(".answers").click(function() {
            console.log(this);
            var val = $(this).attr("correct")
            if (val == "true") {
                alert("correct");
                trivia.questionInput();
            } else {
                alert("wrong");
            }
            
        })

        
    }










}







trivia.onLoad();
trivia.answerSelect();