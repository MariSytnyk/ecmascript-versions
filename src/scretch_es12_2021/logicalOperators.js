// Logical OR assignment (||=)

const a = { duration: 50, title: '' };

a.duration ||= 10;
console.log(a.duration);
// expected output: 50

a.title ||= 'title is empty.';
console.log(a.title);
// expected output: "title is empty"


// Logical nullish assignment (??=)

const b = { duration: 50 };

b.duration ??= 10;
console.log(b.duration);
// expected output: 50

b.speed ??= 25;
console.log(b.speed);
// expected output: 25
