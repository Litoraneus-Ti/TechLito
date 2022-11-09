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
let h = String(today.getHours()).padStart(2, '0');
let m = String(today.getMinutes()).padStart(2, '0');
let s = String(today.getSeconds()).padStart(2, '0');
const myDate = new Date().toLocaleDateString();
console.log(myDate);
const myInput = document.querySelector("#dataToday");
myInput.value = myDate + "  " + h + ":" + m;
console.log(myInput.value);



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

let Formulario = document.getElementById('form-1');



let FormularioAtualizado = Formulario.value = email.value;

let textarea_2 = document.querySelector('#textarea_2');

let Setor = document.getElementById('Setor');
// let nivel_Urgencia = document.querySelector('#nivel_Urgencia');
let textarea = document.querySelector('#textarea');
//colocar _ abaixo no Grau_de_Urgência para funcionar lembrar de trocar!
var ele = document.getElementsByName('Grau de Urgência');

for (i = 0; i < ele.length; i++) {
    if (ele[i].checked)
        textarea_2.innerHTML = `Recebemos a sua solicitação, em breve retornaremos o pedido
Nome: ${nome.value}
Email: ${email.value}
Setor: ${Setor.value}
Nivel de Urgência: ${ele[i].value}
Chamado solicitado: ${textarea_2.value}

   `
}










function receber() {



    if (validNome == true) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                nomeCad: nome.value
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        let Main = document.querySelector('.Main');
        Main.setAttribute('style', 'display:none')
        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>AGUARDE...<BR>CADASTRANDO SUA ORDEM DE SERVIÇO....</strong>'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''
        // alert(`${nome.value} você receberá uma mensagem no email ${email.value}, caso não chegue repita o procedimento de cadastro, obrigado!`)



    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Preencha os campos corretamente';
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none')
    }


    let form_2 = document.querySelector('#form_2').submit();
    let AtivandoForm2 = form_2.submit()






}




