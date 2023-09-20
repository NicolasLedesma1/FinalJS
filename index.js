

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
    var monto = parseInt(prompt ("Cuanto dinero necesita sin el simbolo $ ni puntos"));
    let cuotasDisponibles = parseInt(prompt("cuota deseada"));
    const tasasInteres = {
        12: 1.2,
        24: 1.4,
        36: 1.6,
        48: 1.8,
      };
    
      if (ingresaste) {
        let tasaInteres = tasasInteres[cuotasDisponibles];
    
        if (tasaInteres !== undefined) {
          alert(
            "¡Felicidades " +
              persona.nombre +
              "! Tienes financiación hasta en 48 cuotas con una tasa de interés del " + (tasaInteres * 100) + "%");
            const cotizar = {
            Cuotas: cuotasDisponibles,
            Dinero: monto,
            };
          console.log(cotizar);
    
          const cuotaElegida = [];
    
          if (cuotasDisponibles >= 2 && cuotasDisponibles <= 48) {
            for (let i = 2; i <= cuotasDisponibles; i++) {
              cuotaElegida.push(i);
            }
    
            const montosCuotas = cuotaElegida.map(function (numeroCuotas) {
              return (monto * tasaInteres / numeroCuotas);
            });
    
            cuotaElegida.forEach(function (numeroCuotas, index) {
              console.log(
                "En " +
                    numeroCuotas +
                  " cuotas el monto a abonar sería $" +
                  montosCuotas[index].toFixed(2)
              );
            });
          } else {
            console.log("Ingrese valores válidos para monto y cuotas.");
          }
    
          console.log(persona.nombre + " aguardamos su respuesta");
        } else {
          console.log("Número de cuotas no válido");
        }

        console.log(persona.nombre +" aguardamos su respuesta");   
    }   else if(ingresaste2) {
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



