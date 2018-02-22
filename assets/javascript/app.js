var trivia= {
    onLoad: function() {
        $("#start").show();
        trivia.startGame();
    },
    
    tick: function () {
        var sound = $("#tick");
        sound[0].play();
      },
    end: function () {
        var sound = $("#end");
        sound[0].play();
    },

    questionArray: [
        {
            question: "A Sphinx, which is seen guarding the front of the Khafres Pyramid, is made up of which two distinguishing features?",
            answers: {
                a: "Half Lion, Half Human", 
                b: "Half Snake, Half Human",
                c: "Half Tiger, Half Human",
            },
        },{
            question: "The Kelpie, a shape shifting water spirit inhabits local lochs and pools of Scotland, what shape is it more commonly known to appear as before luring victims to their death?",
            answers:{
                a: "Dragon",
                b: "Dolphin",
                c: "Horse",
            },
        },{
            question: "Described as a female spirit in Irish Mythology who usually shrieks, or wailes to killt their vicitms, is known as what?",
            answers:{
            a:"Bannik",
            b:"Baba Yaga",
            c:"Banshee",
            },
        },{
            question: "A Doppelganger is also known as what?",
                answers: {
                    a:"An evil twin", 
                    b:"A second cousin",
                    c:"An unfamiliar person",
                },
        },{
            question: "A Wendigo,which is native to the nortern forests of the Atlantic Coast and Great Lakes Region, commonly eats what?",
            answers:{
                a:"Household pets", 
                b:"Humans",
                c:"Leftover food left out",
            },
        }
    ],
    
    
    startGame: function(){
        $("#start").click(function () {
            $("#start").hide('fast');
            $('.panel-default').show('slow');
            var intervalId;
            var timeLeft = 30;
            start()
            function start() {
                clearInterval(intervalId);
                intervalId = setInterval(decrement, 1000);
            }
            function decrement() {
                timeLeft--;
                trivia.tick();
                $('#display').html(timeLeft);
                if (timeLeft == 0) {
                    trivia.end();
                    timeOut();
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
        $("#answerA").html(randomQuestion.answers.a);
        $("#answerB").html(randomQuestion.answers.b);
        $("#answerC").html(randomQuestion.answers.c);
    },

    answerSelect: function() {
        $('.answers').click(function() {
            
        })

        
    }










}







trivia.onLoad();