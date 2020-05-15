var buf = new Buffer('Lopakash');
console.log(buf);
// (node:9384) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);
buf.write('Ranit');
console.log(buf.toString());