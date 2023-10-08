let textImg = document.getElementById('textValue');
function showFile(input) {
	let file = input.files[0];
	let textFile = file.name;

	if (textFile.length > 10) {
		textImg.innerHTML = (textFile.substr(0, 3) + '.....' + textFile.substr(textFile.length - 6, textFile.length));
	} else {
		textImg.innerHTML = file.name
	}
}