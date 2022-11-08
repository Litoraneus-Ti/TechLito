let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false;

let msgError = document.querySelector('#erro');
let msgSuccess = document.querySelector('#acerto');

nome.addEventListener('keyup', () => {
    if (nome.value.length <= 4) {
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Minimo de 5 caracteres'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome Valido!'
        nome.setAttribute('style', 'border-color: green')
        validNome = true
    }
})

today = new Date();
h = today.getHours();
m = today.getMinutes();
s = today.getSeconds();
const myDate = new Date().toLocaleDateString();
console.log(myDate);
const myInput = document.querySelector("#dataToday");
myInput.value = myDate + "  " + h + ":" + m;


let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false;



email.addEventListener('keyup', () => {

    if (document.forms[0].email.value == ""
        || document.forms[0].email.value.indexOf('@') == -1
        || document.forms[0].email.value.indexOf('.') == -1 || document.forms[0].email.value.length == 0) {

        labelEmail.setAttribute('style', 'color: red')
        labelEmail.innerHTML = 'Email Invalido '
        email.setAttribute('style', 'border-color: red')


        return false;
    }
    else {
        labelEmail.setAttribute('style', 'color: green')
        labelEmail.innerHTML = 'E-MAIL ACEITO..'
        email.setAttribute('style', 'border-color: green')
        return true;
    }

}
)


//Substituição de email

let Formulario = document.querySelector('#form-1');

let FormularioAtualizado = Formulario.replace("litoraneus", email.value);






function receber() {



    if (validNome == true) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                nomeCad: nome.value
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))
        // let imgBack = document.getElementById('imagemreserva');
        // imgBack.setAttribute('style', 'diplay:block');
        let Main = document.querySelector('.Main');
        Main.setAttribute('style', 'display:none')
        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>AGUARDE...<BR>CADASTRANDO SUA ORDEM DE SERVIÇO....</strong>'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''
        // alert(`${nome.value} você receberá uma mensagem no email ${email.value}, caso não chegue repita o procedimento de cadastro, obrigado!`)
        // setTimeout(() => {
        //     window.location.href = ''
        // }, 5000)


    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Preencha os campos corretamente';
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none')
    }




}




