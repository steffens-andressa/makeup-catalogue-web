export class Product {
    public id: number;
    public name: string;
    public brand?: string;
    public color?: string;
    public type?: string;
    public price?: number;
    public img?: string; 
    public date?: Date;

    constructor(name: string) {
        this.id = Math.round(Math.random() * 1000);
        this.name = name;
    }

    // public static clone(product: Product) {
    //     let p: Product = new Product(product.id, product.name);
    //     p.id = product.id;
    //     p.name = product.name;
    //     p.brand = product.brand;
    //     p.color = product.color;
    //     p.type = product.type;
    //     p.price = product.price;
    //     p.img = product.img;
    //     p.date = product.date;
    //     return p;
    //   }
}
