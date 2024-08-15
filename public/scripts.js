(() => document.addEventListener("DOMContentLoaded", () => {
// Declaraciones
const socket = io(); // websocket
const form = document.getElementById('chat');
const list = document.querySelector('.messages');
// RECEPCION DE DATOS (WebSocket)
socket.on("message", ({ user, message }) => {
    // Creamos un nuevo elemento
    const li = document.createElement('li');
    // Asignamos la clase user si es del Usuario
    if (form.user.value === user) li.setAttribute("class", "user")
    // Cargamos el contenido dentro del elemento
    li.innerHTML= `
    <p>
        <strong class="d-inline-block w-100">${user}:</strong>
        ${message}
    </p>`;
    // Anidamos el elemento a la LISTA del DOM
    list.appendChild(li);
})
// ENVIO DE DATOS (WebSocket)
form.addEventListener('submit', (e) => {
    // Funcion de captura de datos
    const get = (field) => e.target[field].value
    // Evitamos la recarga
    e.preventDefault()
    // Envio de datos al servidor
    socket.send({ user:get("user"), message:get("message") })
    form.message.value = '';
    form.message.focus()
})
}))()