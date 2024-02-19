const sectionWrapperEl = document.querySelector('.section-wrapper');
const sectionTemplate = document.getElementById('section-template');
const loadingEl = document.querySelector('.loading');

const removeLoading = () => {
	loadingEl.parentElement.removeChild(loadingEl);
};

export const handleError = (msg) => {
	removeLoading();

	const errorEl = document.createElement('p');
	errorEl.className = 'error';
	errorEl.textContent = msg;

	sectionWrapperEl.appendChild(errorEl);
};

export const renderSectionContent = (data) => {
	const parser = new DOMParser();
	const dataDoc = parser.parseFromString(data, 'text/xml');

	const getElementValue = (name) => {
		const element = dataDoc.getElementsByTagName(name)[0];
		const hasChildren = !!element.children.length;
		if (hasChildren) {
			return [...element.children].map(
				(item) => item.childNodes[0].nodeValue
			);
		}
		return element.childNodes[0].nodeValue;
	};

	const title = getElementValue('title');
	const subtitle = getElementValue('subtitle');
	const image = getElementValue('image');

	const sectionTemplateNode = document.importNode(
		sectionTemplate.content,
		true
	);
	const sectionEl = sectionTemplateNode.querySelector('.section');

	const cardIntroTitleEl = sectionEl.querySelector('.card-intro__title');
	const cardIntroTitleSpanEl = cardIntroTitleEl.querySelector('.light');
	cardIntroTitleSpanEl.textContent = title.substring(
		0,
		title.lastIndexOf(' ')
	);
	cardIntroTitleEl.append(title.substring(title.lastIndexOf(' ')));

	const cardIntroSubtitleEl = sectionEl.querySelector(
		'.card-intro__subtitle'
	);
	cardIntroSubtitleEl.textContent = subtitle;

	const cardContentImageEl = sectionEl.querySelector(
		'.card-content__image img'
	);
	cardContentImageEl.src = './images/' + image;
	cardContentImageEl.alt = image
		.substring(0, image.indexOf('.'))
		.replace('-', ' ');

	removeLoading();
	sectionWrapperEl.appendChild(sectionTemplateNode);
};
