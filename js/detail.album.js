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
let idAlbum = qsToObject.get ('id'); 

let album1 = document.querySelector ('.albumdetails')

let urlAlbum = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/` + idAlbum;
fetch(urlAlbum)
  .then (function(detalle) {
  return detalle.json();
  })


  .then (function(data){
    console.log (data);

    let img = document.querySelector('.albumpic')
    let iframe = document.querySelector('.iframealbum')
    let titulo = document.querySelector('.albumtitle')
    let titulog = document.querySelector('.generotitle')

    img.src = data.artist.picture
    iframe.src = `https://widget.deezer.com/widget/dark/album/${idAlbum}`
    titulo.innerText = data.title
    titulog.innerText = data.genres.data[0].name
    console.log(iframe)
  })

  .catch(function (error) {
    console.log(error);
  })