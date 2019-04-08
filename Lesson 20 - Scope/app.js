var userName = 'Bill';

function modifyUserName() {
	userName = 'Steve';
};

function showUserName() {
	alert(userName);
}
alert(userName); // Display Bill

modifyUserName();
showUserName(); // Display Steve