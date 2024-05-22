//Trabalhando com funçoes que serão utilizadas no REACT.
//basica

function myFunction() {
    // aqui vai o codigo
    alert("Ola mundo!")
}
myFunction()
//Funçao com parametros
//Parametros sao dados que serão utilizados pela função 

//exemplo

function mult(a,b,c,d){
    //os parametros acima serão processados dentro da function
    return a*b*c*d
}

mult(4200,24,30,12);

alert(mult(4200,24,30,12));

//Funçao anonima
//como declara variaveis:
//let e const

let abacaxi = function(){
    return "Andrômeda";

}

alert(abacaxi());

//Arrow Function
let darksouls = () => {
    return "Essa é uma mensagem subliminar..."
}
alert(darksouls());




