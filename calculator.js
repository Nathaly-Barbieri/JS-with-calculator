let num = [], numInt = [];

function addAnotherNumber(){
    if(num.length <= 4){
    let opContinue = window.prompt("Deseja adicionar mais um número?: ");
    opContinue = opContinue.toUpperCase();
        if(opContinue == "SIM" || opContinue ==  "S" || opContinue ==  "SS" ){
            addNumber();
        }
    }
}
function addNumber(){
    num[qtdNum] = window.prompt("Digite um número: ");
    qtdNum++;
    addAnotherNumber();
}

function tranformaInt(){
    for(let i=0; i<num.length; i++){
       numInt[i] = parseInt(num[i]);
    }
}

function transformaIndefined(cat){
    cat = parseInt(cat);
    console.log(cat);
    if(cat == 1 || cat == 2){
        if(num[2] = undefined){
            num[2] = 0;
        }if(num[3] = undefined){
            num[3] = 0;
        }if(num[4] = undefined){
            num[4] = 0;
        }
    }else{
        if(num[2] = undefined){
            num[2] = 1;
        }if(num[3] = undefined){
            num[3] = 1;
        }if(num[4] = undefined){
            num[4] = 1;
        }
    }
}

function somar(n1, n2, n3, n4, n5){
    console.log((n1) + (n2) + (n3) + (n4) + (n5));
}
function subtrair(n1, n2, n3, n4, n5){
    console.log(n1 - n2 - n3 - n4 - n5);
}
function dividir(n1, n2){
    console.log(n1 / n2);
}
function multiplicar(n1, n2, n3, n4, n5){
    console.log((n1) * (n2) * (n3) * (n4) * (n5));
}
function elevarPot(n1, n2){
    console.log(Math.pow(n1, n2));
}
function raizQuadrada(n1){
    console.log(Math.sqrt(n1));
}

let qtdNum = (num.length) - 1;

let categoria = parseInt(window.prompt("Que tipo de operação você deseja fazer?\n\n1. Somar\n2. Subtrair\n3. Dividir\n4. Multiplicar\n5. Elevar ao quadrado\n6. Raiz Quadrada"));

if(categoria == 1 || categoria == 2 || categoria == 4){
    num[0] = window.prompt("Digite o primeiro número: ");
    num[1] = window.prompt("Digite o segundo número: ");
    qtdNum = 2;
    addAnotherNumber();
    transformaIndefined(categoria);
    tranformaInt();
    console.log(numInt);

    if(categoria == 1){
        console.log(numInt[0], numInt[1], numInt[2], numInt[3], numInt[4]);
        somar(numInt[0], numInt[1], numInt[2], numInt[3], numInt[4]);}
    if(categoria == 2){subtrair(numInt[0], numInt[1], numInt[2], numInt[3], numInt[4]);}
    if(categoria == 4){multiplicar(numInt[0], numInt[1], numInt[2], numInt[3], numInt[4]);}   

}

else if(categoria == 3 || categoria == 5){
    num[0] = window.prompt("Digite o primeiro número: ");
    num[1] = window.prompt("Digite o segundo número: ");
    tranformaInt();
    if(categoria == 3){
        dividir(numInt[0], numInt[1]);
    }else{
        elevarPot(numInt[0], numInt[1]);
    }
}
else{
    num[0] = window.prompt("Digite um número: ");
    tranformaInt();
    raizQuadrada(numInt[0]);
}




