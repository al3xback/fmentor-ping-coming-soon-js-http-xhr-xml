export const initForm = () => {
	const formEl = document.querySelector('.form');
	const emailInputEl = document.querySelector('.form__control--email');
	const emailErrorMsgEl = emailInputEl.nextElementSibling;

	const validateEmail = () => {
		const enteredEmail = emailInputEl.value.trim();
		const isEmailEmpty = enteredEmail.length === 0;
		const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		const isEmailValid = emailRegex.test(enteredEmail);

		let error = null;

		if (isEmailEmpty) {
			error = {
				message: 'Whoops! It looks like you forgot to add your email',
			};
			emailErrorMsgEl.textContent = error.message;
			emailInputEl.classList.add('invalid');
		} else if (!isEmailValid) {
			error = {
				message: 'Please provide a valid email address',
			};
			emailErrorMsgEl.textContent = error.message;
			emailInputEl.classList.add('invalid');
		} else {
			emailErrorMsgEl.textContent = '';
			emailInputEl.classList.remove('invalid');
		}

		return !!error;
	};

	formEl.addEventListener('submit', (event) => {
		event.preventDefault();

		const isEmailError = validateEmail();

		if (!isEmailError) {
			alert('Subscribed!');
		}
	});

	emailInputEl.addEventListener('input', () => {
		validateEmail();
	});
};
