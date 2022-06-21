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
let idArtista = qsToObject.get ('id'); 

let artistas1 = document.querySelector ('.artistdetails')

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/' + idArtista)
  .then (function(detalle) {
  return detalle.json();
  })


  .then (function(data){
    console.log (data);

      let nombre = document.querySelector('.artisttitle');
      let foto = document.querySelector('.artistpic');
      let repro = document.querySelector('.reproductor')
      nombre.innerText = data.name;
      foto.src = data.picture;
      repro.src = data.tracklist;
  })

  .catch(function (error) {
    console.log(error);
  })


 /* OPCIÓN DE ESTRUCTURA 2
   artistas1.innerHTML = `
  <article class="artistbox">
  <img src="${artista.data[i].picture}" alt="fotoartista" class="artistpic">
  <p class="artisttitle">Eminem</p>
  <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/7dGJo4pcD2V6oG8kP0tJRR?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
  </article>
  ` */

