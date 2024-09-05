const loginForm = document.querySelector('#loginForm');

if (loginForm) {
    console.log('Formulario encontrado.');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        try {
            const email = document.querySelector('#email').value;
            const password = document.querySelector('#password').value;
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const validUser = users.find(user => user.email === email && user.password === password);

            if (!validUser) {
                Swal.fire({
                    title: '¡Lo sentimos!',
                    text: 'Usuario y/o contraseña incorrectos',
                    icon: 'warning',
                    iconColor: 'orange',
                    confirmButtonText: 'Aceptar'
                });
                return;
            }

            Swal.fire({
                text: '¡Bienvenid@ a Joyería Ian!',
                icon: 'success',
                iconColor: 'green',
                confirmButtonText: 'Ingresar'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = '../index.html';
                    localStorage.setItem('login_success', JSON.stringify(validUser));
                }
            });

        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: 'Ocurrió un problema inesperado. Por favor, intente nuevamente.',
                icon: 'error',
                iconColor: 'red',
                confirmButtonText: 'Aceptar'
            });
        }
    });
}
