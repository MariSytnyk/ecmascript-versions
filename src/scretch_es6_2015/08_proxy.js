// PROXY
const target = {};
const handler = {
  get: (receiver, prop) => {
    console.log(receiver === target)
    return `Hello, ${ prop }!`;
  }
};

const p = new Proxy(target, handler);
console.log(p.world)
