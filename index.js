document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('btn');

  btn.addEventListener('click', function () {
    let nombre = document.getElementById('name').value;
    let apellido = document.getElementById('apellido').value;
    let monto = parseFloat(document.getElementById('monto').value);
    let cuotasDisponibles = document.getElementById('cuotas').value;
    const persona = {
      nombre: nombre,
      apellido: apellido,
    };

    let edad = parseInt(prompt("Ingrese su edad"));
    const ingresaste = edad >= 18;

    if (edad <= 17) {
      alert("No puede ingresar a la página, debe ser mayor de 18");
    } else {
      const tasasInteres = {
        12: 1.2,
        24: 1.4,
        36: 1.6,
        48: 1.8,
      };

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
          }
          console.log(persona.nombre + " aguardamos su respuesta");
        } else {
          console.log("Número de cuotas no válido");
        }
      }
    }
    const container = document.createElement('article');
    const presentacion = `<p>Estimadx ${nombre} ${apellido} :   </p>`;
    container.innerHTML = presentacion;
    const containerElement = document.getElementById('container');
    containerElement.appendChild(container);
    btn.addEventListener ('click',()=> { 
    sessionStorage.setItem('bienvenida' , JSON.stringify(persona))
    const bienvenida = JSON.parse(localStorage.getItem ('bienvenida'))
    
    
    })
  });
});





