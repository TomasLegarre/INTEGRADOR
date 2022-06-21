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


// detalle de TRACKS
// el.search tiene la querystring --> desde el ? en adelnte
//queremos convertirlo en un objeto literal para poder usarlo en la practica
// meteodo new URL --> aca lo guardamos dentro de la variable
// id cancion --> .get (meteodo) poorque lo unico que queremos de la obj literal es el ID

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
    listaPlaylist.splice (listaPlaylist.indexOf(idCancion),1) 
    boton.innerHTML = "+ Agregar a mi Playlist"; 
    console.log (listaPlaylist)
  }else {
    listaPlaylist.push (idCancion); 
    boton.innerHTML = "Eliminar de mi Playlist" 
    console.log (listaPlaylist);
    }

 // GUARDAR INFO --> convertimos con JSON de array en string

 localStorage.setItem('playlist', JSON.stringify(listaPlaylist)); 
 })
 
//ANTES DE TOCAR EL BOTON PREPARAMOS LA PLAYLIST: 
// si tenemos elelemento &&(que se cumplan las dos)// y es DISNTO A undefined 
// quiero que nuestra variable local pase a tener lo que hay en el local storgae 

if(localStorage.getItem('playlist') && localStorage.getItem('playlist') != null){
  listaPlaylist = JSON.parse(localStorage.getItem('playlist'));
}
if(listaPlaylist.includes(idCancion)){
  boton.innerHTML = "Eliminar de mi Playlist"
}


