const fs = require('fs'); 
const path = require('../util/path'); 

const p = `${path}/data/products.json`;

module.exports = class Product {
    constructor(t) {
        this.title = t
    }

    save() {
        fs.readFile(p, (err, fileContent) => {
            let products = []
            if (!err) {
                products = JSON.parse(fileContent);
            }

            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            })
        }); 
    }

    static fetchAll(callback) {
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                callback([]) 
            }
            callback(JSON.parse(fileContent));
        }); 
    } 
}