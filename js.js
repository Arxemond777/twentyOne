var diller = 3;
var player1 = 0;
var player2 = 0;
var keyBeginning = 0;

var massiveItems = [2, 3, 4, 5, 6 , 7, 8, 9, 10, 10, 10, 10, 11];

function init() {
    bind();
    results();
    TwentyOne()
}

function getRand() {
    num = massiveItems[Math.floor(Math.random() * massiveItems.length)];
    if (num == 11 && Math.random() <= 0.5) {
        num == 1;
    }
    return num;

}

function bind(){ //key
    $(window).on( 'keypress', function(event){
        TwentyOne(event.keyCode);
     });
}

function TwentyOne(key) {
    if (key == 49 && keyBeginning == 0){
        diller = diller +getRand();
        if (diller <= 21){
            $('body').append('<div id="info"></div>');
            $('#info').html(
                'очки дилера' + ' | ' + diller + '<br>' + 'нажмите 2 чтоб совершить вытягивание карты player1 '
            );
            $('#info').css({
                'margin-left': '100px',
                'margin-top': '100px'
            });
            keyBeginning = 1;
        } if (diller >= 22) {
            $('#info').html(
                'диллер проиграл, все оставшиеся игроки выиграли'
            );
            keyBeginning = NaN;
        }

    }
    if (key == 50 && keyBeginning == 1){
        player1 += getRand() + getRand();
        if (player1 <= 21){
            $('#info').html(
                'очки player1' + ' | ' + player1 + '<br>' + 'нажмите 3 чтоб совершить вытягивание карты  player2 '
            );
            keyBeginning = 2;
        } if (player1 >= 22) {
            $('#info').html(
                'player1 проиграл'
            );
            keyBeginning = 2;
        }
    }
    if (key == 51 && keyBeginning == 2){
        player2 += getRand() + getRand();
        if (player2 <= 21){
            $('#info').html(
                'очки player1' + ' | ' + player2 + '<br>' + 'нажмите 1 чтоб совершить вытягивание карты diler '
            );
            keyBeginning = 0;
        } if (player2 >= 22) {
            $('#info').html(
                'player2 проиграл'
            );
            keyBeginning = 0;
        }
    }

}

function results (){
    $('body').append('<div id="info"></div>');
    $('#info').html(
        'нажмите 1 чтоб совершить первый ход диллером'

    );
    $('#info').css({
        'margin-left': '100px',
        'margin-top': '100px'
    });
}
