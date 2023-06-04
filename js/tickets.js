let ticketForm = document.getElementById('ticketForm');

ticketForm.addEventListener('submit', (e) => {
	e.preventDefault();
	let amount = document.getElementById('amount').value;
	let category = document.getElementById('category').value;
	const total = calculatePayment(amount, category);
	console.log(total);
	document.getElementById('price').innerHTML = total;
});

ticketForm.addEventListener('reset', (e) => {
	e.preventDefault();
	document.getElementById('name').value = '';
	document.getElementById('lastName').value = '';
	document.getElementById('email').value = '';
	document.getElementById('amount').value = '';
	document.getElementById('category').value = 0;
	document.getElementById('price').innerHTML = '';
});

const calculatePayment = (amount, category) => {
	let price = 200;
	switch (category) {
		case '1':
			price = price * 0.2;
			break;
		case '2':
			price = price * 0.5;
			break;
		case '3':
			price = price * 0.85;
			break;

		default:
			break;
	}
	return price * amount;
};
