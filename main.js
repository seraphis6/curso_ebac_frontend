const form  = document.getElementById('form-deposito');


form.addEventListener('submit', function(e) {
  e.preventDefault();

  const valorA = document.getElementById('campoA')
  const valorB = document.getElementById('campoB')
  
    if (parseInt(valorB.value) > parseInt(valorA.value)){
    alert("valido");
    }
    else {
      alert("Não é válido");
    }

})

console.log(form);
