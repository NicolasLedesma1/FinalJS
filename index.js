document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('btn');

  btn.addEventListener('click', function () {
    let nombre = document.getElementById('name').value;
    let apellido = document.getElementById('apellido').value;
    let monto = parseFloat(document.getElementById('monto').value);
    let cuotasDisponibles = parseInt(document.getElementById('cuotas').value);
    let edad = parseInt(document.getElementById('edad').value);
    let presentacion;

    const persona = {
      nombre: nombre,
      apellido: apellido,
    };

    if (edad >= 18) {
      const tasasInteres = {
        12: 1.2,
        24: 1.4,
        36: 1.6,
        48: 1.8,
      };

      const cuotaFinal = getCuotaFinal(cuotasDisponibles);

      if (cuotaFinal) {
        const valorCuota = (monto * tasasInteres[cuotaFinal]) / cuotasDisponibles;
        presentacion = `<h2>Estimadx ${nombre} ${apellido} usted abonará ${cuotasDisponibles} cuotas de $ ${valorCuota.toFixed(2)}</h2>`;
      } else {
        presentacion = "Monto de cuota no válido";
      }
    } else {
      presentacion = `<h2>Estimadx ${nombre} ${apellido} sos menor </h2>`;
    }

    function getCuotaFinal(cuotasDisponibles) {
      const cuotaRanges = [12, 24, 36, 48];
      for (const range of cuotaRanges) {
        if (cuotasDisponibles <= range) {
          return range;
        }
      }
      return null;
    }

    const container = document.createElement('article');
    container.innerHTML = presentacion;
    const containerElement = document.getElementById('container');
    containerElement.appendChild(container);

    sessionStorage.setItem('bienvenida', JSON.stringify(persona));
    const bienvenida = JSON.parse(sessionStorage.getItem('bienvenida'));
    const titulo = document.getElementById('title');
    titulo.innerText = `Bienvenidx ${bienvenida.nombre}`;
  });
});



