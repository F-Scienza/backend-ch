// INSTANCIAMOS http que va a importar la libreria http
// esta variable en realidad es un OBJETO que trae
// consigo metodos para levantar el servidor

const http = require('http');

// Instanciamos server
// que va a traer el metodo createserver de http
// recibe un CALLBACK con dos argumentos (una peticion
// y una respuesta) el metodo .end envia datos al cliente
// response puede ser lo que querramos (datos, texto, una pagina)

const server = http.createServer((request, response) => {
	response.end('respuesta al cliente');
});

// Instanciamos conectedServer y con .listen
// escucha el PUERTO (que querramos) y
// el CALLBACK arranca cuando todo esté listo
// .address().port nos devuelve el puerto configurado

const conectedServer = server.listen(8080, () => {
	console.log(
		`servidor http escuchando en el puerto ${conectedServer.address().port}`
	);
});
