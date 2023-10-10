document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('btn');

  btn.addEventListener('click', function () {
    let nombre = document.getElementById('name').value;
    let apellido = document.getElementById('apellido').value;
    let monto = parseFloat(document.getElementById('monto').value);
    let cuotasDisponibles = parseInt (document.getElementById('cuotas').value);
    let edad = parseInt (document.getElementById('edad').value);
    let presentacion;
    let cuotaFinal;
    const persona = {
      nombre: nombre,
      apellido: apellido,
    };
if(edad >= 18 ) {
  const tasasInteres = {
    12: 1.2,
    24: 1.4,
    36: 1.6,
    48: 1.8,
  };
  if (cuotasDisponibles > 2 && cuotasDisponibles <= 12) {
    cuotaFinal = 12;
  } else if (cuotasDisponibles > 12 && cuotasDisponibles <= 24) {
    cuotaFinal = 24;
  } else if (cuotasDisponibles > 24 && cuotasDisponibles <= 36) {
    cuotaFinal = 36;
  } else if (cuotasDisponibles > 36 && cuotasDisponibles <= 48) {
    cuotaFinal = 48;
  } else {
    presentacion = "Monto de cuota no válido";
  }
  valorCuota = (monto * tasasInteres[cuotaFinal]) / cuotasDisponibles;
  presentacion = `<h2>Estimadx ${nombre} ${apellido} usted abonara ${cuotasDisponibles} cuotas de $ ${valorCuota.toFixed(2)}</h2> `;
}
else {
 presentacion = `<h2>Estimadx ${nombre} ${apellido} sos menor </h2>`;
};

/* 
    } else {
      

      if (ingresaste) {
        let tasaInteres = tasasInteres[parseInt(cuotasDisponibles)];

        if (tasaInteres !== undefined) {
          const cuotaElegida = [];

          if (parseInt(cuotasDisponibles) >= 2 && parseInt(cuotasDisponibles) <= 48) {
            for (let i = 1; i <= 48; i++) {
              cuotaElegida.push(i);
            }

            let mensaje2 = `<p>Cuotas Elegidas: ${cuotasDisponibles}</p>
                            <p>Monto Elegido: $${monto}</p>`;

            cuotaElegida.forEach(function (numeroCuotas) {
              if (numeroCuotas === parseInt(cuotasDisponibles)) {
                const montoCuota = monto * tasaInteres / numeroCuotas;
                mensaje2 += `<p>Valor de cuota: $${montoCuota.toFixed(0)}</p>`;
              }
            });

            const container2 = document.createElement('article');
            container2.innerHTML = mensaje2;

            const container2Element = document.getElementById('container2');
            container2Element.innerHTML = '';
            container2Element.appendChild(container2);
          } else {
            console.log("Ingrese valores válidos para monto y cuotas.");
          };
        } else {
          console.log("Número de cuotas no válido");
        }
      }
    }




    
    
    
  }); */

  const container = document.createElement('article');
  container.innerHTML = presentacion;
  const containerElement = document.getElementById('container');
  containerElement.appendChild(container);

  sessionStorage.setItem('bienvenida' , JSON.stringify(persona))
  const bienvenida = JSON.parse(sessionStorage.getItem ('bienvenida'))
  const titulo = document.getElementById('title');
  titulo.innerText = `Bienvenidx ${bienvenida.nombre}`;
})
})




