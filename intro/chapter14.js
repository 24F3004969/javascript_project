class Product {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}

class CustomerProducts {
    constructor(customer_id, product, count) {
        this.customer_id = customer_id;
        this.product = product;
        this.count = count;
    }
}

class Cafe {

    constructor(products, balance) {
        this.products = products;
        this.balance = balance;

        // Maintain the customer history
        this.customer_products = [];
    }


    // ----------------------------
    // BUY PRODUCT
    // ----------------------------
    buyProduct(customer_id, product, count) {

        // 1. Product unavailable
        if (!this.products.includes(product)) {
            return false;
        }

        // 2. Not enough stock
        if (product.stock < count) {
            return false;
        }

        // Reduce stock
        product.stock -= count;

        // Increase balance
        this.balance += product.price * count;

        // Check if customer bought this product before
        let existing = this.customer_products.find(
            cp => cp.customer_id === customer_id && cp.product === product
        );

        if (existing) {
            existing.count += count;   // increase previous count
        } else {
            // add a new record
            this.customer_products.push(
                new CustomerProducts(customer_id, product, count)
            );
        }

        return true;
    }


    // ----------------------------
    // RETURN PRODUCT
    // ----------------------------
    returnProduct(customer_id, product, count) {

        // Find customer's purchase record
        let record = this.customer_products.find(
            cp => cp.customer_id === customer_id && cp.product === product
        );

        // Cannot return if:
        // 1. No purchase record
        // 2. Returning more than purchased
        if (!record || count > record.count) {
            return false;
        }

        // Increase the product stock back
        product.stock += count;

        // Refund balance
        this.balance -= product.price * count;

        // Reduce count in customer record
        record.count -= count;

        // If full return → delete entry
        if (record.count === 0) {
            this.customer_products = this.customer_products.filter(
                cp => !(cp.customer_id === customer_id && cp.product === product)
            );
        }

        return true;
    }


    // ----------------------------
    // GET BALANCE
    // ----------------------------
    getCurrentBalance() {
        return this.balance;
    }
}