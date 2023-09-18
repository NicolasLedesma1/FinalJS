let nombre = prompt ("Ingrese nombre")
let apellido = prompt ("ingrese apellido")
let edad = parseInt(prompt ("ingrese su edad"));
const persona = {
    nombre : nombre,
    apellido : apellido,
    edad : edad
}

console.log(persona);

const ingresaste = edad >= 18 && edad <=35;
const ingresaste2 = edad >= 36;

if (edad <= 17 ){
    alert (" no puede ingresar a la pagina tiene que ser mayor de 18");   
}   else {
    let monto = parseInt(prompt ("Cuanto dinero necesita sin el simbolo $ ni puntos"))
    let interes = 2.21
        if(ingresaste) {  
            alert ("¡Felicidades" + persona.nombre + "! Tienes financiación hasta en 48 cuotas!");
            for (let i = 2; i <= 48 ; i++ ){
                let resultado = porcentaje (monto, interes, i);
                console.log("si elige " + i + " cuotas seran de $" + resultado.toFixed(2));
            }
            console.log(nombre +" aguardamos su respuesta");
    }   else if(ingresaste2){
            alert ("¡Felicidades! Tienes financiación hasta en 24 cuotas!");
            console.log("Hola " + nombre);
            for (let i = 2; i <= 24 ; i++ ){
                let resultado = porcentaje (monto, interes, i);
                console.log("si elige " + i + " cuotas seran de $" + resultado.toFixed(2));
            }
            console.log(nombre +" aguardamos su respuesta");
    }
    function porcentaje (monto , interes , i) {
        return monto * interes / i;
    }

}
