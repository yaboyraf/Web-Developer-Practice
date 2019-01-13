const numDrumBtn = document.querySelectorAll('.drum').length;

for (var i = 0; i < numDrumBtn; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function() {
        console.log('i work!');
    });
}
