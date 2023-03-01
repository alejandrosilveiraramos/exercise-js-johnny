console.log(typeof nome);

let numero1 = '1';
let numero = 1;

parseInt(numero1);


String(numero);

//Arrow function 
function name () {}

const somar = () => {}


if( nome1.lenght > 2){
    console.log('oi')
}

//ternario
nome1.lenght > 5 ? console.log('maior que') : console.log();

let frutas = ['banana', 'abacate', 'maca'];

for (let i = 0; i > frutas.lenght; i++){
    frutas[i]
}

for( const indice in frutas){
    console.log(frutas[indice]);
}

for( const fruta of frutas){
    console.log(frutas[fruta]);
}

const empresa = '  pulsati  ';

let primeiraLetra = empresa.charAt(0);

let posicaoDoI = empresa.indexOf('ti');

//remove apenas dos cantos
let empresaLimpa = empresa.trim();

//substring

let escola = 'machado de assis'

let primeiroNome = escola.substring(0,4);
let Ultimo = escola.substring(5)

//Split separa apartir de algo definido
let linha = 'ale;ale@gmail.com;997137650';
let dados = linha.split(';');

console.log(dados[0]);
console.log(dados[1]);
console.log(dados[2]);

//Join sempre que juntar coloca uma separacao defiinida
dados[0] = 'jaum';
let linhaAlterada = dados.join(';');

//Startwith ends with

let escola2 = 'Apex';

escola2.startsWith('A');
escola2.endsWith('ex');

escola2.toUpperCase(escola2);
escola2.toLowerCase(escola2);

//replace

let nome3 = 'alejandro';

nome3.replace('a', 'x'); //xlejandro sub so o primeiro que encontrar, teria que fazer um loop

let nomes = [];

nomes.push('Alejandro');
nomes.push('Carlos');
nomes.push('Paulo');
nomes.splice(0, 1);

nomes.pop(); // investigar


let nomesOrdenandos = nomes.sort().reverse() // sort ordem alfabetica// reverse é reverse msm // sort funciona bem apra letras... para numeros tem que seguir a tabela ASC

let numeros = [10, 1, 3, 1, 90, 32]

let numerosOrdnados = numeros.sort((a, b) => {
    return a - b;
});

numeros2 = [1,2,3,4,5,6,7]

let numerosMultiplicados = numeros2.map((numero) => {
    return numero * 2;
});

let numerosPares = numeros2.filter((numero) => {
    return numero % 2 === 0; 
});

let existeAlgumPar = numero2.some((numero) => {
    return numero % 2 === 0;
})

//Objetos

let pessoa = {
    nome: 'alejandr',
    idade: 20,
    peso: 90.5
}

pessoa.idade = 21


//Dom, document objetct manipulation // Toggle (Adciona) // Scroll js, joga o scroll para 0 e o site sobe...

//Pegar elemento na tela // cada elemente so pode ter 1 id Unico // manipular TUDO a partir desse element// quadrado funcao, ret propriedade

let title = document.getElementById('title')


title.color = 'red' //todas as propriedades do css posso alterar aqui
//resize usando tamanho da tela para mudar o estilo.


title.classList.toggle('azul') //toggle verifica se a class existe nesse caso

let lista = document.getElementsByClassName('ListaNomes');

let titulo2 = document.querySelector('#titulo');
let listaa = document.queryAll('.listNomes');
let lista2 = document.querySelector('li');


//quando clicar no botao ele vai pegar esse id e pegar o valor do input
//Dom em ordem alfabeti, se sabe a letra sabe maios ou menos
const funcaoClicar = () => {
    let input = document.querySelector('#txtNome');
    let title = document.querySelector('#title')

    title.classList.toggle('blue');
    console.log(input.value);
}

const pressioanr = (event) => {
    console.log(event.event.target.value)
    let resultadoP = document.querySelector('#resultado');

    resultadoP.innerHTML = event.target.value;

}


const funcaoCep = async () => {
    let input = document.querySelector('#txtNome')

    let respostaPura =  await  fetch(`linkExemplo/${input.value}`)
}
