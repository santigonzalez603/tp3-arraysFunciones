let ciudades = [];
do {
  let ciudad = prompt("Ingrese el nombre de una ciudad:");
  if (ciudad === "" || ciudad === null || ciudad === undefined) {
    alert("Debe ingresar una ciudad válida");
  } else {
    ciudades.push(ciudad);
  }
} while (confirm("Desea agregar mas ciudades?"));
if (ciudades.length === 0) {
  document.writeln('<section>');
  document.writeln('<h3>No se ingresaron ciudades</h3>');
} else {
  document.writeln('<section class="container">');
  document.writeln('<h3>Arreglo resultante</h3>');
  document.writeln('<ul>');
  for (let i = 0; i < ciudades.length; i++) {
    document.writeln(`<li>${i}-${ciudades[i]}</li>`);
  }
  document.writeln("</ul>");

  document.writeln(`<p>Elemento en la primera posición: ${ciudades[0]}</h3>`);
  document.writeln(`<p>Elemento en la tercera posición: ${ciudades[2]}</h3>`);
  document.writeln(
    `<p>Elemento en la última posición: ${ciudades[ciudades.length - 1]}</h3>`
  );
  ciudades.push("Paris");
  document.writeln(`<p>Elemento en la segunda posición: ${ciudades[1]}</h3>`);
  ciudades[1] = "Barcelona";
  document.writeln('<h3>Arreglo resultante luego de las modificaciones</h3>');
  document.writeln('<ul>');
  for (let i = 0; i < ciudades.length; i++) {
    document.writeln(`<li>${i}-${ciudades[i]}</li>`);
  }
  document.writeln("</ul>");
  document.writeln("</section>");
}