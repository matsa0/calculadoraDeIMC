const calcular = document.getElementById('button');
            
/*Somente quando eu clicar no botão, que irei precisar do nome, altura, peso e o resultado. 
Portanto, elas podem entrar dentro da função do botão*/

function imc () {  
    const name = document.getElementById('nome').value;
    const height = document.getElementById('altura').value;
    const weight = document.getElementById('peso').value;
    const result = document.getElementById('resultado');

    //validação se os campos estão preenchidos
    if(name == '') {//Se o valor de 'nome' for igual vazio, escreva:
        alert ('Preencha o espaço "nome"')
    };

    if(weight == '') {
        alert ('Preencha o espaço "peso"')
    };

    if(height == '') {
        alert ('Preencha o espaço "altura"')
    };

    const valorIMC = (weight / (height * height)).toFixed(2); 

    let classificacao = "";

    if(valorIMC < 18.5) {
        classificacao = "abaixo do peso";
    }
        else if(valorIMC < 25) {  //Entre 18 e 25
            classificacao = "com peso ideal";
        }
        else if(valorIMC < 30) {  //Entre 25 e 30
            classificacao = "com sobrepeso";
        }
        else if(valorIMC < 35) {  //Entre 30 e 35
            classificacao = "com obesidade grau I";
        }
        else if(valorIMC < 40) { 
            classificacao = "com obesidade grau II";
        }
        else if (valorIMC < 41) {
            classificacao = "com obesidade grau III/mórbida";
        }

    result.textContent = `${name}, seu IMC é ${valorIMC} e você está ${classificacao}.`;
};

button.addEventListener('click', imc);

