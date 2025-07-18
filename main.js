const doc = document.documentElement;
const header = document.getElementsByTagName('header')[0];
doc.style.setProperty('--h', header.offsetHeight + 'px');

window.addEventListener('scroll', () => {
	console.log('hi');
	document.getElementById('hint').setAttribute('hide', '')})