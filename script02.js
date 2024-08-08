let ingressosComprados = 54; 

let porcoesGratis = Math.floor(ingressosComprados / 3);

console.log("Você ganhará " + porcoesGratis + " porções de batata frita grátis na compra de " + ingressosComprados + " ingressos comprados.");

// LÓGICA DO PROFESSOR
let quantidadeIngressos = 9;
let batatasPromoçao = 0;
let nome = "Júlia"

for (let i = 1; i <= quantidadeIngressos; i++){
    if (i % 3 === 0) {
    batatasPromoçao++;
}
}
console.log("Olá " + nome +", voce ganhou " + batatasPromoçao + " batatas promoção!.")