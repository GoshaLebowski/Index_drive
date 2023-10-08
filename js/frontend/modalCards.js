/* function open modal list card start */
function cardsModalActive() {
	document.querySelector('.selectBankCards').classList.toggle('active');
}
/* function open modal list card end */

/* function close modal list card stard */
function removeModalActive() {
	document.querySelector('.selectBankCards').classList.remove('active');
}
/* function close modal list card end*/

/* function open dowload card start */
function cardModalCreate() {
	document.querySelector('.createBankCards').classList.toggle('active');
}
/* function open dowload card end */

/* function close dowload card start */
function cardModalRemove() {
	document.querySelector('.createBankCards').classList.remove('active');
}
/* function close dowload card end */

/* function selecting input start */
$('.id-check').click(function () {
	$('.my-input-card').prop('disabled', true);
	$(this).closest('div').find('.my-input-card').prop('disabled', false);
});
/* function selecting input end */

/* function appearance type of cards start */
function showMe(value) {
	this.value = value;
	let div = document.getElementById('iconToInputNumberCard');
	if ((this.value[0] === '1')) {
		div.src = '../img/icon/iconBankCard.svg';
		div.src="../img/cards/visa.png";
	} else if ((this.value[0] === '2')) {
		div.src = '../img/icon/iconBankCard.svg';
		div.src="../img/cards/mastercard.png"
	} else if ((this.value[0] === '3')) {
		div.src = '../img/icon/iconBankCard.svg';
		div.src="../img/cards/mir.png";
	} else {
		div.src = '../img/icon/iconBankCard.svg';
	}
}
/* function appearance type of cards end */