const inputValue = document.querySelector('#name-input');
const spanId = document.querySelector('#name-output');
// console.log(inputValue);

inputValue.addEventListener('input', onInputFocuse);

function onInputFocuse(event) {
    console.log(event.currentTarget.value);
    spanId.textContent = event.currentTarget.value;

    if (spanId.textContent === '') {
        spanId.textContent = 'Anonymous';
    }
}

// spanId.insertAdjacentHTML('beforeend', onInputFocuse);

const newSpanValue = onInputFocuse;