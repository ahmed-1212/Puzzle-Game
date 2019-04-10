var app = new Vue ({
    'el': '#app',
    'data': {
        //First Arry Set Of Letters To MAke The First Word
        letters1: [
             {l: 'e', class: "n"},
             {l: 'a', class: "n"},
             {l: 'e', class: "n"},
             {l: 't', class: "n"},
             {l: 'b', class: "n"},
             {l: 's', class: "n"},
             {l: 'l', class: "n"},
        ],
        //Seconde Arry Set Of Letters To MAke The Seconde Word
        letters2: [
             {l: 'm', class: "n"}, 
             {l: 'o', class: "n"},
             {l: 'n', class: "n"},
             {l: 'r', class: "n"},
             {l: 'g', class: "n"},
             {l: 'i', class: "n"},
             {l: 'n', class: "n"},
             {l: 'm', class: "n"},
             {l: 'r', class: "n"},
        ],
        //Third Arry Set Of Letters To MAke The Third Word
        letters3: [
             {l: 'a', class: "n"}, 
             {l: 'e', class: "n"},
             {l: 'g', class: "n"},
             {l: 'a', class: "n"},
             {l: 'm', class: "n"},
             {l: 'd', class: "n"},
             {l: 'r', class: "n"},
             {l: 'd', class: "n"},
             {l: 'o', class: "n"},
             {l: 'n', class: "n"},
        ],
        word1: [], //Array To Contain The Letters From The First Array Letters
        word2: [], //Array To Contain The Letters From The Seconde Array Letters
        word3: [], //Array To Contain The Letters From The Third Array Letters

        //Array That Hold The Message When The User Solve A Right Word
        wordRight: [
            {word: 'table', class: 'w', num: 1},
            {word: 'morning', class: 'w', num: 2},
            {word: 'armageddon', class: 'w', num: 3},
        ],
        wordChecker1: '', //Variable To Track The End Word When The User Finished Selecting Letters From Groupe One
        wordChecker2: '', //Variable To Track The End Word When The User Finished Selecting Letters From Groupe Tow
        wordChecker3: '' //Variable To Track The End Word When The User Finished Selecting Letters From Groupe Three

    }
});

$(function () {

    'use strict';

    // To Make Letter That A User Select Disappear And Show In The Square Area
    $('.n').on('click', function () {
    $(this).css('display', 'none');
    app.word1.push({
        l: $(this).text(),
        class: 'r'
    });

    app.wordChecker1 += $(this).text();  //To Keep Adding The Letters To The Tracing Variable Of The First Word

    //A Condition To Start Everything To Check If The First Tracker Equal To The Right Word 
    if (app.wordChecker1 === 'table') {

        //Here We Are Making The First Groupe Of Letters Disappear And The A Marker That A User Successfully Solved A Right Word And Make The New Set Of Letters Aper
        $('.letters-set1, .word-set1, .colloection1').css('display', 'none').siblings('.letters-set2, word-set2, .colloection2').css('display', 'block')
        $('.right-words .w:contains(table)').css('display', 'block');

        //Starting The Same Thing With Groupe Tow
        $('.letters-set2 .n').click(function() {

            $(this).css('display', 'none');
            app.word2.push({
                l: $(this).text(),
                class: 'r'
            });

            app.wordChecker2 += $(this).text();

            if (app.wordChecker2 === 'morning') {
                
                $('.letters-set2, .word-set2, .colloection2').css('display', 'none').siblings('.letters-set3, .word-set3, .colloection3').css('display', 'block')
                $('.right-words .w:contains(morning)').css('display', 'block');

                //Starting The Same Thing With Groupe Three
                $('.letters-set3 .n').click(function() {

                        $(this).css('display', 'none');
                        app.word3.push({
                            l: $(this).text(),
                            class: 'r'
                        });

                        app.wordChecker3 += $(this).text();

                        if (app.wordChecker3 === 'armageddon') {
                           alert('Good Job You Solved All The Words');
                           $('.right-words .w:contains(armageddon)').css('display', 'block');
                           $('h3').css('display', 'block');
                           $('.word-set3, .colloection3, .letters-set3').css('display', 'none')
                        }

                        else if (app.wordChecker3 !== 'armageddon' && app.word3.length === 10){
        
                            alert('Wrong')
                            $('.letters-set3').children().css('display', 'inline')
                            app.wordChecker3 = '';
                            app.word3.length = 0;
                        }
                    })
            }

            else if (app.wordChecker2 !== 'armageddon' && app.word2.length === 7){
        
                alert('Wrong')
                $('.letters-set2').children().css('display', 'inline')
                app.wordChecker2 = '';
                app.word2.length = 0;
            }
        })
    }

    //Here Another Condition If The Word Tracker Dose Not Match The Right Word Will Shoe A Alert Then Reset Everything
    //And It's A Combination Of Asking If The Tracer Is Equal TO The Right Word AND The Length Of Array Is Equal To The Length Of The Right Word
    else if (app.wordChecker1 !== 'ahmed' && app.word1.length === 5){
        
        alert('Wrong')
        $('.letters-set1').children().css('display', 'inline')
        app.wordChecker1 = '';
        app.word1.length = 0;
    }
   

})


//This One TO GIve The User The Ability To Return The Letters One By One And Try Again
$('.word-set1').delegate('.r', 'click', function () {
    $(this).parent('.word-set1').siblings('.letters-set1').children(':contains("'+ $(this).text() +'")').css('display', 'inline-block');
    app.word1.pop();
    app.wordChecker1 = $(this).siblings(':visible').text();
});

$('.word-set2').delegate('.r', 'click', function () {
    $(this).parent('.word-set2').siblings('.letters-set2').children(':contains("'+ $(this).text() +'")').css('display', 'inline-block')
    app.word2.pop();
    app.wordChecker2 = $(this).siblings(':visible').text();
});

$('.word-set3').delegate('.r', 'click', function () {
    $(this).parent('.word-set3').siblings('.letters-set3').children(':contains("'+ $(this).text() +'")').css('display', 'inline-block')
    app.word3.pop();
    app.wordChecker3 = $(this).siblings(':visible').text();
});

});
