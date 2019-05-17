require = require("esm")(module/*, options*/)

const { MyClass }= require("./module.js")
const mc = new MyClass()
mc[Symbol.iterator]()
