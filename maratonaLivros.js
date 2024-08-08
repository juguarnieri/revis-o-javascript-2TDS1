let metaLivros = 10;

let livrosLidos = ["O Pequeno Príncipe", "O Grande Desafio", "Iracema", "É Assim que Acaba", "Sherlock Holmes"];

for (let i = 0; i < livrosLidos.length; i++) {
console.log(`Livro ${i}: ${livrosLidos[i]}`);
}if (livrosLidos.length >= metaLivros) {
    console.log("Parabéns! Você atingiu sua meta de leitura!");
}else{
    let faltam = metaLivros - livrosLidos.length
    console.log("Você está progredindo! Faltam " + faltam + " livros para atingir sua meta.");
}