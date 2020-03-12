let button = document.querySelector('#boton');


function sayHello() {
    axios.get('https://swapi.co/api/people/1').then(function(response) {
        console.log(response);
    });
}

button.addEventListener('click', sayHello);