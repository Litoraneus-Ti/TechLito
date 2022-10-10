let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false;


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


let Componente = document.querySelector('#Componente')
let labelComponente = document.querySelector('#labelComponente')
let validComponente = false;

Componente.addEventListener('keyup', () => {
    if (Componente.value.length <= 7) {
        labelComponente.setAttribute('style', 'color: red')
        labelComponente.innerHTML = 'Componete invalido! Exemplo: TRAFM060'
        Componente.setAttribute('style', 'border-color: red')
        validComponente = false
    }
      
        
        
        else {
            labelComponente.setAttribute('style', 'color: green')
            labelComponente.innerHTML = 'Componente Valido!'
            Componente.setAttribute('style', 'border-color: green')
            validComponente = true
        }
    })

function soliCitar() {


    
}


