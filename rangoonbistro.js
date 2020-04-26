// this the onload event that helps prevent transition content jumping
Window.onload = function(){
    const preload = document.getElementById('body');
    preload.classList.remove('preload');
};

// this is the function for the burger menu icon and the nav bar that pops out
const buttonFloat = document.getElementById('clickDrop');
const continueToSite = document.getElementById('continueToSite');
const yellowhide = document.getElementById('yellowBox');
const onlineOrderContinueToSite = document.getElementById('onlineOrderContinueToSite');

buttonFloat.addEventListener("click", booger);
continueToSite.addEventListener("click", closeBox);
yellowhide.addEventListener("click", menuHider);
onlineOrderContinueToSite.addEventListener("click", closeBox);

// this is the function that closes the pop up order window
function closeBox(e) {
const orderBox = document.getElementById('orderBox');
    if (continueToSite.style.display = "inline-block") {
    orderBox.style.display = ('none');
    }
}

function menuHider() {
    if (yellowhide.style.marginLeft <= "-5px") {
        booger();
    }
}

// if nav yellow box margin left is -240px then toggle class yellow nav fadin

function booger(e) {
const barOne = document.getElementById('barOne');
const barTwo = document.getElementById('barTwo');
const textFade = document.getElementById('yellowNavFadeIn');
const textFadeOne = document.getElementById('yellowNavFadeInOne');
const textFadeOneHalf = document.getElementById('yellowNavFadeInTwo');
const textFadeTwo = document.getElementById('yellowNavFadeInFour');
const textFadeThree = document.getElementById('yellowNavFadeInFive');
const textFadeFour = document.getElementById('yellowNavFadeInSix');

// this is the burger transition
yellowhide.classList.toggle('fuxxx-it');
barOne.classList.toggle('bar-one');
barTwo.classList.toggle('bar-two');
buttonFloat.classList.toggle('bar-wrap-main-after');

// this is the yellow nav menu pop out and text fading
textFade.classList.toggle('text-fade');
textFadeOne.classList.toggle('text-fade');
textFadeOneHalf.classList.toggle('text-fade');
textFadeTwo.classList.toggle('text-fade');
textFadeThree.classList.toggle('text-fade');
textFadeFour.classList.toggle('text-fade');
};
