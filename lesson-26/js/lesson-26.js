
const sliderInput = document.querySelector('.slider__input');
const image = document.querySelector('.slider__image');

function debounce(fn, delay) {
    let timeoutId
    return (...args)  => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() =>{
            fn.apply(this, args);
        }, delay);
    };
}

function updateImegeSize(event) {
    const value = event.target.value;
    image.style.width = `${value}%`;
}

const debouncedResize = debounce(updateImegeSize, 100);

sliderInput.addEventListener('input', debouncedResize)