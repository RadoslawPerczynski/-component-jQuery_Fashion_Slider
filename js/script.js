$(function() {

showCaptions();

$('#js-nextSlideArrow').click(function(event) {
    event.preventDefault();
})
$('#js-prevSlideArrow').click(function(event) {
    event.preventDefault();
})

$('body').on('click', '#js-nextSlideArrow', clickNext)
$('body').on('click', '#js-prevSlideArrow', clickPrev)

function clickPrev() {
    changeSlidePrev();
    resetCaptions();
    setTimeout(showCaptions, 300);
    disableClick();
}

function clickNext() {
    changeSlideNext();
    resetCaptions();
    setTimeout(showCaptions, 300);
    disableClick();
}

var carouselList = $('#carousel ul');

function changeSlideNext() {
    carouselList.animate({'marginLeft':-750}, 700, 'easeOutCubic', moveFirstSlide);
}

function moveFirstSlide() {
    var firstItem = carouselList.find('li:first');
    var lastItem = carouselList.find('li:last');
    lastItem.after(firstItem);
    carouselList.css({marginLeft:0});
}

function changeSlidePrev() {
    moveLastSlide();
    carouselList.animate({'marginLeft':0}, 700, 'easeOutCubic');
}

function moveLastSlide() {
    var firstItem = carouselList.find('li:first');
    var lastItem = carouselList.find('li:last');
    carouselList.css({marginLeft:-750});
    firstItem.before(lastItem);
}

function showCaptions() {
    $('.spanTop').animate({
        'marginRight': '0', 
        'opacity': '1'}, 
        700, 'easeOutCubic');

    $('.spanBottom').animate({
        'marginRight': '0',
        'opacity': '1'}, 
        600, 'easeOutCubic');
}

function resetCaptions() {
    $('.spanTop').animate({
        'margin-right' : '20px',
        'opacity' : '0'}, 150)

    $('.spanBottom').animate({
        'margin-right' : '-50px',
        'opacity' : '0'}, 150)
}

function disableClick() {

    $('body').off('click', '#js-nextSlideArrow', clickNext);
    $('body').off('click', '#js-prevSlideArrow', clickPrev);

    function enableClick() {
        $('body').on('click', '#js-prevSlideArrow', clickPrev)
        $('body').on('click', '#js-nextSlideArrow', clickNext);
    }
    setTimeout(enableClick, 950);
}

})