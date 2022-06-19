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
}



)

let queryString = location.search;
let qsToObject = new URLSearchParams (queryString);
let idBuscador = qsToObject.get ('id'); 

let resultados = document.querySelector ('.texto-de-busqueda')
let cargador = document.querySelector ('.spinner')

let urlTrack = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/' + idBuscador;
let urlAlbum = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/' + idBuscador;
let urlArtistas = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/' + idBuscador;
let urlGeneros = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/' + idBuscador;

window.onload = function() {
  cargador.style.display = 'none';
}

fetch(urlAlbum)
  .then (function(response){
    return response.json();
  })
  .then (function(datos) {
    console.log(datos)

    let img = document.querySelector ('.foto')
    let nombre = document.querySelector ('.nombre')

    img.src = datos.artist.picture 
    nombre.innerText = datos.title
  })