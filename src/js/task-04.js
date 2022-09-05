

const counterValue = {
    value: 0,
    incriment () {
        this.value += 1;
    },
    decrement () {
        this.value -= 1;
    },
}

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');


// console.log(decrementBtn);
// console.log(incrementBtn);
// console.log(valueEl);

decrementBtn.addEventListener('click', function () {
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
})

incrementBtn.addEventListener('click', function () {
    counterValue.incriment();
    valueEl.textContent = counterValue.value;
})


