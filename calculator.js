function addAnotherNumber(){
    if(num.length <= 4){
        let opContinue = window.confirm("Deseja adicionar mais um número?");
        if(opContinue == true){addNumber();}
    }
}

function addNumber(){
    num[qtdNum] = window.prompt("Digite um número");
    qtdNum++;
    addAnotherNumber();
}

function tranformaInt(nums = [], cat){
    let numstr = [];
    cat = parseInt(cat);
    numstr = nums;
    for(let i=0; i<nums.length; i++){
        numstr[i] = parseInt(numstr[i], 10);
        if(!isNaN(numstr[i])){
            numInt[i] = parseInt(nums[i]);
        }else{
            if(cat == 1 || cat == 2){numInt[i] = 0;}
            else{numInt[i] = 1;}
        }
    }
}

function transformaIndefined(cat, n3, n4, n5){
    cat = parseInt(cat);
    if(cat == 1 || cat == 2){
       if(n3 == undefined){num[2] = 0;}
       if(n4 == undefined){num[3] = 0;}
       if(n5 == undefined){num[4] = 0;}
    }else{
       if(n3 == undefined){num[2] = 1;}
       if(n4 == undefined){num[3] = 1;}
       if(n5 == undefined){num[4] = 1;}
    }
}

function somar(n1, n2, n3, n4, n5){
    window.alert("O resultado é: " + ((n1) + (n2) + (n3) + (n4) + (n5)));
}
function subtrair(n1, n2, n3, n4, n5){
     window.alert("O resultado é: " + ((n1) - (n2) - (n3) - (n4) - (n5)));
}
function dividir(n1, n2){
     window.alert("O resultado é: " + (n1 / n2));
}
function multiplicar(n1, n2, n3, n4, n5){
     window.alert("O resultado é: " + ((n1) * (n2) * (n3) * (n4) * (n5)));
}
function elevarPot(n1, n2){
     window.alert("O resultado é: " + (Math.pow(n1, n2)));
}
function raizQuadrada(n1){
     window.alert("O resultado é: " + (Math.sqrt(n1)));
}

let num = [], numInt = [];
let qtdNum = (num.length) - 1;
let categoria = parseInt(window.prompt("Que tipo de operação você deseja fazer?\n\n1. Somar\n2. Subtrair\n3. Dividir\n4. Multiplicar\n5. Potenciação\n6. Raiz Quadrada"));

if(categoria == 1 || categoria == 2 || categoria == 4){
    num[0] = window.prompt("Digite o primeiro número");
    num[1] = window.prompt("Digite o segundo número");
    qtdNum = 2;
    addAnotherNumber();
    transformaIndefined(categoria, num[2], num[3], num[4]);
    tranformaInt(num, categoria);

    if(categoria == 1){somar(numInt[0], numInt[1], numInt[2], numInt[3], numInt[4]);}
    if(categoria == 2){subtrair(numInt[0], numInt[1], numInt[2], numInt[3], numInt[4]);}
    if(categoria == 4){multiplicar(numInt[0], numInt[1], numInt[2], numInt[3], numInt[4]);}   
}
else if(categoria == 3 || categoria == 5){
    num[0] = window.prompt("Digite o primeiro número");
    num[1] = window.prompt("Digite o segundo número");
    tranformaInt(num);

    if(categoria == 3){dividir(numInt[0], numInt[1]);}
    else{elevarPot(numInt[0], numInt[1]);}
}
else{
    num[0] = window.prompt("Digite um número");
    tranformaInt(num);
    raizQuadrada(numInt[0]);
}
