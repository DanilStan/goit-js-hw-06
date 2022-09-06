const onInputId = document.getElementById('validation-input');
const onInputIdAttrebuteValue = onInputId.getAttribute('data-length');

onInputId.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    // console.dir(event.currentTarget);
    if (event.currentTarget.value.length >= onInputIdAttrebuteValue) {
        updateClassEl('valid', 'invalid');
    } else {
        updateClassEl('invalid', 'valid')
    }
}

function updateClassEl(addClass, remClass) {
    onInputId.classList.add(addClass)
    onInputId.classList.remove(remClass)
}
