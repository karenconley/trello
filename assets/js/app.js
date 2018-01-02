// VARIABLES

var input = document.getElementById('in');
var input2 = document.getElementsByClassName('caja')[0];
var close = document.getElementById('closeButton');
var btn = document.getElementById('saveButton');
var cont2 = document.getElementById('cont');

//Agregando Evento click para cambiar submit de boton a input

input.addEventListener('click', function(){
	input.classList.add('caja');
	input2.classList.remove('caja');
});

// Agregando Evento close, para cambiar de input a boton

close.addEventListener('click', function(){
	input2.classList.add('caja');
	input.classList.remove('caja');
});

// Agregando lista
btn.addEventListener('click', function(){
	cont2.classList.remove('caja');
//rescatar el texto que ingresara el usuario
var text = document.getElementById('txt').value;
text.textContent = text; //escribe el contenido de la lista
//limpiar input
document.getElementById('txt').value = '';

//creando Nodos

var textN = document.createTextNode(txt);
var newList = document.createElement('div');
var textList = document.createElement('p');


textList.appendChild(textN);
newList.appendChild(textList);
cont.appendChild(newList);

});