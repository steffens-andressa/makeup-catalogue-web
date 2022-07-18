// import { Constants } from './constants';
// import { Product } from '../model/product';

// export class Shared {
//   constructor() {}

//   /**
// 	Cadastra um usuário default para funcionamento do login.
// 	Só realiza o cadastro caso o usuário ainda não esteja salvo no WebStorage.
// */
//   public static initializeWebStorage(): void {
//     if (localStorage.getItem(Constants.PRODUCTS_KEY) != null) {
//       return;
//     }

//     //usuário definido na forma literal
//     let p1 = new Product("Anome");
//     let p2 = new Product("Bnome");
//     let p3 = new Product("Cnome");
//     localStorage.setItem(Constants.PRODUCTS_KEY, JSON.stringify(p1));
//     localStorage.setItem(Constants.PRODUCTS_KEY, JSON.stringify(p2));
//     localStorage.setItem(Constants.PRODUCTS_KEY, JSON.stringify(p3));
//   }
// }