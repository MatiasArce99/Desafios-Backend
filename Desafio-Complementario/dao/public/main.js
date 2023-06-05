const socket = io(); //Instanciamos socket para comunicarnos con el servidor
let user;
const inputMsj = document.getElementById('msj');

Swal.fire({
    title: 'Bienvenido, identificate',
    input: 'text',
    text: 'Inicia sesión para el chat',
    icon: 'success',
    inputValidator: (value) => {
        return !value && 'Tenés que identificarte'
    },
    allowOutsideClick: false
})
    .then((result) => {

        user = result.value;
    });

function render(data) {

    const html = data.map((elem, index) => {

        return `<div>
            <strong>${elem.user}:</strong>
            <p>${elem.msj}</p>
            </div>`;
    })
        .join(' ');

    document.getElementById('messages').innerHTML = html;
}

inputMsj.addEventListener('keyup', event => {

    if (event.key === 'Enter') {

        let msj = inputMsj.value;

        if (msj.trim().length > 0) {

            socket.emit('message', { user, msj });
            inputMsj.value = '';
        }
    }
});

socket.on('messages', data => {

    render(data);
});