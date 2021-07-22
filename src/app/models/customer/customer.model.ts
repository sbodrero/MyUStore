export class Customer {
  fullName: string;
  address: string;
  creditCard: number;

  constructor(obj?: any) {
    this.fullName = obj && obj.fullName || null;
    this.address = obj && obj.address || null;
    this.creditCard = obj && obj.creditCard || null;
  }
}
