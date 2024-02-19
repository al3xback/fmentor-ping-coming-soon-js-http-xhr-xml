import { sendHttpRequest } from './util.js';
import { renderSectionContent, handleError } from './render.js';
import { initForm } from './form.js';

const URL =
	'https://gist.githubusercontent.com/al3xback/f759a7f93dfc3598c937a0b3336eaa85/raw/4cae56cf95a74660a757be5f0202058728b96c8d/ping-coming-soon-data.xml';

sendHttpRequest('GET', URL)
	.then((response) => {
		renderSectionContent(response);
		initForm();
	})
	.catch((err) => {
		handleError(err);
	});
