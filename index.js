

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
  var monto = parseInt(prompt("Cuanto dinero necesita sin el simbolo $ ni puntos"));
  let cuotasDisponibles = parseInt(prompt("cuota deseada"));
  const tasasInteres = {
    12: 1.2,
    24: 1.4,
    36: 1.6,
    48: 1.8,

  };
  console.log(tasasInteres);
  if (ingresaste) {
    let tasaInteres = tasasInteres[cuotasDisponibles];
    if (tasaInteres !== undefined) {

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
        alert(
          "¡Felicidades " + persona.nombre + "! Seleccionando " + cuotasDisponibles + " cuotas la taza de interes es de " + tasaInteres * 100 + "%"
        );
  
        const montosCuotas = cuotaElegida.map(function (numeroCuotas) {
          return monto * tasaInteres / numeroCuotas;
        });
  
        cuotaElegida.forEach(function (numeroCuotas, index) {
          console.log(
            "En " + numeroCuotas + " cuotas el valor de cada una sería $" + montosCuotas[index].toFixed(2)
          );
          if (numeroCuotas === cuotasDisponibles) {
            cuotaElegida.push({
              Cuotas: numeroCuotas,
              Valor: montosCuotas[index].toFixed(2),
            });
            console.log("Cuota deseada:", cuotaElegida[cuotaElegida.length - 1]);
          }
        });
        console.log("Cuotas elegidas:", cuotaElegida);
      } else {
        console.log("Ingrese valores válidos para monto y cuotas.");
      }
  
      console.log(persona.nombre + " aguardamos su respuesta");
    } else {
      console.log("Número de cuotas no válido");
    }
  
    }   else if(ingresaste2) {
        let tasaInteres = tasasInteres[cuotasDisponibles];
            
            const cotizar = {
              Cuotas: cuotasDisponibles,
              Dinero: monto,
            };
            console.log(cotizar);
            
            const cuotaElegida = [];
         if (cuotasDisponibles >= 2 && cuotasDisponibles <= 24) {
        for (let i = 2; i <= cuotasDisponibles; i++) {
          cuotaElegida.push(i);
        }
        alert (
          "¡Felicidades " + persona.nombre + "! Seleccionando " + cuotasDisponibles + " cuotas la taza de interes es de " + tasaInteres * 100 + "%"
        );
        const montosCuotas = cuotaElegida.map(function (numeroCuotas) {
          return monto * tasaInteres / numeroCuotas;
        });
  
        cuotaElegida.forEach(function (numeroCuotas, index) {
          console.log(
            "En " + numeroCuotas + " cuotas el valor de cada una sería $" + montosCuotas[index].toFixed(2)
            );
          if (numeroCuotas === cuotasDisponibles) {
            cuotaElegida.push({
              Cuotas: numeroCuotas,
              Valor: montosCuotas[index].toFixed(2),
            });
            console.log("Cuota deseada:", cuotaElegida[cuotaElegida.length - 1]);
          }
        });
        console.log("Cuotas elegidas:", cuotaElegida);
      } else {
        console.log("Ingrese valores válidos para monto y cuotas.");
      }
  
      console.log(persona.nombre + " aguardamos su respuesta");
    } else {
      console.log("Número de cuotas no válido");
    }
  }




