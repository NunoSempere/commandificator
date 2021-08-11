import commandify from "./index.js"

let echo = (x)=> console.log(x)
let echo0 = () => echo(0)
let echo1 = () => echo(1)
let echo2 = () => echo(2)
let echo3 = () => echo(3)
let echo4 = () => echo(4)

let functions = [echo0, echo1, echo2, echo3, echo4]
commandify(functions)
// commandify(functions, "[0/1/2/3/4]: ")
