function tablamultiplicar(numero){
    document.writeln("<table>")
    document.writeln("<tbody>")
    for(let x=1; x <= 10; x++){
        document.writeln(x," X ",numero," = ",x*numero," <br>")
    }
    document.writeln("</tbody>")
    document.writeln("</table>")
}
const num = parseInt(prompt("Ingrese un numero"))
tablamultiplicar(num)