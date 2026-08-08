window.addEventListener('load', () => {
    const bName = document.querySelector('.brand-name');
    if (bName) {
        setTimeout(() => {
            bName.style.animationPlayState = 'running';
        }, 500);
    }
});

const img = document.querySelector('.hero-img');
const bName = document.querySelector('.brand-name');
const header = document.querySelector('.main-header');
const heroContainer = document.querySelector('.hero');

let textMoved = false;
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            handleScrollAnimations();
            ticking = false;
        });
        ticking = true;
    }
});

function handleScrollAnimations() {
    const scrollY = window.scrollY;
    const bNamePosition = bName.getBoundingClientRect().top;
    const bottom = img.getBoundingClientRect().bottom;

    if (bNamePosition <= 10 && !textMoved) {
        bName.classList.add('fixed');
    } 
    if (scrollY === 0 || bNamePosition > 10) {
        bName.classList.remove('fixed');
    }

    if (scrollY > 0 && bottom < 0) {
        header.classList.add('visible');
        
        if (!textMoved) {
            header.appendChild(bName);
            bName.classList.add('style');
            bName.classList.remove('fixed'); 
            textMoved = true;
        }   
    } else {
        header.classList.remove('visible');
        
        if (textMoved) {
            heroContainer.appendChild(bName);
            bName.classList.remove('style');
            textMoved = false;
        }
    }
}