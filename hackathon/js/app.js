class Product {
    constructor(productId, name, quantityInStock, unitPrice) {
        this._productId = productId;
        this._name = name;
        this._quantityInStock = quantityInStock;
        this._unitPrice = unitPrice;
    }

    getProductID() {
        return this._productId;
    }
    getName() {
        return this._name;
    }
    getQty() {
        return this._quantityInStock;
    }
    getPrice() {
        return this._unitPrice;
    }
    setName(newName) {
        this._name = newName;
    }

    setQty(newQty) {
        this._quantityInStock = newQty;
    }
    setPrice(newPrice) {
        this._unitPrice = newPrice;
    }

    toString() {
        return `ProductID : ${this.getProductID()} Name : ${this.getName()}  Qty : ${this.getQty()} Price : ${this.getPrice()}`
    };
}

const products = [];
products.push(new Product(1001, "Banana", 12, 0.99));
products.push(new Product(1002, "Apples", 64, 1.85));
products.push(new Product(1003, "Carrots", 125, 2.70));

// print out to the console.
products.forEach((product) => {
    console.log(product.toString());
});
