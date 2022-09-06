const buttonRef = document.querySelector('.change-color');
const textColor = document.querySelector('.color');

buttonRef.addEventListener('click', clickOnBtn);

function clickOnBtn() {
  // console.log('CLICKD')
  document.body.style.backgroundColor = getRandomHexColor();
  const currentColor = document.body.style.backgroundColor;
  textColor.textContent = currentColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}