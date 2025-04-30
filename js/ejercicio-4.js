function paroImpar(numero){
    if(numero %2 === 0){
        return "un numero par";
    }
    else{
        return "un numero impar";
    }
}
const numero = parseInt(prompt("Ingrese un numero"))
const resultado = paroImpar(numero);
document.writeln("El numero ",numero," es ",resultado,);