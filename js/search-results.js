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