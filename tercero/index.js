let prestamo = parseInt (prompt("Dame tu prestamo"));
let plazo = parseInt (prompt("Dame el plazo"));
let valorCuotas = ((prestamo*INTERES)+(prestamo/plazo));
const INTERES = 0.027
console.log(valorCuotas); 