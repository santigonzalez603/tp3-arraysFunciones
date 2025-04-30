let resultadosLanzamientos = [];
let cuentaApariciones = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let resultadosPosibles = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
for (let lanzamiento = 0; lanzamiento < 50; lanzamiento++) {
  let dado1 = Math.floor(Math.random() * 6 + 1);
  let dado2 = Math.floor(Math.random() * 6 + 1);
  let sumaLanzamiento = dado1 + dado2;
  resultadosLanzamientos.push(sumaLanzamiento);
}
for (let valorPosible = 0; valorPosible < resultadosPosibles.length; valorPosible++) {
  for (let valorLanzamiento = 0; valorLanzamiento < resultadosLanzamientos.length; valorLanzamiento++) {
    if (resultadosLanzamientos[valorLanzamiento] === resultadosPosibles[valorPosible]) {
      cuentaApariciones[valorPosible]++;
    }
  }
}

document.writeln("<section>");
document.writeln("<h5>Resultado de 50 lanzamientos</h5>");
document.writeln('<table>');
document.writeln("<thead>");
document.writeln("<tr><th>Suma</th><th>Apariciones</th></tr>");
document.writeln("</thead>");
document.writeln("<tbody>");
for (let i = 0; i < resultadosPosibles.length; i++) {
  document.writeln(`<tr>
                        <td>${resultadosPosibles[i]}</td>
                        <td>${cuentaApariciones[i]}</td>
                    </tr>`);
}
document.writeln("</tbody>");
document.writeln("</table>");
document.writeln("</section>");