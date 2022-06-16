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


//FALTA EL ID DE LA CANCIÓN
let queryString = location.search;
let qsToObject = new URLSearchParams (queryString);
let idCancion = qsToObject.get ('id'); 


let canciones1 = document.querySelector ('.trackdetails')

fetch ('https://api.allorigins.win/raw?url=https://api.deezer.com/track/' + idCancion)
  
  .then (function(detalle) {
  return detalle.json();
  })

  .then (function(tracks){
    console.log (tracks)
  
  let canciones2 = ''
  
    
    canciones1.innerHTML = `

    <article class="trackbox">
    <img src="${tracks.cover}" alt="fotoboh" class="fotobohemian track">
    <a href="./detail-artist.html" class="nombretema"><br> ${tracks.title} </a>
    <br>
    <a href="./detail-album.html" class="albumde"><br>  </a>
    <a href="./detail-album.html" class="albumde"><br> ${tracks.album.title} </a>
    <br>
    <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${idCancion}" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
    <br>
    <br>
    <button class="boton" type="submit">+ Agregar a mi Playlist</button>
    </article>
    
    `
  
  
  
})

//BOTÓN "AGREGAR A PLAYLIST"
let boton = document.querySelector('button');

boton.addEventListener('click', function() {
    console.log('¡Añadiste la canción a tu Playlist!');
    
}) ;


