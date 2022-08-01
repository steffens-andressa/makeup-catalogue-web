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
    
}
