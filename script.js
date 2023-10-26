document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const message = document.getElementById('message');
    const twoFactor = document.getElementById('twoFactor');
    const verifyToken = document.getElementById('verifyToken');
    const capsLockMessage = document.getElementById('capsLockMessage');
    const passwordToggle = document.getElementById('passwordToggle');
    const passwordInput = document.getElementById('password');
    const successIcon = document.getElementById('successIcon');
  
    const users = {
      'Klopez': 'Klopez123',
      'Lmenendez': 'Lmenendez123',
      'Aespinoza': 'Aespinoza123'
    };
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Validación personalizada para campos vacíos
      if (!username) {
        document.getElementById('username').setCustomValidity('Por favor, llene este campo');
      } else {
        document.getElementById('username').setCustomValidity('');
      }
  
      if (!password) {
        document.getElementById('password').setCustomValidity('Por favor, llene este campo');
      } else {
        document.getElementById('password').setCustomValidity('');
      }
  
      if (users[username] && users[username] === password) {
        successIcon.classList.remove('hidden');
        twoFactor.classList.remove('hidden');
        message.textContent = ''; // Remover el mensaje
      } else {
        message.textContent = 'Usuario o contraseña inválidos';
        message.style.color = 'red';
      }
    });
  
    verifyToken.addEventListener('click', function() {
      const token = document.getElementById('token').value;
      if (token === '123456') {
        message.textContent = ''; // Remover el mensaje
        message.style.color = 'green';
        window.location.href = 'home.html';
      } else {
        message.textContent = 'Token inválido';
        message.style.color = 'red';
      }
    });
  
    passwordInput.addEventListener('keydown', function(event) {
      if (event.getModifierState('CapsLock')) {
        capsLockMessage.classList.remove('hidden');
      } else {
        capsLockMessage.classList.add('hidden');
      }
    });
  
    passwordInput.addEventListener('blur', function() {
      capsLockMessage.classList.add('hidden');
    });
  
    // Funcionalidad para mostrar/ocultar la contraseña
    passwordToggle.addEventListener('click', function() {
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordToggle.textContent = '🙈';
      } else {
        passwordInput.type = 'password';
        passwordToggle.textContent = '👁️';
      }
    });
  });
  