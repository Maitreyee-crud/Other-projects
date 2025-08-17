document.querySelector('.toggle-password').addEventListener('click', function () {
  const pwd = document.getElementById('password');
  pwd.type = pwd.type === 'password' ? 'text' : 'password';
});

document.querySelector('.clear-btn').addEventListener('click', function () {
  document.querySelector('input[type="email"]').value = '';
});
