function foo(array){ 
  let sum = 0;  //O(n) porque se itera n veces
  let product = 1; //O(n) porque se itera n veces
  for(let i = 0; i < array.length; i++){ //O(n) porque se itera n veces
    sum += array[i]; //O(1) porque se suma una vez
  }
  for(let i = 0; i < array.length; i++){ //O(n) porque se itera n veces
    product *= array[i];  //O(1) porque se multiplica una vez
  }
  console.log(`${sum}, ${product}`); //O(1) porque se imprime una vez
}

//¿Cuál es la complejidad de tiempo?

// O(n) porque se itera n veces