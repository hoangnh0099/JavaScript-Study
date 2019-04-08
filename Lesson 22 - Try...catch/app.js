try {
	var result = sum(10, 20);
} catch(ex) {
	document.getElementById('errorMessage');
} finally {
	document.getElementById('message').innerHTML = 'finally block executed';
}