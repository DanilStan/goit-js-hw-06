const form = document.querySelector('.login-form');
const gmailEl = document.querySelector('input[type="email"]')
const passwordEl = document.querySelector('input[type="password"]')

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    if (gmailEl.value === '' || passwordEl.value === '') {
        return alert('All fields must be filled');
    }

    const formElement = event.currentTarget.elements;
    const gmail = formElement.email.value;
    const password = formElement.password.value;

    const userInfo = {
        gmail,
        password,
    }

    console.log(userInfo);
    form.reset();
}
