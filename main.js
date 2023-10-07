function printHelloWorld() {
    console.log("Hello, World!");
    setTimeout(printHelloWorld, 1000); // Prints "Hello, World!" every second (1000 milliseconds)
  }
  
  // Start the loop
  printHelloWorld();
  