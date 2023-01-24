const formulario = document.querySelector('form');
let input = formulario.children[0];
let err = document.querySelector('.icon-error')

formulario.addEventListener('submit', miCorreoForm);

function miCorreoForm  (e) {
    e.preventDefault();
    
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if(emailRegex.test(input.value)) {
        alert(`El correo ${input.value} ha sido registrado correctamente`);
        if(input.value != '') {
            input.value = ''
        }
    } else {
        err.classList.add('active-error');
        error('Por favor proporcione un correo electrónico válido')
        setInterval(() => {
            err.classList.remove('active-error');
        },3000)
    }
}

function error (mensaje) {
    let textError = document.createElement('h1');
    textError.innerHTML = mensaje;
    textError.classList.add('p-error')
    formulario.appendChild(textError)

    setInterval(() => {
        textError.remove()
    },3000)
    
    return mensaje;
}