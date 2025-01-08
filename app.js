alert("vamos jogar um jogo");
let numeroSecreto = parseInt(Math.random() * 10) + 1;
let chute = prompt("Digite um número de 1 a 10");
let tentativas = 1;

while(chute != numeroSecreto){
    if(chute == numeroSecreto){
        break;
    }
    else{
        if(chute > numeroSecreto){
            chute = prompt("Digite um número menor: ");
        }
        else{
            chute = prompt("Digite um número maior: ");
        }
    }
    tentativas++;
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

alert(`Você acertou em ${tentativas} ${palavraTentativa}!! O número secreto é ${numeroSecreto}!!`)