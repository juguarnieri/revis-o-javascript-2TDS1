//Talentos musicais

//Contexto: Uma escola de música está realizando audições para novos alunos Para organizar as inscrições, você precisa criar um programa que verifica se a pessoa possui a idade mínima para realizar sua matrícula.
let idadeMinima = 7;
let idadeAluno = 10;

let primeiroAno = 7;
let segundoAno = 8;
let terceiroAno = 9;
let quartoAno = 10;
let quintoAno =11;

if (idadeAluno >= idadeMinima && idadeAluno == primeiroAno) {
    console.log("Matrícula realizada com sucesso! Voce está no Primeiro Ano!");
}else if( idadeAluno == segundoAno) {
    console.log("Matrícula Realizada com sucesso! Voce está no Segundo Ano!");
}else if( idadeAluno == terceiroAno) {
    console.log("Matrícula Realizada com sucesso! Voce está no Terceiro Ano!");
}else if( idadeAluno == quartoAno) {
    console.log("Matrícula Realizada com sucesso! Voce está no Quarto Ano!");
}else if(idadeAluno == quintoAno) {
    console.log("Matrícula Realizada com sucesso! Voce está no Quinto Ano!");
}else if( idadeAluno < idadeMinima) {
    console.log("Desculpe, você ainda não pode se matricular nesta escola!");
}
// caso apenas o primeiro tópico, colocar else.