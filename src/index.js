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

// 4. load

// 5. focus

// 6. resize

// 7. scroll

// 8. select

// 9. dblclick

// 10. drag / drop
