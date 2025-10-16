const passwordInput = document.getElementById('password');
const strengthText = document.getElementById('strength');

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    let strength = 'Weak';
    
    if (password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password) && /[@$!%*?&]/.test(password)) {
        strength = 'Strong';
        strengthText.style.color = 'green';
    } else if (password.length >= 6) {
        strength = 'Medium';
        strengthText.style.color = 'orange';
    } else {
        strengthText.style.color = 'red';
    }
    
    strengthText.textContent = strength;
});