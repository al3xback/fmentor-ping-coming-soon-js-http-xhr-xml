import { sendHttpRequest } from './util.js';
import { renderSectionContent, handleError } from './render.js';
import { initForm } from './form.js';

const URL =
	'https://gist.githubusercontent.com/al3xback/f759a7f93dfc3598c937a0b3336eaa85/raw/0824e5a7bb9c71740f63eeb9ab06776a93022ffd/ping-coming-soon-data.xml';

sendHttpRequest('GET', URL)
	.then((response) => {
		renderSectionContent(response);
		initForm();
	})
	.catch((err) => {
		handleError(err);
	});
