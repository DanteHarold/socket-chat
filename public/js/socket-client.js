const socket = io();

let params = new URLSearchParams(window.location.search);

if (!params.has("nombre") || !params.has("sala")) {
  window.location = "index.html";
  throw new Error("El nombre y Sala son necesarios");
}

let usuario = {
  nombre: params.get("nombre"),
  sala: params.get("sala"),
};

socket.on("connect", () => {
  console.log("Conectado - Cliente");

  socket.emit("entrar-chat", usuario, (res) => {
    console.log("usuarios Conectados ", res);
  });
});

socket.on("disconnect", () => {
  console.log("Desconectado del Servidor - Cliente");
});

//* Enviar Información
// socket.emit(
//   "crearMensaje",
//   { usuario: "DanteHarold", mensaje: "Hola:)" },
//   (id) => {
//     console.log("Desde el Server", id);
//   }
// );

//* Escuchar Información
socket.on("crearMensaje", (mensaje) => {
  console.log("Desde el Server", mensaje);
});

//* Escuhcar Cambios del Usuario
//* Cuando un usuario entra o sale del chat
socket.on("listaPersona", (personas) => {
  console.log(personas);
});

//* Mensajes Privados

socket.on("mensajePrivado", (mensaje) => {
  console.log("Mensaje Privado : ", mensaje);
});
