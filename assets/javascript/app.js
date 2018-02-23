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

    timeLeft: 5,

    questionArray: [
        {
            question: "A Sphinx, which is seen guarding the front of the Khafres Pyramid, is made up of which two distinguishing features?",
            answers: {
                a: { text: "Half Lion, Half Human", correct: true}, 
                b: { text: "Half Snake, Half Human", correct: false }, 
                c: { text: "Half Tiger, Half Human", correct: false }, 
            },
        },{
            question: "The Kelpie, a shape shifting water spirit inhabits local lochs and pools of Scotland, what shape is it more commonly known to appear as before luring victims to their death?",
            answers:{
                a: { text: "Dragon", correct: false },
                b: { text: "Dolphin", correct: false },
                c: { text: "Horse", correct: true },
            },
        },{
            question: "Described as a female spirit in Irish Mythology who usually shrieks, or wailes to killt their vicitms, is known as what?",
            answers:{
                a: { text: "Bannik", correct: false },
                b: { text: "Baba Yaga", correct: false },
                c: { text: "Banshee", correct: true },
            },
        },{
            question: "A Doppelganger is also known as what?",
            answers: {
                a:{ text: "An evil twin",  correct: true },
                b:{ text: "A second cousin", correct: false },
                c:{ text: "An unfamiliar person", correct: false },
            },
        },{
            question: "A Wendigo,which is native to the nortern forests of the Atlantic Coast and Great Lakes Region, commonly eats what?",
            answers:{
                a:{ text: "Household pets", correct: false },
                b:{ text: "Humans", correct: true },
                b:{ text: "Leftover food left out", correct: false},
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
                    trivia.questionImput();
                    trivia.startGame(start());
                    $('#display').text("5")
                    trivia.timeLeft = 5;
                }
            }
            function timeOut() {
                clearInterval(intervalId);
            }
            start();
            trivia.questionImput();
        })
    },
    
    questionImput: function() {
        pickRandom = Math.floor(Math.random() * trivia.questionArray.length);
        randomQuestion = trivia.questionArray[pickRandom];
        $("#questionDisplay").html(randomQuestion.question);
        $("#answerA").html(randomQuestion.answers.a.text);
        $("#answerB").html(randomQuestion.answers.b.text);
        $("#answerC").html(randomQuestion.answers.c.text);
    },

    answerSelect: function() {
        $('.answers').click(function() {
            
        })

        
    }










}







trivia.onLoad();