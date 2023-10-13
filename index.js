
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


    const containerElement = document.getElementById('container');

    setTimeout(() => {
;;        containerElement.innerHTML = presentacion;
    }, 2000)

/**se almacenan los datos del objeto usuario para hacer las las modificaciones via json y luego se inyectan al html desde ahi */
    localStorage.setItem('bienvenida', JSON.stringify(datosUsuario));
    const bienvenida = JSON.parse(localStorage.getItem('bienvenida'));
    const titulo = document.getElementById('title');
    setTimeout(() => {
      titulo.innerText = `Bienvenidx ${bienvenida.name}`;
    }, 100)

  });

});

const date = document.getElementById ('date');
const DateTime = luxon.DateTime;
const now = DateTime.now();

const fecha = document.createElement ('div')

fecha.innerHTML = `<p> Hoy es ${now.toLocaleString(DateTime.DATE_SHORT)}</p>
                      <p>Son las ${now.toLocaleString(DateTime.TIME_SIMPLE)} </p> `

date.appendChild (fecha)



const dolarApi = document.getElementById('dolar');
const baseURL = 'https://api.bluelytics.com.ar/v2/latest';

async function traerDolar() {
  const respuesta = await fetch(baseURL);
  const resultado = await respuesta.json();

  const dolarOficial = resultado.oficial.value_buy;
  const dolarBlue = resultado.blue.value_buy;

  const oficialCard = crearTarjeta('Dólar Oficial', dolarOficial);
  const blueCard = crearTarjeta('Dólar Blue', dolarBlue);

  dolarApi.appendChild(oficialCard);
  dolarApi.appendChild(blueCard);
}

function crearTarjeta(nombre, valor) {
  const card = document.createElement('article');
  card.className = 'dolarOficial';

  card.innerHTML = `
    <h2>${nombre}</h2>
    <p>Compra: $${valor}</p>
  `;

  return card;
}

traerDolar();