// PROXY
const target = {};
const handler = {
  get: (receiver, name) => {
    return `Hello, ${name}!`;
  }
};

const p = new Proxy(target, handler);
p.world === 'Hello, world!';
