//Menu-mobile
const menuToggle =document.querySelector('.menu-toggle')
const menu = document.querySelector('.menu ul')

menuToggle.addEventListener('click', (e)=> {
    menu.classList.toggle('active')
    e.stopPropagation();
})
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
        menu.classList.remove('active');
    }
});

//NavBar Scroll Efect
window.addEventListener('scroll', ()=> {
    let header = document.querySelector('.header-container')
    header.classList.toggle('sticky', window.scrollY > 0)
})

//Calculadora IMC
const btn = document.querySelector('#btn')

btn.addEventListener('click', ()=>{
    resetstyle ()
    const imc = calcularImc()
    classification(imc)
})
function calcularImc() {
    const height = Number( document.querySelector('#height').value)/100;
    const weight = Number(document.querySelector('#weight').value);
    const soma = (weight / (height * height)).toFixed(2)

    if(height && weight){
        return soma
    } else {
        return null;
    }
    
}
function classification(imc) {
    let lowWeight = document.querySelector('#result-1')
    let idealWeight = document.querySelector('#result-2')
    let overWeight = document.querySelector('#result-3')
    let obesity1 = document.querySelector('#result-4')
    let obesity2 = document.querySelector('#result-5')
    const resultImc = document.querySelector('#result-imc')

    if (imc !== null) {
        if(imc < 18.5){
            lowWeight.style.background = 'rgba(2, 158, 59, 0.192)'
        } else if (imc >= 18.5 && imc < 24.9) {
            idealWeight.style.background = 'rgba(2, 158, 59, 0.192)'
        } else if (imc >= 25 && imc < 29.9) {
            overWeight.style.background = 'rgba(2, 158, 59, 0.192)'
        } else if (imc >= 30 && imc < 39.9) {
            obesity1.style.background = 'rgba(2, 158, 59, 0.192)'
        } else if (imc >=40) {
            obesity2.style.background = 'rgba(2, 158, 59, 0.192)'
        }
        resultImc.innerHTML = imc
        resultImc.scrollIntoView({behavior: 'smooth'})
        resultImc.style.background = 'rgba(2, 158, 59, 0.192)'
        
    }

}

function resetstyle () {
    const elements = document.querySelectorAll('.result-calc')

    elements.forEach(element => {
        element.style.background = '';
        element.style.color = '';
    })
}

//Validação de Input
const inputHeight = document.querySelector('#height')
const inputWeight = document.querySelector('#weight')

inputHeight.addEventListener('input', ()=> {
    inputHeight.value = inputHeight.value.replace(/\D/g, '');
})
inputWeight.addEventListener('input', ()=> {
    inputWeight.value = inputWeight.value.replace(/\D/g, '');
})