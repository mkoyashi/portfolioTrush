function scrollTo(element){
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    });
}
var button2 = document.querySelector('.navigation_link2');
var works = document.querySelector('#works');
button2.addEventListener('click', () =>{

    scrollTo(works);

});
function scrollTo(element){
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    });
}
var button2 = document.querySelector('.navigation_link3');
var about = document.querySelector('#about');
button2.addEventListener('click', () =>{

    scrollTo(about);

});
function scrollTo(element){
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    });
}
var button2 = document.querySelector('.navigation_link4');
var hideme = document.querySelector('#hideme');
button2.addEventListener('click', () =>{

    scrollTo(hideme);

});
