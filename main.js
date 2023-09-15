function alwaysHungry(arr) {
    // tu código aquí 
    let tengoHambre = true
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === "comida"){
            console.log("delicioso");
            tengoHambre= false;
        }    
    } 
    if(tengoHambre){
        console.log("Tengo hambre")
    }
}
alwaysHungry([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
alwaysHungry([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"


console.log("======> filtro")
function highPass(arr, cutoff) {
    var filteredArr = [];
    // tu código aquí
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > cutoff){
            filteredArr.push(arr[i])
        }
        
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]

console.log("======> calcular promedio ")
function betterThanAverage(arr) {
    var sum = 0;
    let prom =0;
    // calcula el promedio
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    prom = sum / arr.length;

    
    var count = 0
    // cuenmta cuánmtas variables son mayores que el promedio
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > prom){
            count++;
        }
        
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta

console.log("==========> invertir valores")
function reverse(arr) {
    // tu código aquí
    arr = arr.reverse();
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]

console.log("=====> fibonachi");
function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];
    // tu código aquí
    if (n <= 2) {
        return fibArr.slice(0, n); // Devolver [0] para n = 1, [0, 1] para n = 2
    }

    for (let i = 2; i < n; i++) {
        var nextFib = fibArr[i - 1] + fibArr[i - 2];
        fibArr.push(nextFib);
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
