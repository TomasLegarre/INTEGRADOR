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

fetch ('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/' + idCancion)
  
  .then (function(detalle) {
  return detalle.json();
  })

  .then (function(tracks){
    console.log (tracks)
  
  let canciones2 = ''
  
    
    canciones1.innerHTML = `

    <article class="trackbox">
    <img src="${tracks.album.cover}" alt="fotoboh" class="fotobohemian track">
    
    <a href="" class="nombretema"><br> ${tracks.title} </a>
    <a href="./detail-artist.html" class="nombretema"><br> ${tracks.artist.name} </a>
    <a href="./detail-album.html" class="albumde">  </a>
    <a href="./detail-album.html" class="albumde"><br> ${tracks.album.title} </a>
    <br>
    <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${idCancion}" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
    <br>
    <br>
    
    </article>
    `
  
  
  
})

//BOTÓN "AGREGAR A PLAYLIST"
let boton = document.querySelector('button');
let listaPlaylist = []; 

boton.addEventListener('click', function() {

  if (listaPlaylist.includes(idCancion)) {
    boton.innerHTML = "+ añadir a playlsit"; 
    listaPlaylist.splice (listaPlaylist.indexOf(idCancion),1) 
    console.log (listaPlaylist)
  }else {
    listaPlaylist.push (idCancion); 
    boton.innerHTML = "sacar de favoritos" 
    console.log (listaPlaylist);
    }

 // como guarrdar info para usar dentro de otra pagina 
 // setItem metodo que tiene dos paramteros. nombre, lo que queremos guardar (solo acepta strigns) JSON nos convierte el array en string. 

 localStorage.setItem('playlist', JSON.stringify(listaPlaylist)); 
 })
 
 
// que este // en el otro lado --> que el elemento sea disnto a null --> en playlist hay un valor 
if(localStorage.getItem('playlist') && localStorage.getItem('playlist') != null){
  listaPlaylist = JSON.parse(localStorage.getItem('playlist'));
}
if(listaPlaylist.includes(idCancion)){
  boton.innerHTML = "sacar de favoritos"
}


