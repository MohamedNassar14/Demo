export interface Products {
    id:string;
    subCategoryId:string;
    name:string;
    price:string;
    description:string;
    businessCode:string;
    kind:string;
    stockQuantity:number;
    sizes_H:string;
    sizes_W:string;
    sizes_L:string;
    rawMaterials:string;
    mainImageUrl:string;
    brandImageUrl:string;
    brandUrl:string;
    generalNotes:string;
    designNotes:string;
    lastEdit:string;
    createdAt:string;
    updatedAt:string;
}

export interface ProductsResponse {
message:string;
data: Products[];
}

export interface ProductDetails {
id: string;
subCategoryId: string;
name: string;
price: string;
description: string;
businessCode: string;
kind: string;
stockQuantity: number;
sizes_H: string;
sizes_W: string;
sizes_L: string;
rawMaterials: string;
mainImageUrl: string;
brandImageUrl: string;
brandUrl: string;
generalNotes: string;
designNotes: string;
lastEdit: string;
createdAt: string;
updatedAt: string;
otherImages: {
  id: string;
  productId: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}[];
}

export interface ProductResponse {
message: string;
data: ProductDetails;
}

export interface AllProductsResponse {
    message: string;
    data: ProductDetails[];
}
