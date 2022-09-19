const socketController = (socket) => {
  console.log("Cliente Conectado!", socket.id);

  socket.on("disconnect", () => {
    console.log("Cliente Desconectado", socket.id);
  });

  socket.on("enviar-mensaje", (payload, callback) => {
    const id = 123456;
    callback(id);
    socket.broadcast.emit("enviar-mensaje", payload);
  });
};
module.exports = {
  socketController,
};
