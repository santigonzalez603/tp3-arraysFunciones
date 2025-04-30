function tipoDeLetras(frase) {
    let fraseMayusculas = frase.toUpperCase();
    let fraseMinusculas = frase.toLowerCase();
    for (let i = 0; i < frase.length; i++) {
      switch (frase) {
        case fraseMayusculas:
          return "La cadena de texto contiene sólo mayúsculas";
          break;
        case fraseMinusculas:
          return "La cadena de texto contiene sólo minúsculas";
          break;
        default:
          return "La cadena de texto contiene una mezcla de mayúsculas y minúsculas";
          break;
      }
    }
  }
  
  let frase = "";
  let condicion = true;
  do {
    frase = prompt("Ingrese una cadena de texto para ser evaluada:");
    if (frase === "" || frase === null || frase === undefined || !isNaN(frase)) {
      alert("Ingrese una cadena de texto válida");
      condicion = true;
    } else {
      condicion = false;
    }
  } while (condicion && confirm("Desea agregar una cadena de texto?"));
  const resultado = tipoDeLetras(frase);
  
  if (condicion === true) {
    document.writeln(`<p>No ingresó una cadena de texto válida</p>"`);
  }else{
    document.writeln(`<h5>Resultado de la función</h5>"`);
    document.writeln(`<p>${resultado}</p>"`);
  }