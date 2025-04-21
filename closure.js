function outer() {
  function inner() {
    if (y > 1) {
      console.log(y);
    } else {
      console.log(y * 2);
    }
  }
  inner(3);
}
