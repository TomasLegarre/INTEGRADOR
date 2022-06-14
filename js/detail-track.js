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

let cacniones1 = document.querySelector ('.trackdetails')


fetch ('https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks')
  
  .then (function(detalle) {
  return detalle.json();
  })

  .then (function(tracks){
    console.log (tracks)
  
  let canciones2 = ''
  for (let i = 0; i < 5; i++){
    
    canciones2 += `
    <article class="trackbox">
    <img src="${tracks.data[i].picture_small}" alt="fotoboh" class="fotobohemian track">
    <a href="./detail-artist.html" class="nombretema"><br> ${tracks.data[i].title} </a>
    <br>
    <a href="./detail-album.html?=id=${tracks.data[i].id}" class="albumde"><br> ${tracks.data[i].album}</a>
    <br>
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3z8h0TU7ReDPLIbEnYhWZb?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    <br>
    <br>
    <button class="boton">+ Agregar a mi Playlist</button>
</article>
    
    
    `
  cacniones1.innerHTML = canciones2;
  
  }

  })