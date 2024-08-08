let armas = ["Canhão de Plasma", "Laser",  "Misseis", "Granada", "Gelo", "Faca",];

let ataques = [];

ataques.push ("Luna");
ataques.push(armas[1]);
ataques.push(armas[2]);
ataques.push(armas[3]);
ataques.push(armas[5]);
ataques.push(armas[0]);

for (let i = 0; i < ataques.length; i++) {
    if (i == 0) {
        console.log(`Nome do Robo: ${ataques[i]}`);
    } else {
        console.log(`Ataque ${i}: ${ataques[i]}`);
    }
}
