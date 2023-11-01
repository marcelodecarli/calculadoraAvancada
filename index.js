const displayValorAtual = document.getElementById('valorAtual')
const displayValorAnterior = document.getElementById('valorAnterior')
const botoesNumeros = document.querySelectorAll('.numero')
const botesOperadores = document.querySelectorAll('.operadores')

const calculadora = new Calculadora();
const display = new Display(displayValorAtual, displayValorAnterior)

botoesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML))
})

