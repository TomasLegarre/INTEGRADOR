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

//GENEROS
let generos1 = document.querySelector ('.geneross');

fetch ('https://api.allorigins.win/raw?url=https://api.deezer.com/genre')
  .then(function(datos) {
  return datos.json();
  })

  .then(function(info){
    console.log (info)

     let generos2  = ''
     for (let i = 0; i<info.data.length; i++){

      generos2 += `
          <article class="geneross">
          <img src="${info.data[i].picture}" alt="Rock" class="gen">
          <br>
          <a href="./detail-genres.html" class="link">${info.data[i].name}</a>
          </article> ` 

          console.log(info.data[i].picture);
  
      };
      generos1.innerHTML = generos2;
      console.log(generos1);
     })
















