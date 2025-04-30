const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
document.writeln("<h3>Lista de Meses</h3>")
document.writeln(`<ul>`)
for(let i=0; i < meses.length; i++){
    document.writeln(`<li>${meses[i]}</li>`);
}
document.writeln(`</ul>`);