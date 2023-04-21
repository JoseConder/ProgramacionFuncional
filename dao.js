const fs = require('fs');
const prompt = require('prompt-sync')();

class Product{
    constructor(id, desc, price, cat, stock, min_stock, max_stock){
        this.id = id;
        this.desc = desc;
        this.price = price;
        this.cat = cat;
        this.stock = stock;
        this.min_stock = min_stock;
        this.max_stock = max_stock;
    }
}

class DAO {
    constructor(){
        this.prods = [];
    }

    getData(file){
        const lines = fs.readFileSync(file, 'utf8').split('\n');
        for (let line of lines) {
            const data = line.trim().split(',');
            const prod = new Product(data[0], data[1], parseFloat(data[2]), data[3], parseInt(data[4]), parseInt(data[5]), parseInt(data[6]));
            this.prods.push(prod);
        }
    }

    stockOver20(){
        console.log("Numero de productos con existencia mayor a 20 \n");
        console.log(this.prods.filter((prod) => prod.stock > 20).length);
        console.log(" ");
        main();
    }

    stockBelow15(){
        console.log("Numero de productos con existencia menor a 15 \n");
        console.log(this.prods.filter((prod) => prod.stock < 15).length);
        console.log(" ");
        main();
    }

    sameCatPriceOver15(){
        const cats = this.prods[0].cat;
        let inRange = this.prods.filter((prod) => prod.cat === cats && prod.price > 15.50);
        let namesInRange = inRange.map((prod) => prod.desc);
        console.log("Lista de productos con las misma claisificacion y precio mayor a 15.50: \n");
        console.log(namesInRange);
        console.log(" ");
        main();
    }

    priceRange2045(){
        let inRange = this.prods.filter((prod) => prod.price > 20.30 && prod.price < 45.00);
        let namesInRange = inRange.map((prod) => prod.desc);
        console.log("Lista de productos con precio mayor a 20.30 y menor a 45: \n");
        console.log(namesInRange);
        console.log(" ");
        main();
    }

    stockByCat(){
        const catsList = {};
        for (let prod of this.prods){
            if(prod.cat in catsList){
                catsList[prod.cat] += 1;
            }else {
                catsList[prod.cat] = 1;
            }
        }
        console.log("Numero de productos agrupados por su clasificacion: \n");
        console.log(catsList);
        console.log(" ");
        main();
    }
}


function main(){
    const file = "./datos";
    console.log("Hola Bienvenido Al Sistema de Inventario de Abarrotes Doña Julia.");
    console.log("Que quieres hacer?: ");
    console.log("1.- Numero de prodcutos con existencia mayor a 20...");
    console.log("2.- Numero de productos con existencia menor a 15...");
    console.log("3.- Lista de productos con las misma claisificacion y precio mayor a 15.50: ");
    console.log("4.- Lista de productos con precio mayor a 20.30 y menor a 45: ");
    console.log("5.- Numero de productos agrupados por su clasificacion: ");
    console.log("6.- Salir...");
    let opt = parseInt(prompt('Ingresa el numero de tu opcion deseada: '));
    const dao = new DAO();
    dao.getData(file);

    switch (opt){
        case 1:
            dao.stockOver20();
            break;  
        case 2:
            dao.stockBelow15();
            break;
        case 3:
            dao.sameCatPriceOver15();
            break;
        case 4: 
            dao.priceRange2045();
            break;
        case 5:
            dao.stockByCat();
            break;
        case 6:
            break;
    }
}

main();