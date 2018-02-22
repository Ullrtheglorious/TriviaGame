var trivia= {
    onLoad: function() {
        $("#start").show();
    },

   timeLeft: 30,

    questionArray: [
        {
            question: "a Sphinx, which is seen guarding the Great Pyramid of Gyza, is made up of which distinguishing features?",
            answers: {
                a: "Half Lion, Half Human", 
                b: "Half Snake, Half Human",
                c: "Half Tiger, Half Human",
            },
            correctAnswer : "a"
        },{
            question: "The Kelpie, a shape shifting water spirit inhabits local lochs and pools of Scotland, what shape is it more commonly known to appear as before luring victims to their death?",
            answers:{
                a: "A Dragon",
                b: "A Dolphin",
                c: "A Horse",
            },
            correctAnswer: "c"
        },{
            question: "Described as a female spirit in Irish Mythology who usually shrieks, or wailes to killt their vicitms, is known as what?",
            answers:{
            a:"A Bannik",
            b:"A Baba Yaga",
            c:"A Banshee",
            },
            correctAnswer: "c"
        },{
            question: "A Doppelganger is also known as what?",
                answers: {
                    a:"An evil twin", 
                    b:"A second cousin",
                    c:"An unfamiliar person",
                },
            correctAnswer: "a"
        },{
            question: "A Wendigo,which is native to the nortern forests of the Atlandtic Coast and Great Lakes Region, commonly eats what?",
            answers:{
                a:"Household pets",
                b:"Humans",
                c:"Leftover food left out",
            },
            correctAnswer: "b"
        }
    ],









    
}







trivia.onLoad();