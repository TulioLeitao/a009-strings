const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`
const frase2 = frase.replace ("verde", "rosa");
const frase3 = frase2.replace ("azul", "laranja");


console.log (frase3);
console.log (frase3.includes("verde"));
console.log (frase3.includes("laranja"));

/* O extra foi punk, tentei um monte de coisa e nada deu certo
tbm pesquisei na internet e apareceu um monte de couisa que eu não faço ideia do que seja
eu poderia usar replaceAll e trocar a frase aaaaa por AAAAA
mas acho que não é isso que vocês estão querendo XD*/
