const products = [];

module.exports = class Product {
    constructor({ username, imageurl, price, description }) {
        this.username = username;
        this.imageurl = imageurl;
        this.price = price;
        this.description = description;
    }

    save() {
        products.push(this);
    }

    static fetchall() {
        return products;
    }
};
