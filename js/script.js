var email = document.querySelector('#email')
var password = document.querySelector('#password')
var login = document.querySelector('#login')
var error = document.querySelector('.error')
var btnTema = document.querySelector('#btnTema')
var temaClaro = document.querySelectorAll('.tema-claro')


function entrar() {
    
    if (email.value == "SesiSenai" & password.value == '1234') {
        
        window.open("https://www.youtube.com/")

    } else {
        
        error.classList.remove('errada')

    }
}

btnTema.addEventListener('checked', () => {

    for (let i = 0; i < temaClaro.length; i++) {
        ;
        
    }
})



