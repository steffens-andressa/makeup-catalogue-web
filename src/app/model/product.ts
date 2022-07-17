export class Product {
    public id: Number;
    public name: string;
    public brand: string;
    public color: string;
    public type: string;
    public price: number; 
    public date: Date;

    constructor(id: number, name: string, brand: string, color: string, type: string, price: number, date: Date) {
        this.id = Math.round(Math.random() * 1000);
        this.name = name;
        this.brand = brand;
        this.color = color;
        this.type = type;
        this.price = price;
        this.date = new Date();
    }
}
