const user = {
    nome: "Bruno",
    altura: 1.70,
    peso: 120
};

//criar uma função que receba o objeto user
//e calcule o IMC
// IMC = peso / (altura * altura)

function calcularIMC(user){
    const imc = user.peso / (user.altura * user.altura);
    console.log(`O seu IMC é de ${imc.toFixed(2)}.`);

    if(imc < 16){
        return console.log("Magreza grave");
    }; 
    
    if(imc >= 16 && imc < 17){
        return console.log("Magreza moderada");
    }; 
    
    if(imc >= 17 && imc < 18.5){
        return console.log("Magreza leve");
    };
    
    if(imc >= 18.5 && imc < 25){
        return console.log("Peso ideal");
    }; 
    
    if(imc >= 25 && imc < 30){
        return console.log("Sobrepeso");
    }; 
    
    if(imc >= 30 && imc < 35){
        return console.log("Obesidade grau I");
    }; 
    
    if(imc >= 35 && imc < 40){
        return console.log("Obesidade grau II");
    }; 
    
    if(imc >= 40){
        return console.log("Obesidade mórbida");
    };
};

calcularIMC(user);