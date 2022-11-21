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


// RELOGIO CRONOMETRO REVERSO
// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);
//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;
//         display.textContent = minutes + ":" + seconds;
//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }
// window.onload = function () {
//     var duration = 2; // Converter para segundos
//         display = document.querySelector('#timer'); // selecionando o timer
//     startTimer(duration, display); // iniciando o timer
// };







function Ok_NexT() {
    if (confirm(`Nome: ${nome.value}
    Email: ${email.value}
    Setor: ${Setor.value}
    Chamado solicitado: ${RelatoUser.value}

    Você Confirmar as informaçoes acima e deseja receber no seu Email cadastrado?
    `) == true) {
        alert('OK deu certo');
        setTimeout(() => { console.log("this is the first message") }, 1000);
    }
    else {
        alert('DEU ERRADO ELE CANCELOU!')

    }

}

// let form = document.querySelector(".btn_Sub_2");
// form.click();
// // let form1 = document.querySelector(".btn_Sub_form1")
// // form1.submit();







function receber() {




    if (validNome == true || validEmail == true) {
        // let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        // listaUser.push(
        //     {
        //         nomeCad: nome.value
        //     }
        // )

        // localStorage.setItem('listaUser', JSON.stringify(listaUser))

        // let Main = document.querySelector('.Main');
        // Main.setAttribute('style', 'display:none')
        // msgSuccess.setAttribute('style', 'display: block')
        // msgSuccess.innerHTML = '<strong>AGUARDE...<BR>CADASTRANDO SUA ORDEM DE SERVIÇO....</strong>'
        // msgError.setAttribute('style', 'display: none')
        // msgError.innerHTML = '';




        //         for (i = 0; i < ele.length; i++) {
        //             if (ele[i].checked)
        //                 textarea_2.innerHTML = `Recebemos a sua solicitação, em breve retornaremos o pedido
        //                  Nome: ${nome.value}
        //                  Email: ${email.value}
        //                  Setor: ${Setor.value}
        //                  Nivel de Urgência: ${ele[i].value}
        //                  Chamado solicitado: ${textarea.value}
        //    `
        //         }



        // for (i = 0; i < ele.length; i++) {
        //     if (ele[i].checked) {

        //         console.log(ele[i].value);

        //         Urgencia = ele;

        //     }

        // }






        localStorage.setItem('nome', document.querySelector('#nome').value)
        localStorage.setItem('email', document.querySelector('#email').value)
        localStorage.setItem('Setor', document.querySelector('#Setor').value)
        localStorage.setItem('Urgencia', document.querySelector('#Urgencia').value)
        localStorage.setItem('RelatoUser', document.querySelector('#RelatoUser').value)




    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Preencha os campos corretamente';
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none')
    }








}








