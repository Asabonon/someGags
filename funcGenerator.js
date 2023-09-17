function* idGenerator() {
  let id = 177;
  while (true) {
    yield id++;
  }
}

const myIdGenerator = idGenerator();
console.log(myIdGenerator.next().value); // 177
console.log(myIdGenerator.next().value); // 178
console.log(myIdGenerator.next().value); // 179
console.log(myIdGenerator.next().value); // 180
