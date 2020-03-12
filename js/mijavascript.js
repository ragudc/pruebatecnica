var text = "El campo e-mail no puede estar vacio";
var text2 = "El campo e-mail no es valido";
var passwd = "La contraseña debe ser minimo de 8 caracteres";
var login = "usuario logueado correctamente";
/*function changeMargin(id) {
	var element = document.getElementById(id);
	element.setAttribute('style', 'margin-bottom:0px');
}*/
function validateForm() {
	//var x = document.forms["formOne"]["emailAddress"].value;
	//var y = document.forms["formOne"]["clave"].value;
	var email = document.getElementById("marginEmail").value;
	var password = document.getElementById("passwd").value;
	var emailRegex = /\w+@\w+\.+[a-z]/;
	if (email == "") {
		//changeMargin("marginEmail");
		console.log('prueba');
		document.getElementById("errorMessage").innerHTML = text;
		//return false;
	}
	if(password == "") {
	   console.log('prueba2');
	   document.getElementById("errorMessage2").innerHTML = passwd;
      //alert("Error:El campo contraseña no puede estar vacio!");
      //return false;
    }
    if(password.length < 8) {
    	console.log('prueba4');
	    document.getElementById("errorMessage2").innerHTML = passwd;
    }
    if(!emailRegex.test(email)) {
    	console.log('prueba3');
		document.getElementById("errorMessage").innerHTML = text2;
	    return false;
	}
	if(password.length >= 8 && email.length > 0) {
        document.getElementById("successful").innerHTML = login;
	}
}