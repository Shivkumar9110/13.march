function swapValues(x, y) {
    // Use array destructuring to swap values
    console.log(x);
    console.log(y);
    [x, y] = [y, x];
    
    // Return an array with swapped values
    return [x, y];
  }
  
  // Example usage:
  let x = 5;
  let y = 10;
  
  let swappedValues = swapValues(x, y);
  
  // Display the result
  console.log("Original values: x =", x, ", y =", y);
  console.log("Swapped values: x =", swappedValues[0], ", y =", swappedValues[1]);
  