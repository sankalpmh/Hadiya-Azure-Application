import { Product, ProductsAPIResponse } from "../models/product.model";

export function productsAPIResponseMapper(response: [{
    id: string,
    name: string,
    price: number,
    currency: string,
    imageURL: string,
    createdAt: Date,
    updatedAt: Date
}]): Product[]{
    const products: Product[] = [];
    response.forEach((product, index) => {
        products.push(new Product(
            product.name,
            product.price,
            product.currency,
            product.imageURL,
            product.id
        ));
    })
    return products;
}

export function SingleProductResponseMapper(response : {
    id: string,
    name: string,
    price: number,
    currency: string,
    imageURL: string,
    createdAt: Date,
    updatedAt: Date
}): Product{
    return new Product(
        response.name,
        response.price,
        response.currency,
        response.imageURL,
        response.id
    );
}