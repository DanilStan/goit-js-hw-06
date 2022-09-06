const inputId = document.getElementById('font-size-control');
const spanText = document.getElementById('text');

// spanText.style.fontSize = "60px";

inputId.addEventListener('input', onChangeInputValues)

function onChangeInputValues(event) {
    spanText.style.fontSize = `${event.currentTarget.value}px`;
}