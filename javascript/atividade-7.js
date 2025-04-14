// uma lista de modelos de carros

const modelos = ["Fusca", "Civic", "Palio", "Corolla"];
console.log(modelos);

//adicionar um modelo no final da lista

modelos.push("Mercedes");
console.log(modelos);

//contagem
console.log(modelos.length); //5

modelos.push("320i");

//remover o último modelo

modelos.pop(); //320i

console.log(modelos.length);

//remover um modelo específico
modelos.splice(1, 1) //remove o modelo na posição 1

console.log(modelos);


