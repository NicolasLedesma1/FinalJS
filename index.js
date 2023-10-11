
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('btn');

  btn.addEventListener('click', function () {
    let nombre = document.getElementById('name').value;
    let apellido = document.getElementById('apellido').value;
    let monto = parseFloat(document.getElementById('monto').value);
    let cuotasDisponibles = parseInt(document.getElementById('cuotas').value);
    let edad = parseInt(document.getElementById('edad').value);
    let presentacion;

    const datosUsuario = {
      name: nombre,
      lastName: apellido,
      age : edad,
    };
    /** se usa un destructuring para utilizar los datos dentro del objeto a pesar de no ser necesario, para justificar el uso del mismo 
     * a partir de los datos ingresados en el formulario se crea un obj, y luego se hacer el destructuring para obtener los valores y 
     * remplazarlos dentro del codigo
    */
    const { name,lastName, age} = datosUsuario;

    
    if (age >= 18) {
      mostrarAlerta('success', 'Ya calculamos tu cotización', 'Si todo salió bien, podrás verla en el pie de página.');
      const tasasInteres = {
        12: 1.2,
        24: 1.4,
        36: 1.6,
        48: 1.8,
      };

      const cuotaFinal = getCuotaFinal(cuotasDisponibles);

      if (cuotaFinal) {
        const valorCuota = (monto * tasasInteres[cuotaFinal]) / cuotasDisponibles;
        presentacion = `<h2>Estimadx ${name} ${lastName}</h2>
                        <p>Usted abonará ${cuotasDisponibles} cuotas de</p>
                        <h3>$ ${valorCuota.toFixed(2)}</h3>`;
      } else {
        presentacion = "Monto de cuota no válido";
      }
    } else {
      mostrarAlerta('error', 'Sos menor de 18 años', 'No puedes ingresar a la cotización');
    }
    /**se realiza una funcion de getcuota final, para saber que rango de interes le corresponde a la cuota es decir el rango mas cercano es el valor que se aplica
     * con la const tasasInteres
     */
    function getCuotaFinal(cuotasDisponibles) {
      const cuotaRanges = [12, 24, 36, 48];
      for (const range of cuotaRanges) {
        if (cuotasDisponibles <= range) {
          return range;
        }
      }
      return null;
    }
    function mostrarAlerta(icon, title, text) {
      Swal.fire({
        icon: icon,
        title: title,
        text: text,
      });
    }


    const container = document.createElement('article');
    container.innerHTML = presentacion;
    const containerElement = document.getElementById('container');
    containerElement.appendChild(container);
/**se almacenan los datos del objeto usuario para hacer las las modificaciones via json y luego se inyectan al html desde ahi */
    sessionStorage.setItem('bienvenida', JSON.stringify(datosUsuario));
    const bienvenida = JSON.parse(sessionStorage.getItem('bienvenida'));
    const titulo = document.getElementById('title');
    titulo.innerText = `Bienvenidx ${bienvenida.name}`;
  });

});



