// $('h1').click(function() {
//     $('h1').css('color', 'purple');
// });

// for (var i = 0; i < 5; i++) {
//     document.querySelectorAll('button')[i].addEventListener('click', function () {
//         document.querySelector('h1').style.color = 'purple';
//     });
// }

$('button').click(function() {
    $('h1').css('color', 'purple');
});

$(document).keypress(function(event) {
    console.log(event.key);
});