// Array para guardar los usuarios registrados
let usuarios = [];

// Función que se ejecuta al hacer clic en el botón
function mostrarDatos() {
  // Obtener valores de los inputs
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let edad = parseInt(document.getElementById("edad").value);

  let resultado = document.getElementById("resultado");

  // Validar campos
  if (nombre === "" || apellido === "" || isNaN(edad)) {
    // Mensaje de error
    resultado.innerHTML = `
      <div class="alert alert-danger">
        Por favor completa todos los campos correctamente
      </div>
    `;
    return;
  }

  // Crear objeto usuario
  let usuario = {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
  };

  // Guardar usuario en el array
  usuarios.push(usuario);

  // Mensaje de éxito
  resultado.innerHTML = `
    <div class="alert alert-success">
      Usuario registrado correctamente
    </div>
  `;

  // Actualizar tabla
  mostrarUsuarios();

  // Limpiar formulario
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("edad").value = "";
}

// Función para mostrar los usuarios en la tabla
function mostrarUsuarios() {
  let tabla = document.getElementById("tablaUsuarios");
  tabla.innerHTML = "";

  usuarios.forEach((user) => {
    tabla.innerHTML += `
      <tr>
        <td>${user.nombre}</td>
        <td>${user.apellido}</td>
        <td>${user.edad}</td>
      </tr>
    `;
  });
}
