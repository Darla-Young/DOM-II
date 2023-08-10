import './less/index.less'
import party from 'party-js';

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

// 8. resize
window.addEventListener('resize', event => {
    function setColor(event) {
        event.target.document.body.setAttribute('style', 'color: ' + getRandomColor() + ';');
    }
    setTimeout(setColor, 500, event);
});
function getRandomColor() {
    let letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

// select - must be on an input or textarea field.
const destSect = document.querySelector('.content-destination h2');
const newField = document.createElement('input');
destSect.appendChild(newField);
newField.type = 'text';
newField.setAttribute('style', 'margin-left: 50px;');
newField.value = 'HIGHLIGHT ME!';

newField.addEventListener('select', event => {
    party.confetti(event.target);
});

// dblclick

// drag / drop
