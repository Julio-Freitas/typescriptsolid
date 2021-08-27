import { OrderStatus } from './interface/order-status';
import { ShoppingCart } from './shopping-cart';
import { Persistent } from '../../services/persistent';
import { Messaging } from '../../services/messaging';

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
