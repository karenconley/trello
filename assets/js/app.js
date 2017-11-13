function add(){
//añadimos el texto que el usuario ingresa en el textarea:
var comments = document.getElementById('txt').value;
//se limpia el text area después de que se postea el mensaje:
document.getElementById('txt').value = '';
//se llama al contenedor vacío que 'guardará' los posts:
var post = document.getElementById('cont');
//se crea un div que contenga los comentarios:
var newComments = document.createElement('caja');
//no ingresar texto vacío:
if(comments.length == 0 || comments == null){
	alert('Ingresa un mensaje');
	return false;
	}