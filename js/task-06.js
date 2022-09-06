const onInputId = document.querySelector('#validation-input');
const onInputIdAttrebuteValue = Number(onInputId.dataset.length);

onInputId.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    // console.dir(event.currentTarget);
    if (event.target.value.length === onInputIdAttrebuteValue) {
        updateClassEl('valid', 'invalid');
    } else {
        updateClassEl('invalid', 'valid');
    }
}

function updateClassEl(addClass, remClass) {
    onInputId.classList.add(addClass)
    onInputId.classList.remove(remClass)
}
