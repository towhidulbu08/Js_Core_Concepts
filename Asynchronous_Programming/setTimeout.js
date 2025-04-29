function greet() {
  console.log("Hello, World!");
}

const timeOutId = setTimeout(greet, 0);
clearTimeout(timeOutId);
