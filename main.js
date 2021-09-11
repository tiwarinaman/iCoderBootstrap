function hitApi() {
 var xhr = new XMLHttpRequest();

xhr.onload = function () {

	if (xhr.status >= 200 && xhr.status < 300) {
    
    console.log("Success Data", JSON.parse(xhr.response);)
	} else {
      console.log('The request failed!');
	}

	console.log('This always runs...');
};

xhr.open('GET', 'https://gorest.co.in/public/v1/users');
xhr.send(); 
}
