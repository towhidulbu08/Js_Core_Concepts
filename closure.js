function outer() {
  console.log("output");
  return function inner() {
    console.log("inner");
  };
}

const x = outer();
