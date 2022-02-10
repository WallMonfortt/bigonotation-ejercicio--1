function printUnorderedPairs(arrayA, arrayB){
  for(let i = 0; i < arrayA.length; i++){ //O(n) porque se itera n veces
    for(let j = 0; j < arrayB.length; j++){ //O(k) porque se itera k veces
      for(let k = 0; k < 100000; k++){ // O(100000) porque se itera 100000 veces
        console.log(`${arrayA[i]}, ${arrayB[j]}`); //O(1) porque se imprime una vez
      }
    }
  }
}

//¿Cuál es la complejidad de tiempo?
// O(nk) porque se itera n veces y se itera k veces dentro de cada iteración