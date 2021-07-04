
function animais() {
const animais = ["cabrito", "coelho", "ovelha", "cachorro", "gato", "porco"];
let x, y, z, w;
x = animais[0];
y = animais[1];
z = animais[2];
a = animais[3];
b = animais[4];
c = animais[5];
w = x + " e " + z;
document.getElementById("quatre").innerHTML = 'Animais Doceis = ' + w;
console.log('Animais doceis: ' + w);

}

function esconder(){
  let quatre = document.getElementById("quatre");
  let threept = document.getElementById("threept");
  quatre.style.display = 'none';

  threept.innerHTML = "Animais Foram Escondidos com sucesso!";
  threept.style.color = 'darkgreen';
  threept.style.display = 'inline';
     }

function aparecer() {
  let quatre = document.getElementById("quatre");
  let threept = document.getElementById('threept');
  if(quatre.style.display === 'none'){
    quatre.style.display = 'inline';
    quatre.style.color = 'darkred';

    if(threept.style.display === 'inline'){
      threept.style.display = 'none';
    }

  }
}
