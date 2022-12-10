const form  = document.getElementById('form-deposito');


let valorA = document.getElementById('campoA')

let valorB = document.getElementById('campoB')

valorA,valorB = parseInt

function validar(valorA,valorB){
  if (validar(parseInt(valorA.value), parseInt(valorB.value))){
    let = parseInt(valorB.value) > parseInt(valorA.value);
  }}


form.addEventListener('submit', function(e) {
  e.preventDefault();

  const valorA = document.getElementById('campoA')
  const valorB = document.getElementById('campoB')
  
    if (parseInt(valorB.value) > parseInt(valorA.value)){
    alert("valido");
    }
    else !(parseInt(valorB.value) > parseInt(valorA.value));{
      alert("Não é válido");
    }

})

console.log(form);
