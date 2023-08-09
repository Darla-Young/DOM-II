import './less/index.less'

// 1. mouseover &
// 2. mouseout
const nav = document.querySelector('.nav');
nav.addEventListener('mouseover', event => {
    event.target.style.color = 'gray';
});
nav.addEventListener('mouseout', event => {
    event.target.style.color = 'black';
});

// 3. scroll &
// 4. scrollend
const home = document.querySelector('body');
document.addEventListener('scroll', () => {
    home.style.color = 'gray';
});
document.addEventListener('scrollend', () => {
    setTimeout(() => {
        home.style.color = 'black';
    }, 0);
});

// 5. load
const welcome = document.querySelector('header.intro h2');
window.addEventListener('load', event => {
    let start = Date.now();
    let timer = setInterval(() => {
        let timePassed = Date.now() - start;
        if (timePassed >= 1500) {
            clearInterval(timer);
            home.style.color = 'black';
            return;
        }
        draw(timePassed);
    }, 20)
});
function draw (timePassed) {
    welcome.style['font-size'] = timePassed / 183 + 'rem'
}

// 6. focus & 
// 7. blur
const pics = document.querySelectorAll('.content-section .img-content img');
pics.forEach(pic => {
    pic.setAttribute('tabindex', '0');
    pic.addEventListener('focus', event => {
        event.target.style.border = "10px dotted yellow";
    }, true);
    pic.addEventListener('blur', event => {
        event.target.style.border = "";
    }, true);
})

// resize

// scroll

// select

// dblclick

// drag / drop
