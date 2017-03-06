var context = require.context('./specs', true, /-spec\.js$/);
context.keys().forEach(context);
console.log(context.keys());
