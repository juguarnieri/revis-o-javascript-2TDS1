let quantidadePalmas = 6;  
let aplausos = "";// ACUMULAR O EMOJI DE APLAUSOS

for (let i = 1; i <= quantidadePalmas; i++) {
    aplausos += "👏";  
    if (i % 5 === 0) {  
        aplausos += "🎉";
    }
}

console.log("Quantidade de aplausos: " + aplausos);
