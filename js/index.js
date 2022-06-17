//FORMULARIO
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

// CANCIONES
let section = document.querySelector('.canciones');


fetch ('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks')
   .then (function(datos) {
   return datos.json();

}) 
   .then(function(info){
      console.log (info)

         let section2 = ''
         for (let i = 0; i < 5; i++){ 

       section2 += ` <article class="cajas-canciones">
        <img src=${info.data[i].artist.picture} alt="" class="imagenC bohemian"> 
        <br> <br>
        <a 
          href="./detail-track.html?id=${info.data[i].id}"
          class="linkcancion"> ${info.data[i].title}
        </a>
        </article> `
        }

section.innerHTML = section2; 


})

.catch(function(error){
  console.log ('el error fue: ' + error);
})


// ALBUMES
let album = document.querySelector('.albunes')


fetch ('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums')
  .then (function(datos) {
    return datos.json();
  })

  .then (function(info) {
    console.log (info)

  

     let album2 = ''
     for (let i = 0; i < 5; i++) {
       album2 += ` <article class="cajas-albunes"> 
       <img src=${info.data[i].cover} alt="" class="imagenA">
       <a href="./detail-album.html?id=${info.data[i].id}" class="linkalbum"> <br> <br> ${info.data[i].title} </a>
   </article> `
       
  album.innerHTML = album2; 
     }



    }) 
    .catch(function(error){
      console.log ('el error fue: ' + error);
    })

//ARTISTAS
let artistas1 = document.querySelector ('.artistas') 

fetch ('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists')
      .then(function(datos) {
        return datos.json();
      })

      .then(function(info){
        console.log (info)
  
           let artistas2  = ''
           for (let i = 0; i < 5; i++){
  
            artistas2 += ` <section class="artistas">
            <article class="cajas-artistas">
            <img src="${info.data[i].picture}" alt="" class="imagenAr">
            <a href="./detail-artist.html?id=${info.data[i].id}" class="linkartista"> 
            <br><br> ${info.data[i].name} </a>
            </article> ` 
  
        artistas1.innerHTML = artistas2; 
  }
  
  })  
  .catch(function(error){
    console.log ('el error fue: ' + error);
  })


