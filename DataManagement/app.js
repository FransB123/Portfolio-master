

////// 1.	Create an XMLHTTP Request Object
var xhr = new XMLHttpRequest();

//////// 2. Create a callback function
xhr.onreadystatechange = function () {
	if (xhr.readyState === 4) {
		document.getElementById('ajax').innerHTML = xhr.responseText;
	}
};

///// 3. Open a request

xhr.open('GET', 'side.html');

///// 4. Send a request

xhr.send();
