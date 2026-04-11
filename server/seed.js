import pool from './db.js';

const products = [
  {
    name: "Espresso",
    price: "$4.00",
    imageSrc: "https://th.bing.com/th/id/OIP.SVCW9dzUWyC7pnL4bGUL9gHaEO?w=256&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    imageAlt: "Small cup of concentrated espresso",
    product_type: "Hot",
    caffeine_level: "High"
  },
  {
    name: "Latte",
    price: "$3.50",
    imageSrc: "https://tse1.mm.bing.net/th/id/OIP.Qr2Qqi3qXLQ82hvFSQDYGwHaHK?rs=1&pid=ImgDetMain&o=7&rm=3",
    imageAlt: "Creamy caffe latte",
    product_type: "Hot",
    caffeine_level: "Medium"
  },
  {
    name: "Cappuccino",
    price: "$5.50",
    imageSrc: "https://th.bing.com/th/id/R.35385e2ff3a6a3a35239741ce4f78263?rik=WpkVNOU7I8gDnw&pid=ImgRaw&r=0",
    imageAlt: "Frothy cappuccino",
    product_type: "Hot",
    caffeine_level: "Medium"
  },
  {
    name: "Flat White",
    price: "$5.00",
    imageSrc: "https://tse1.mm.bing.net/th/id/OIP.XHvUckEb1Ls7IBclGbxYPgHaFw?rs=1&pid=ImgDetMain&o=7&rm=3",
    imageAlt: "Smooth flat white",
    product_type: "Iced",
    caffeine_level: "High"
  },
  {
    name: "Macchiato",
    price: "$4.00",
    imageSrc: "https://th.bing.com/th/id/OIP.LlXkNk9LsT5XrrwZ1ESeVQHaEJ?w=333&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    imageAlt: "Classic macchiato",
    product_type: "Iced",
    caffeine_level: "Low"
  },
  {
    name: "Mocha",
    price: "$5.00",
    imageSrc: "https://th.bing.com/th/id/OIP.SVCW9dzUWyC7pnL4bGUL9gHaEO?w=256&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    imageAlt: "Chocolatey mocha",
    product_type: "Iced",
    caffeine_level: "High"
  },
  {
    name: "Cold Brew",
    price: "$3.00",
    imageSrc: "https://cookieandkate.com/images/2018/09/cold-brew-coffee-tutorial.jpg",
    imageAlt: "Slow-steeped cold brew",
    product_type: "Hot",
    caffeine_level: "Low"
  },
  {
    name: "Iced Latte",
    price: "$6.00",
    imageSrc: "https://www.mygingergarlickitchen.com/wp-content/uploads/2024/05/iced-caramel-latte-recipe-2.jpg",
    imageAlt: "Chilled latte over ice",
    product_type: "Iced",
    caffeine_level: "Medium"
  },
  {
    name: "Affogato",
    price: "$7.00",
    imageSrc: "https://th.bing.com/th/id/R.1ef5bbbb0fc120d6e499375218242a0f?rik=Wj59qYi4B8r9cQ&pid=ImgRaw&r=0",
    imageAlt: "Espresso over vanilla gelato",
    product_type: "Hot",
    caffeine_level: "Medium"
  },
  {
    name: "Drip Coffee",
    price: "$2.00",
    imageSrc: "https://th.bing.com/th/id/OIP.oNDjm49G76BdYoPOUB8obwHaHa?w=171&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    imageAlt: "Classic drip coffee",
    product_type: "Iced",
    caffeine_level: "Low"
  }
];

async function seed() {
    try {
        console.log("Seeding products...");
        for (const product of products) {
            await pool.query(
                'INSERT INTO products (name, price, imageSrc, imageAlt, product_type, caffeine_level) VALUES (?, ?, ?, ?, ?, ?)',
                [product.name, product.price, product.imageSrc, product.imageAlt, product.product_type, product.caffeine_level]
            );
        }
        console.log("Seeding completed successfully!");
        process.exit(0);
    } catch (error) {
        console.error("Error seeding database:", error);
        process.exit(1);
    }
}

seed();
