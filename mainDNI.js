import { NIF } from "./NIF.js";
let nif = new NIF(23);
console.log(nif.mostrar());
console.log("Ahora modificamos el numero");
nif.nif = 53787365;
console.log(nif.mostrar());