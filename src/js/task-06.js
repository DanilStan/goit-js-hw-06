const onInputId = document.getElementById('validation-input');
const onInputIdAttrebuteValue = onInputId.getAttribute('data-length');

onInputId.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    // console.dir(event.currentTarget);
    if (event.currentTarget.value.length <= onInputIdAttrebuteValue) {
        onInputId.classList.add('valid')
    } else {
        onInputId.classList.add('invalid');
    }
}
