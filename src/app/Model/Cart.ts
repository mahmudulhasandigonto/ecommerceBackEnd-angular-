export class Cart {
   constructor(
      public cartId: number,
      public productId: number,
      public productName: string,
      public productPrice: number,
      public quantity: number,
      public imageUrl: string

   ) {
   }
}