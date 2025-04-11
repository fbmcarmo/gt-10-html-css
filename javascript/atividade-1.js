const nome = "Bruno"; //texto - string
const idade = 36; //numero - number
const altura = 1.70; //numero - number
const maiorDeIdade = true; //booleano - boolean

console.log("Olá seu nome é " + nome); //concatenação

console.log("Olá seu nome é " + nome + ", você tem " + idade + " anos e sua altura é " + altura.toFixed(2) + " metros.");

console.log("Olá você é maior de idade? " + maiorDeIdade);

//template string ou string dinamica
const frase = `Olá seu nome é ${nome} e você tem ${idade} anos`;
console.log(frase);

console.log("1" + 10);
console.log(1 + 10);