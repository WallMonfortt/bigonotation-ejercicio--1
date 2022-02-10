function printUnorderedPairs(arrayA, arrayB){ 
  for(let i = 0; i < arrayA.length; i++){ //O(n) porque se itera n veces
    for(let j = 0; j < arrayB.length; j++){ //0(k) porque se itera k veces
      if(arrayA[i] < arrayB[j]){ //O(1) porque se compara una vez
        console.log(`${arrayA[i]}, ${arrayB[j]}`); //O(1) porque se imprime una vez
      }
    }
  }
}

//¿Cuál es la complejidad de tiempo?
// O(n^k) porque se itera n veces y se itera k veces dentro de cada iteración