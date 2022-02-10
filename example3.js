function printUnorderedPairs(array){ 
  for(let i = 0; i < array.length; i++){ //O(n) porque se itera n veces
    for(let j = i + 1; j < array.length; j++){ //O(n-1) porque se itera n veces y se itera n-1 veces dentro del for loop
      console.log(`${array[i]}, ${array[j]}`);//O(1) porque se imprime una vez
    }
  }
}

//¿Cuál es la complejidad de tiempo?
// O(n^2) porque se itera n veces y se itera n veces dentro de cada iteración