//setting up slideshow

var slideIndex = 0;


function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 7500);
}
carousel();

$(document).ready(function() {
    $('.mySlides').addClass('');
    $('h4.flow-text').addClass('teal white-text bold');
    $('.col.m4.s12.section.card').addClass('butter-bg');
    $('#homepage > div > div').addClass('butter-bg');
    //initializing parallax function
    $('.parallax').parallax();


});