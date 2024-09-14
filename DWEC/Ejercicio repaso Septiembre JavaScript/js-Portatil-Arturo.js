//Ejercicio 1
/*
let n1=Number(prompt("Introduce un numero"))
let n2=Number(prompt("Introduce otro numero"))

let n3 = n1+n2

Swal.fire(String(n3));

*/

//Ejercicio 2
/*
let n1=Number(prompt("Introduce un numero par."))

if (n1%2 == 0) {

    Swal.fire("El número es par");
} else{
    Swal.fire("El número es impar");
}

*/


//Ejercicio 3
/*
let n1=Number(prompt("Introduce un numero para calcular su factorial"))

function factorial(n) {

    if (n<=1) {
        return 1        
    }else{
        return n*factorial(n-1)
    }
}

alert(factorial(n1)); */


//Ejercicio 4
/*

//let n1=Number(prompt("Introduce números separados por comas"))

let lista=[10,20,30,40]

let resultado = 0

for (let i = 0; i < lista.length; i++) {
    
    resultado += lista[i]
    
}

alert(resultado/lista.length) */

//Ejercicio 5
/*
let vocales=prompt("Introduce una palabra")

vocales=vocales.toUpperCase()

let contador = 0

for (let i = 0; i < vocales.length; i++) {
    if (vocales[i] == "A" || vocales[i] == "E" || vocales[i] == "I" || vocales[i] == "O" || vocales[i] == "U"){
        contador += 1
    }
    
}

alert(contador); */

//Ejercicio 6
/*
let lista=[1, 2, 3, 4, 5]
let n1=Number(prompt("Introduce un número"))

let resultado = 0

for (let i = 0; i < lista.length; i++) {

    if (lista[i] == n1) {
        alert("El numero esta en la lista")
    }
    
} */
//Ejercicio 7
/*

let lista="JavaScript"
let listaves = ""

for (let i = lista.length - 1; i > -1 ; i--) {

    listaves += lista[i]
}

alert(listaves) */

//Ejercicio 8
/*

let numeros=[3, 5, 7, 2, 9]
let mayor = numeros[0]

for (let i = 0; i < numeros.length; i++) {

    if (numeros[i] > mayor) {
        mayor = numeros[i]
    }  
}
alert(mayor)*/

//Ejercicio 9
/*

let pali = "anilina"
let reves = ""

for (let i = pali.length -1 ; i > -1; i--) {

    reves += pali[i]
    
}

if (pali == reves) {

    alert("True")
    
} else{
    alert("False")
}*/

//Ejercicio 10
/*
let buga={
    marca : "Toyota",
    modelo : "Corola",
    año : "2020"
}

alert("Mi buga es un "+buga.marca+" "+buga.modelo+" " +buga.año) */

//Ejercicio 11
/*
let lista = [1,2,3,4,5,6]

let resultado = []

for (let i = 0; i < lista.length; i++) {

    if (lista[i]%2 == 0) {
        
        resultado.push(lista[i])
    }
    
}

alert(resultado) */

//Ejercicio 12
/*

let lista = [{valor: 10}, {valor: 20}, {valor: 30}] 
let contador = 0

for (let i = 0; i < lista.length; i++) {
    
    contador+=lista[i].valor
    
}

alert(contador) */

//Ejercicio 13
/*
let cont1 = [1, 2, 3]
let cont2 = [4, 5, 6]
let cont3 = []

for (let i = 0; i < cont1.length; i++) {
    
    cont3.push(cont1[i])
}
for (let i = 0; i < cont2.length; i++) {
    
    cont3.push(cont2[i])
}

alert(cont3) */

//Ejercicio 14
/*
let n1 = 10
let n2 = 0

for (let i = 0; i < n1+1; i++) {
    
    if (i%2==0) {
        
        n2+=i
    }
}
alert(n2) */

//Ejercicio 15
/*
let lista = []

let max = 100
let min = 0

for (let i = 0; i < 10; i++) {

    lista.push(Math.floor((Math.random() * (max - min + 1)) + min));
    

}

alert(lista) */

//Ejercicio 16
/*
let lista = []

for (let i = 0; i < 6; i++) {
    let num = prompt("Inserta un número")  
    lista.push(num)
}

alert(lista.toSorted()) */

//Ejercicio 17
/*
let lista = []
let promedio = 0
let contador = 0

for (let i = 0; i < 4; i++) {
    let num = parseFloat(prompt("Inserta un número"));  
    lista.push(num)
}

for (let i = 0; i < lista.length; i++) {

    promedio += lista[i]
    
}

promedio = promedio / lista.length

for (let i = 0; i < lista.length; i++) {

    if (lista[i] > promedio) {

        contador+=1
    }
    
}

alert("Hay un total de " + contador + " números mayores que la media."); */

//Ejercicio 18
/*
let contador = 0

const boton = document.getElementById("boton");
const cont = document.getElementById("contador");

boton.addEventListener('click', () => {
    contador++;
    cont.textContent = contador;
}); */

//Ejercicio 20
/*
const boton = document.getElementById("boton");
boton.addEventListener('click', () => {

    bac
}); */


let frase = prompt("Inserta una frase"); 
let cont = 0

for (let i = 0; i < frase.length; i++) {
    if (frase[i] == " "){
        cont +=1
    }
}

alert(cont + 1)





