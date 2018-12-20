var wins = 0;
var losses = 0;
var score = 0;
var randomResult = 0;

var resetAndStart = function () {

    $('.crystals').empty();

    var images = [
        'https://static.thenounproject.com/png/48877-200.png',
        'https://static.thenounproject.com/png/48878-200.png',
        'https://static.thenounproject.com/png/48884-200.png',
        'https://static.thenounproject.com/png/114666-200.png',
    ]

    randomResult = Math.floor(Math.random() * 99) + 30;
    $('#result').text(randomResult);

    for (var i = 0; i < 4; i++) {
        var random = Math.floor(Math.random() * 12)

        var crystal = $('<div>');
        crystal.attr({
            "class": 'crystal',
            "data-random": random,
        });
        crystal.css({
            "background-image": "url('" + images[i] + "')",
            "background-size": "cover",
        })

        $('.crystals').append(crystal);
    }
}

resetAndStart();

$(document).on("click", ".crystal", function () {
    var num = parseInt($(this).attr('data-random'));
    score += num;
    $('#score').text(score);
    console.log(score);

    if (score > randomResult) {
        losses++
        score = 0;
        $('#score').text(score);
        $('#losses').text(losses);
        resetAndStart();
    } else if (score === randomResult) {
        wins++;
        score = 0;
        $('#score').text(score);
        $('#wins').text(wins);
        resetAndStart();
    }


});

