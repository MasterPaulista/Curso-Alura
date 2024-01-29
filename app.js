let titulo = document.querySelector ('h1');
titulo.innerHTML = "Hora do Desafio";

function verificarClique() {
    console.log ("O botão foi clicado");
}

function mostrarAlerta() {
    alert ("Eu amo JS")
}

function exibirPrompt() {
    let nomedaCidade = prompt ("Digite um nome de uma cidade do Brasil");
    alert (`Estive em ${nomedaCidade} e lembrei de você!`);
}

function exibirSoma() {
    let primeiroNumero = parseInt (prompt ("Digite um número"));
    let segundoNumero = parseInt (prompt ("Digite um número"));
    let resultado = primeiroNumero + segundoNumero;
    alert (`${primeiroNumero} + ${segundoNumero} = ${resultado}`);

}