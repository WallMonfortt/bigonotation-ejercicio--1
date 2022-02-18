function reverse(array){
  for(let i = 0; i < array.length / 2; i++){ //O(n/2) porque se itera n/2 veces
    let other = array.length - i - 1; //O(1) porque se calcula una vez
    let temp = array[i]; //O(1) porque se calcula una vez
    array[i] = array[other]; //O(1) porque se asigna una vez
    array[other] = temp; //O(1) porque se asigna una vez
  }
}

//¿Cuál es la complejidad de tiempo?
// O(n/2) porque se itera n/2 veces
// O(n) porque se eliminan las constantes