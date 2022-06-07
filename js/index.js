
//solamente por PRACTICAR// despues borro


let info = [{
    nombre: 'Tomas',
    apellido: 'Legarre',
    saludar: function () {
        return 'hola! soy ' + this.nombre + " " + this.apellido;
    }
}
, //clave para separar los elementos del array// 
{
    nombre: 'Ari',
    apellido: 'Bercovich',
    saludar: function () {
        return 'hola! soy ' + this.nombre + " " + this.apellido;
    }
}
]


info.push(
    {
        nombre: 'Pedro',
        apellido: 'A 912',
        saludar: function () {
            return 'hola! soy ' + this.nombre + " " + this.apellido;
        }
    }
)

//con info.pop puedo quitar el ultimo elemento 

console.log(info[0].saludar()) 
console.log(info[1].saludar()) 
console.log(info[2].saludar()) 


// prompt --> un cartel que nos da el espacio apra escirbir 
let mensajeBienvendia = "Hola! Bienvenido ¿Cual es tu nombre?";
let resultado = prompt(mensajeBienvendia)

let mensaje = "¿Estas seguro que quieres continuar?";
let resultado2 = confirm(mensaje);

