import { Messaging } from './ocp/services/messaging';
import { Persistent } from './ocp/services/persistent';
import { ShoppingCart } from './ocp/entities/classes/shopping-cart';
import { Order } from './ocp/entities/classes/order';
import { NoDiscount } from './ocp/entities/classes/discount';

const noDiscount = new NoDiscount();
const shopp = new ShoppingCart(noDiscount);
const message = new Messaging();
const persistent = new Persistent();

const order = new Order(shopp, message, persistent);

shopp.additem({ name: 'Caderno', price: 80 });
shopp.additem({ name: 'Livro', price: 10 });
shopp.additem({ name: 'Lapis', price: 10 });

console.log(shopp.totalWhithDiscount());
console.log(order.orderStatus);
