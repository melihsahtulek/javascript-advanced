console.clear();

function* orderByNumbers() {
  yield "step 1";
  yield "step 2";
}

const generator = orderByNumbers();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
