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

    album1.innerHTML = `
    <article class="albumbox">
            <img src="./img-album/coldplay_ghost_stories.jpeg" alt="" class="albumpic">
            <a href="./detail-artist.html" class="albumtitle"<br><br> Coldplay - 2014</a>
            <a href="./detail-genres.html" class="generotitle"><br> POP</a><br>
            <iframe class="iframealbum" style="border-radius:12px" src="https://open.spotify.com/embed/album/2G4AUqfwxcV1UdQjm2ouYr?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </article>
    `
  })

  .catch(function (error) {
    console.log(error);
  })