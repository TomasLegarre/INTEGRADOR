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



// Vamos a armar el js de fav --> empezando!! 


let contenedor = document.querySelector('.playlist-contenedor')
let titulo = document.querySelector ('.titulo-favoritos')

let listaPlaylist = []; 
if(localStorage.getItem('playlist') && localStorage.getItem('playlist') != null){
    listaPlaylist = JSON.parse(localStorage.getItem('playlist'));
  }
if (listaPlaylist.length == 0) {
    titulo.innerHTML = "¡PLAYLIST VACÍA!"
}else {


  for (let i=0; i<listaPlaylist.length; i++ ) {

  

   let urlTrack = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/' + listaPlaylist[i];

    fetch(urlTrack)
      .then (function(response){
    return response.json();
  })
     .then (function(datos) {
    console.log(datos)
 
    contenedor.innerHTML += ` 
  
  <article class="texto-de-busqueda">
  <img src="${datos.album.cover_medium}" alt="" class="foto">
  <h3 class="nombre"><br> <a href="./detail-track.html?id=${datos.id}"> ${datos.title} </a> <br> <a href="./detail-artist.html?id=${datos.artist.id}"> ${datos.artist.name} </a> <br> <a href="./detail-album.html?id=${datos.album.id}"> ${datos.album.title}</a> <h3>
  <br>
</article>
  
  `

  })

}}



  







