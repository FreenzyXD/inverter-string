// vou criar uma função para inverter usando uma estrutura de repetição para começar a contar o comprimento da frase e depois fazer a inversão da mesma
function inverterString(string) {
    let inversao = "";
    for (let i = 0; i < string.length; i++) {
        inversao = string[i] + inversao;
    }
    return inversao;
}

// criei com um prompt para ser mais dinamico
const stringTeste =prompt( "Testar inversão");
console.log("String original:", stringTeste);
console.log("String invertida:", inverterString(stringTeste));
alert( inverterString(stringTeste));