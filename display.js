class Display {
    constructor(displayValorAtual, displayValorAnterior) {
        this.displayValorAnterior = displayValorAnterior
        this.displayValorAtual = displayValorAtual
        this.calculadora = new Calculadora()
        this.valorAtual = '';
        this.valorAnterior = '';
    }
    agregarNumero(numero) {
        this.valorAtual = numero;
        this.imprimiValor()
    }

    imprimiValor() {
        this.displayValorAtual.textContent = this.valorAtual;
        this.displayValorAnterior.textContent = this.valorAnterior;

    }

}    

