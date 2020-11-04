let headSection = document.querySelector(".introSec");
let secondSection = document.querySelector('.secondSec');
// let video = headSection.querySelector('video');
// let text = headSection.querySelector('h1');

//Scrolling Effects
const controller = new ScrollMagic.Controller();

//use .addIndicators() to add section scroll indicators.
let introScene = new ScrollMagic.Scene({
    duration: 10,
    triggerElement: headSection,
    triggerHook: 0
}).setPin(headSection, { pushFollowers: false }).addTo(controller);

let secondScene = new ScrollMagic.Scene({
    duration: 40,
    triggerElement: headSection,
    triggerHook: -500
}).setPin(secondSection).addTo(controller);

let accelAmount = 0.5;
let delay = 0;
let scrollPos = 0;
let rawScroll = 0;

introScene.on('update', (e) => {
    scrollPos = e.scrollPos / 1000;
    rawScroll = e.scrollPos;
});

document.body.style.overflow = 'hidden';

setTimeout(() => {
    document.body.style.overflow = 'auto';
    headSection.style.animation = 'backgroundAnimation 0.80s linear';
    headSection.style.animationFillMode = 'forwards';
    secondSection.style.animation = 'backgroundAnimationRev 0.80s linear';
    secondSection.style.animationFillMode = 'forwards';
    document.getElementById('num').style.animation = 'changeColorToWhite 0.50s linear';
    document.getElementById('num').style.animationFillMode = 'forwards';
    document.getElementById('name').style.animation = 'changeColorToWhite 0.50s linear';
    document.getElementById('name').style.animationFillMode = 'forwards';
    document.getElementById('introTextCont').style.animation = 'changeColorToWhite 0.50s linear';
    document.getElementById('introTextCont').style.animationFillMode = 'forwards';
}, 2700);

window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}