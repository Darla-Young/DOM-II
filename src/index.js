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
console.log(welcome);
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

// 5. focus
const pics = document.querySelectorAll('.img-content');
pics.forEach(img => {
    img.addEventListener('focus', event => {
        let start = Date.now();
        let timer = setInterval(() => {
            let timePassed = Date.now() - start;
            if (timePassed >= 1000) {
                clearInterval(timer);
                return;
            }
            grow(timePassed);
        }, 20);
    });
});
function grow (timePassed) {
    pics.style.width = pics.style.width + timePassed / 183 + '%'
};

// 6. resize

// 7. scroll

// 8. select

// 9. dblclick

// 10. drag / drop
