
// animating the brand-name when page loads
window.onload = () => {
  const bName = document.querySelector('.brand-name');
  setTimeout(() => {
    bName.style.animationPlayState = 'running';
  }, 500);
};

// fixing the brand-name to the top
window.addEventListener('scroll', () => {
  const bName = document.querySelector('.brand-name');
  const bNamePosition = bName.getBoundingClientRect().top;

  if (bNamePosition <= 10) {
    bName.classList.add('fixed');
  } 
  if (window.scrollY === 0 || bNamePosition > 10) {
    bName.classList.remove('fixed');
  }
});

// animating the brand-name and adding it to header
const img = document.querySelector('.hero-img');
const bName = document.querySelector('.brand-name');
const header = document.querySelector('.main-header');
const heroContainer = document.querySelector('.hero');
let textMoved = false;

window.addEventListener('scroll', () => {
    
    const bottom = img.getBoundingClientRect().bottom;
    const scrollY = window.scrollY;

    if (scrollY && bottom < 0) {
        header.classList.add('visible');
        if (!textMoved) {
            header.appendChild(bName);
            bName.classList.add('style');
            textMoved = true;
            }   

        }
    else {
        header.classList.remove('visible');
        if (textMoved) {
            heroContainer.appendChild(bName);
            bName.classList.remove('style');
            textMoved = false;
            }
        }
});
