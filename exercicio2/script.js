const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

const tamanho=  minhaString.length;

const aparada= minhaString.trim();
const tamanhoAparado= aparada.length;

/*Aqui criei uma nova variavel para armazenar a minhaString depois do trim,
sem essa variavel nova, o length retorna 58 carcateres antes E depois do trim.*/

console.log (`a quantidade de caracteres antes de fazer o "trim"é de ${tamanho},
a quantida de caracteres apos o "trim" é de ${tamanhoAparado}`)


console.log (aparada.replace ("________", "sticioso"));

