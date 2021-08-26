import { OrderStatus } from './interface/order-status';
import { Messaging } from '../services/messaging';
import { Persistent } from '../services/persistent';
import { ShoppingCart } from './shopping-cart';

export class Order {
  private _orderStatus: OrderStatus = 'open';
  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistent: Persistent
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('seu carrrinho está vazio');
      return;
    }
    this._orderStatus = 'closed';
    this.messaging.sendMenssage('Pedido recebido');
    this.persistent.savedOrder();
    this.cart.clear();
  }
}
