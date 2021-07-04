/* A Declaração /IF/, Use a ifinstrução para especificar um bloco de código
JavaScript a ser executado se uma condição for verdadeira.*/

/*firstp*/

if(new Date().getHours() < 20){
  let text = "Bom Dia flor do dia!"
  document.getElementById('firstp').innerHTML = text;
}

/* ----------------------------------------- */

/*sectp*/
const hour = new Date().getHours();
let compri;
if (hour < 7){
  compri = "São antes das 8";
} else {
  compri = "São Depois da 8";
}

document.getElementById('sectp').innerHTML = compri;

/* ----------------------------------------------- */
/*threept*/


   /*Use a switch instrução para selecionar um dos muitos blocos de código a serem executados.

   Switch é a perfeição, você poderá especificar qual bloco será executado em muitas opções o IF é limitado a sim, não e simpossivel.
 */

 let dia;
 switch (new Date().getDay()) {
   case 0:
     dia = "Domingo";
     break;
   case 1:
     dia = "Segunda-feira";
     break;
   case 2:
     dia = "Terça-feira";
     break;
   case 3:
     dia = "Quarta-feira";
     break;
   case 4:
     dia = "Quinta-feira";
     break;
   case 5:
     dia = "Sexta-feira";
     break;
   case  6:
     dia = "Sábado";
 }
 document.getElementById("threept").innerHTML = "Hoje é " + dia;


/*----------------------------------------------- */
/* quatre */
let x, y, z;
x = 10;
y = 20;
z = x + y;

console.log("Valor de Z é : " + z );

if(z > 25){
document.getElementById('quatre').innerHTML = "Z é maior que 25";
}else{
  document.getElementById('quatre').innerHTML = "Z não é igual a 25";
};



/* -------------------------------------------- */

let a, b, c;
a = ["Carro, ", "Carroça, "];
b = ["Caminhão, ", "Carruagem. "];
c = a + b;

console.log("Automóveis "+ c);

/* ----------------- */

let d, e, f;
d = "Jonh &";
e = " Mary";
f = d + e;
console.log("Casal do ano é : " + f);

/* ------------------------ */

let g, h, l, j, k;
g = "Casa, ";
h = "Prédio, ";
l = "Sobrado, ";
j = "Apartamento";
k = g + h + l + j;
m = h + l + j;

console.log("Tipo de estruturas mais comuns : " + k);
console.log("Estruturas com mais de um andar : " + m);
