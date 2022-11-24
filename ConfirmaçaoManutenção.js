
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





var Urgencia = document.querySelector('#Urgencia')



document.querySelector("#nome").value = localStorage.getItem("nome");
document.querySelector('#email').value = localStorage.getItem("email");
document.querySelector('#Setor').value = localStorage.getItem("Setor");
document.querySelector('#Urgencia').value = localStorage.getItem("Urgencia");
document.querySelector('#RelatoUser').value = localStorage.getItem("RelatoUser");



let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false;

let msgError = document.querySelector('#erro');
let msgSuccess = document.querySelector('#acerto');

var textarea_2 = document.querySelector('#textarea_2');

var Setor = document.getElementById('Setor');
// let nivel_Urgencia = document.querySelector('#nivel_Urgencia');
var textarea = document.querySelector('#textarea');
//colocar _ abaixo no Grau_de_Urgência para funcionar lembrar de trocar!
// var ele = document.getElementsByName('Grau de Urgência');
var Urgencia = document.querySelector('#Urgencia')



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







//         var ConfirmaCao = confirm(`Se as Informações Citadas estão corretas pressione Ok para direcionarmos o Chamado para o email cadastrado, se não cancele e modifique a opção desejada? \n
// Nome:  ${nome.value}
// Email:  ${email.value}
// Setor:  ${Setor.value}
// Urgencia :  ${nivel_Urgencia.value}
// Descrição do Chamado:  ${RelatoUser.value}`)


var textarea_2 = document.querySelector('#textarea_2');

var Setor = document.getElementById('Setor');
// let nivel_Urgencia = document.querySelector('#nivel_Urgencia');
var textarea = document.querySelector('#textarea');
//colocar _ abaixo no Grau_de_Urgência para funcionar lembrar de trocar!
var ele = document.getElementsByName('Urgência');




// Inserção de email

var New_Mailer = document.querySelector('.New_Mailer');
New_Mailer.innerHTML = ` <input type="hidden" name="_cc" value="${email.value}" class="EmailCopia"></input> `


//INFORMATIVO DE PRAZO 

var Prazo = document.querySelector('.Prazo');
Prazo.innerHTML = `<input type="text" name="PRAZOS DE ATENDIMENTO" value="Muito Urgente: 2hrs, Urgência Moderada: 24 hrs e Pouca Urgência: 48 hrs."/>`; 



// let email2 = document.querySelector('.EmailCopia');
// email2.replace("assueromota@hotmail.com", email.value);
// console.log(email2);



// function TrocarEmail() {
//     let email2 = document.querySelector('.EmailCopia');
//     email2.replace("assueromota@hotmail.com", email.value);
//     console.log(email2)
// }


var ConfirmaCao = confirm(`Confirmar as Informações abaixo \n
                Nome:  ${nome.value}
                Email:  ${email.value}
                Setor:  ${Setor.value}
                Urgencia: ${Urgencia.value}
                Descrição do Chamado:  ${RelatoUser.value}`
)
if (ConfirmaCao == true) {


    let form = document.querySelector(".enviarForm-1");
    form.click();




    let Main = document.querySelector('.Main');
    Main.setAttribute('style', 'display:none');
    let msgSuccess = document.querySelector('#msgSuccess')
    msgSuccess.setAttribute('style', 'display: block')

    msgSuccess.innerHTML = '<strong>ENVIANDO..</strong>'

    setTimeout(() => {
        msgSuccess.innerHTML = '<strong>AGUARDE.</strong>'
    }, "100")


    setTimeout(() => {
        msgSuccess.innerHTML = '<strong>AGUARDE..</strong>'
    }, "300")


    setTimeout(() => {
        msgSuccess.innerHTML = '<strong>AGUARDE...</strong>'
    }, "600")

    setTimeout(() => {
        msgSuccess.innerHTML = '<strong>Enviando para o Email....</strong>'
    }, "770")

    setTimeout(() => {
        msgSuccess.innerHTML = '<strong>Enviando para o Email.......</strong>'
    }, "900")


    // msgSuccess.innerHTML = '<strong>AGUARDE...ENVIANDO......</strong>'
    msgError = document.querySelector('#msgError')
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = '';






}
else {
    alert('Depois das alteraçoes clique em Enviar')
};