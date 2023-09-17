const arg = {
  name: "Andrey",
  age: 22,
  data: ["mm12314234234", "2134535244", "324h34g34u2i4h"],
};

const { name, age } = arg;
console.log(name, age);
const { 0: pass, 1: uac } = arg.data;
console.log(pass, uac);
