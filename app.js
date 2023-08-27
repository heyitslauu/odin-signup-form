const basePassword = document.getElementById('basePassword');
const confirmPassword = document.getElementById('confirmPassword');
const errorMsg = document.querySelectorAll('.error-msg')
const terms = document.querySelectorAll('.accent-text');
const termsAndPolicy = document.getElementById('policy');

function checkPassword() {
    if(basePassword.value !== confirmPassword.value) {
        errorMsg.forEach((div) => {
            div.textContent = '* Password dont match!'
        })
    }else {
        errorMsg.forEach((div)=> {
            div.textContent = ''
        })
    }
}

basePassword.addEventListener('keyup', checkPassword)
confirmPassword.addEventListener('keyup', checkPassword)
terms.forEach((element) => {
    element.addEventListener('click', () => {
        termsAndPolicy.classList.toggle('show');
    })
})


termsAndPolicy.addEventListener('click', () => {
    termsAndPolicy.classList.toggle('show');
})