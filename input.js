const fs = require('fs');
const prompt = require('prompt-sync')();

const file = "./datos";

let id = prompt("ingresa el nombre del producto");
let desc = prompt("ingresa la descripcion del producto");
let price = prompt("ingresa el precio del producto");
let cat = prompt("ingresa la clasificacion del producto");
let stock = prompt("ingresa la existencia del producto");
let min_stock = prompt("ingresa la existencia minima del producto");
let max_stock = prompt("ingresa la exisencia maxima del producto");

let text = id + "," + desc + "," + price + "," + cat + "," + stock + "," + min_stock + "," + max_stock + "\n";

fs.appendFile(file, text, function(err){
    if (err) throw err;
    console.log("Se agrego info a datos")
});
