export class Product {
  id: number;
  name: string;
  price: number;
  url: string;
  description: string;

  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.name = obj && obj.name || null;
    this.price = obj && obj.price || null;
    this.url = obj && obj.url || null;
    this.description = obj && obj.description  || null;
  }
}
