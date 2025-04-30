function perimetro(alt,bas){
    let perimetr = 2*(alt + bas);
    document.writeln(`El perimetro del rectangulo es de: ${perimetr}`)
}
const altura = parseFloat(prompt("Ingrese el largo"))
const base = parseFloat(prompt("Ingrese el ancho"))
perimetro(altura,base);