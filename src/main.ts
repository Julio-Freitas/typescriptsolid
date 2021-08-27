import { Messaging } from './isp/services/messaging';
import { Persistent } from './isp/services/persistent';
import { ShoppingCart } from './isp/entities/classes/shopping-cart';
import { Order } from './isp/entities/classes/order';
import { NoDiscount } from './isp/entities/classes/discount';
import { EntrerpriseCustomer } from './isp/entities/classes/custumer';

const noDiscount = new NoDiscount();
// const individualCustomer = new IndidualCustomer(
//   'Julio',
//   'Cesar',
//   '01452337667'
// );

const company = new EntrerpriseCustomer('Letras', '0000.000-0001');
const shopp = new ShoppingCart(noDiscount);
const message = new Messaging();
const persistent = new Persistent();

const order = new Order(shopp, message, persistent, company);

shopp.additem({ name: 'Caderno', price: 80 });
shopp.additem({ name: 'Livro', price: 10 });
shopp.additem({ name: 'Lapis', price: 10 });

order.checkout();
