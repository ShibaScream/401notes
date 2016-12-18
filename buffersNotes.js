let buf = new Buffer(10)
console.log(buf)

buf.write('hello how are you doing in class')
console.log(buf.toString())

let buf2 = new Buffer(20)

buf2.writeUInt8(72)
buf2.writeUInt8(73, 1)
console.log(buf2.toString())

buf2.writeUInt8(73)
buf2.writeUInt8(72, 1)
console.log(buf2.toString())

// to have a buffer that is immediately zeroed
let buf3 = Buffer.alloc(10)
console.log(buf3)

buf3.write('123456789123456789')
console.log(buf3.toString())

// to auto alloc space for new Buffer
// this is UNSAFE though
let buf4 = new Buffer('hello how are you this is a long string')
console.log(buf4.toString())

// this is the safe version
let buf5 = Buffer.from('hello this is a safe way to do things')
console.log(buf5.toString())

// reading bytes
let buf6 = Buffer.from([4, 5, 70, 12])
console.log(buf6)
console.log(buf6.readUInt8(0))
console.log(buf6.readUInt8(1))
console.log(buf6.readUInt8(2))
console.log(buf6.readUInt8(3))
