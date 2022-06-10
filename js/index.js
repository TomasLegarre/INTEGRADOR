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


let section = document.querySelector('.canciones');
console.log(section[0].innerHTML);

fetch ('https://api.allorigins.win/raw?url=https://api.deezer.com/chart')
.then (function(datos) {
return datos.json();

})
.then(function(data){

  console.log(data.results);
})

.catch(function(error){
  console.log ('el error fue: ' + error);
})

