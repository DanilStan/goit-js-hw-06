const buttonRef = document.querySelector('.change-color');

buttonRef.addEventListener('click', clickOnBtn);

function clickOnBtn() {
  // console.log('CLICKD')
  document.body.style.backgroundColor = getRandomHexColor();
  const currentColor = document.body.style.backgroundColor;
  const textColor = document.querySelector('.color');
  textColor.textContent = currentColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}