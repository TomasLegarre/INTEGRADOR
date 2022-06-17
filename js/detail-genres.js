let buscador = document.querySelector('form')
let campo = document.querySelector('.buscador-texto')

buscador.addEventListener('submit', function(evento) { 

evento.preventDefault();
console.log('error')

      if(campo.value == ''){
         alert('¿Que que queres buscar?')

}
      else if(campo.value.length <= 2){
         alert('Minimo 3 caracteres')
}
     else{
       this.submit()
     }
})



let queryString = location.search;
let qsToObject = new URLSearchParams (queryString);
let idGenero = qsToObject.get ('id'); 

let generos1 = document.querySelector ('.artistdetails')

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/' + idGenero)
  .then (function(detalle) {
  return detalle.json();
  })


  .then (function(data){
    console.log (data);

      let nombre = document.querySelector('.link2');
      let foto = document.querySelector('.artistpic');
      nombre.innerText = data.name;
      foto.src = data.picture_big;
  })

  .catch(function (error) {
    console.log(error);
  })