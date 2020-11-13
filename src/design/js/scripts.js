/* var socket = io();
var form = document.getElementById('form');
var messages = document.getElementById('messages');
var input = document.getElementById('m');

form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    socket.emit('chat message', input.value)
    input.value = '';
});

socket.on('chat message', function (msg) {
    messages.innerHTML += '<li>' + msg + '</li>';
}); */