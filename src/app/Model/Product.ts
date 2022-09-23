export class Product {
   constructor(
      public productId: number,
      public productName: string,
      public productPrice: number,
      public productDescription: string,
      public productImgPath: string,
      public productType: number,
      public brandId: number,
      public categoryId: number,

   ) {

   }
}