function singUp(e)
{
    event.preventDefault();

var nombre = document.getElementById('name').value;
var email = document.getElementById('email').value;
var numero = document.getElementById('number').value;
var clave = document.getElementById('pass').value;

var user = {
    nombre:nombre,
    email:email,
    numero:numero,
    clave:clave,
};

var json = JSON.stringify(user);
localStorage.setItem(user, json);
console.log('user added');

}


function loginFunc(e)
{
    event.preventDefault();

    var email = document.getElementById('usuario').value;
    var clave = document.getElementById('password').value;
    var mostrar = document.getElementById('mostrar');

    var user = localStorage.getItem(user);
    var data = JSON.parse(user);
    console.log(data);

    if(user == null)
    {
        mostrar.innerHTML = 'Ingrese los datos de usuario';
    }else if(email == data.email && clave == data.clave){
        mostrar.innerHTML = 'Logeado';
    }else{
        mostrar.innerHTML = 'Emaile o contraseña incorrecta';
    }
}