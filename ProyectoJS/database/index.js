const db_cash = 10000;

const db_products = [
    {id: 1, name: 'Manzana', stored: 1500, price: 15},
    {id: 2, name: 'Pera', stored: 1000, price: 13},
    {id: 3, name: 'Sandia', stored: 2500, price: 18},
];

const db_sales = [
    {
        productId: 1,
        date: new Date(2021,08,18),
        quantity: 100,
        totalPrice: 1500,
    },
];

const db_purchase = [
    {
        productId: 2,
        date: new Date(2021,08,30),
        quantity: 50,
        price: 7.50,
        totalPrice: 375
    },
];