// função receberá dias alugados 
// o valor por dia é 250

function calcularAluguel(dias){
    const valorPorDia = 250;
    
    const aluguel = dias * valorPorDia;

    console.log(aluguel);

};

calcularAluguel(2);
calcularAluguel(5);