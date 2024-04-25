class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  display() {
    console.log(`Name: ${this.name}, Price: $${this.price}`);
  }
}

class ElectronicsProduct extends Product {
  constructor(name, price) {
    super(name, price);
    this.category = 'Electronics';
  }
}

class ClothingProduct extends Product {
  constructor(name, price) {
    super(name, price);
    this.category = 'Clothing';
  }

  display() {
    super.display();
    console.log(`Category: ${this.category}`);
  }
}

class BooksProduct extends Product {
  constructor(name, price) {
    super(name, price);
    this.category = 'Books';
  }

  display() {
    super.display();
    console.log(`Category: ${this.category}`);
  }
}

module.exports = { Product, ElectronicsProduct, ClothingProduct, BooksProduct };
