const lblOnline = document.getElementById('lblOnline');
const lblOffline = document.getElementById('lblOffline');
const txtMensaje = document.getElementById('txtMensaje');
const btnEnviar = document.getElementById('btnEnviar');

const socket = io();

socket.on('connect', () => {
  console.log('Conectado');
  lblOffline.style.display = 'none';
  lblOnline.style.display = '';
});

socket.on('disconnect', () => {
  console.log('Desconectado del servidor');
  lblOnline.style.display = 'none';
  lblOffline.style.display = '';
});

socket.on('enviar-mensaje', (payload) => {

});

btnEnviar.addEventListener('click', () => {
  const mensaje = txtMensaje.value;
  const payload = {
    mensaje,
    id: '123ABC',
    fecha: new Date().getTime()
  };

  socket.emit('enviar-mensaje', payload, (id) => {
    console.log(id);
  });
});

