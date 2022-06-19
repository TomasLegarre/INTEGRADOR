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


let proxy = "";
let url = "";

let recuperoStorage = localStorage.getItem ('playlist');
let playlist = JSON.parse(recuperoStorage);

let plistWrapper = document.querySelector('.listadereproduccion')
let cuerpo = document.querySelector ('.playlist-contenedor')

   if(recuperoStorage == null || recuperoStorage == '[]') {

    playlist =[]
    plistWrapper.innerHTML += '<h3 class="no-playlist"> En este momento no hay canciones en tu playlist </h3>'
}
   else{
    playlist.forEach(function(trackId){
        buscarYMostrar(trackId)
    })
}

   function buscarYMostrar(trackId){

     var proxy = ''
     var url = proxy + '' + trackId;

     fetch(url)
     .then (function(response){
         return response.json();
     })
     .then(function(truck){
         plistWrapper.innerHTML += '<div class ="player-playlist"><iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=80%&height=63&color=25DFCF&layout=&size=medium&type=tracks&id=' + track.id + '&app_id=1" width="80%" height="63"></iframe></div>';
    })

    .catch (function(error){
        console.log(error)
    })

}

var boton = document.querySelector ('.boton')





