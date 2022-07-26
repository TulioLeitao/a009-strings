const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

console.log (minhaString.length);

console.log (minhaString.trim());

const minhaStringAparada = minhaString.trim()
console.log (minhaStringAparada.length);
/*Aqui criei uma nova variavel para armazenar a minhaString depois do trim,
sem essa variavel nova, o length retorna 58 carcateres antes E depois do trim.*/

console.log (minhaStringAparada.replace ("________", "sticioso"));

