
const bart = document.getElementById('bart');
const hydrant = document.getElementById("hydrant");
const barney = document.getElementById('barney')

document.addEventListener("keydown", function (event) {
    jump()
});

function jump() {
    if (bart.classList != 'jump') {
        bart.classList.add('jump');
    }
    setTimeout(function (){
        bart.classList.remove('jump');
    }, 300);
}
 let isAlive = setInterval(function (){
     let bartTop = parseInt(window.getComputedStyle(bart).getPropertyValue('top'));
     let hydrantleft = parseInt(window.getComputedStyle(hydrant).getPropertyValue('left'));
     if (hydrantleft < 100 && hydrantleft > 0 && bartTop >= 340 ){
         alert('GAME OVER!');
     }

 }, 10);
// setTimeout(function (){
//     bart.classList.remove('jump');
// }, 300);
//
// let isAlive = setInterval(function (){
//     let bartTop = parseInt(window.getComputedStyle(bart).getPropertyValue('top'));
//     let barneyleft = parseInt(window.getComputedStyle(barney).getPropertyValue('left'));
//     if (barneyleft < 100 && barneyleft > 0 && bartTop >= 240){
//         alert('GAME OVER!');
//     }
// }, 10);