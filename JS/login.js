// Selecciona el formulario
const loginForm = document.querySelector('#loginForm');

// Verifica si el formulario existe
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        try {
            // Obtén los valores de los campos
            const email = document.querySelector('#email').value;
            const password = document.querySelector('#password').value;

            // Obtén los usuarios almacenados
            const Users = JSON.parse(localStorage.getItem('users')) || [];
            
            // Busca un usuario válido
            const validUser = Users.find(user => user.email === email && user.password === password);

            if (!validUser) {
                // Muestra un mensaje si el usuario no es válido
                Swal.fire({
                    title: '¡Lo sentimos!',
                    text: 'Usuario y/o contraseña incorrectos',
                    icon: 'warning',
                    iconColor: 'orange',
                    confirmButtonText: 'Aceptar'
                });
                return;
            }

            // Muestra un mensaje de bienvenida si el usuario es válido
            Swal.fire({
                text: '¡Bienvenid@ a Joyería Ian!',
                icon: 'success',
                iconColor: 'green',
                confirmButtonText: 'Ingresar'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Redirige y almacena el éxito del login
                    window.location.href = '../index.html';
                    localStorage.setItem('login_success', JSON.stringify(validUser));
                }
            });

        } catch (error) {
            // Muestra un mensaje de error en caso de excepción
            console.error('Error during login process:', error);
            Swal.fire({
                title: 'Error',
                text: 'Ocurrió un problema inesperado. Por favor, intente nuevamente.',
                icon: 'error',
                iconColor: 'red',
                confirmButtonText: 'Aceptar'
            });
        } 
        }
    )};
