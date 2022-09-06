const refs = {
    inputEl: document.querySelector("#validation-input"),
}

const validLength = Number(refs.inputEl.dataset.length);
refs.inputEl.addEventListener("blur", onInputValid);

function onInputValid(event) {
    if (event.target.value.length === validLength) {
        updateClassElem("valid", "invalid");
    } else {
        updateClassElem("invalid", "valid");
    }
}

function updateClassElem(addCl, remCl) {
    refs.inputEl.classList.remove(remCl);
    refs.inputEl.classList.add(addCl);
}






// const onInputId = document.querySelector('#validation-input');
// const onInputIdAttrebuteValue = Number(onInputId.dataset.length);

// onInputId.addEventListener('blur', onInputBlur);

// function onInputBlur(event) {
//     // console.dir(event.currentTarget);
//     if (event.target.value.length === onInputIdAttrebuteValue) {
//         updateClassEl('valid', 'invalid');
//     } else {
//         updateClassEl('invalid', 'valid');
//     }
// }

// function updateClassEl(addClass, remClass) {
//     onInputId.classList.add(addClass)
//     onInputId.classList.remove(remClass)
// }
