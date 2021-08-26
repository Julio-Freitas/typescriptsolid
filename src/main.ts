import { Messaging } from './srp/services/messaging';
import { Order } from './srp/entities/order';
import { Persistent } from './srp/services/persistent';
import { ShoppingCart } from './srp/entities/shopping-cart';

const shopp = new ShoppingCart();
const message = new Messaging();
const persistent = new Persistent();
const order = new Order(shopp, message, persistent);

shopp.additem({ name: 'Caderno', price: 100 });
shopp.additem({ name: 'Livro', price: 10 });
shopp.additem({ name: 'Lapis', price: 90 });

console.log(shopp.total());
console.log(order.orderStatus);
