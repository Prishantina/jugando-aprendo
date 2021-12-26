const ventana = document.querySelector("#cuentos")
let contador = 0;

function mostrarCuentos(e){
  e.preventDefault();
  if (contador == 0){
  fetch('cuentos.json')
  .then(respuesta => respuesta.json())
  .then(cuentos => {    
    cuentos.forEach(cuento => {
      leer = document.createElement('div');
      leer.innerHTML = `
      <div><h2>${cuento.nombre}</h2></div>
      <div><p>${cuento.texto}</p></div>
      `;
      ventana.appendChild(leer);
    });
  }
  )
  contador = 1;
}else{
  let cuentos = document.getElementById("cuentos")
  cuentos.innerHTML = ``;
  contador = 0;
  }
};

let masCuentos = document.getElementById("btnCuentos");
masCuentos.addEventListener('click', mostrarCuentos);

