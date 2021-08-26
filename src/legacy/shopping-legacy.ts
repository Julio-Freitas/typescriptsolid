type CartItem = { name: string; price: number };

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private orderStatus: 'open' | 'closed' = 'open';

  additem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('seu carrrinho está vazio');
      return;
    }
    this.orderStatus = 'closed';
    this.sendMenssage('Pedido recebido');
    this.savedOrder();
    this.clear();
  }

  sendMenssage(msg: string): void {
    console.log(`mensagem enviada: ${msg}`);
  }

  savedOrder(): void {
    console.log(`Peido salvo com sucesso`);
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    this._items.length = 0;
  }
}

const shopp = new ShoppingCart();

shopp.additem({ name: 'Caderno', price: 100 });
shopp.additem({ name: 'Livro', price: 10 });
shopp.additem({ name: 'Lapis', price: 90 });

console.log(shopp.total());
