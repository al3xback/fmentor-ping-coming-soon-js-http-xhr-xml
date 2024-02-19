export const sendHttpRequest = (method, url) => {
	const promise = new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

		xhr.open(method, url);

		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4) {
				const status = xhr.status;
				if (status >= 200 && status < 400) {
					resolve(xhr.responseText);
				} else {
					reject('Could not fetch data, please try again later.');
				}
			}
		};

		xhr.send();
	});
	return promise;
};
