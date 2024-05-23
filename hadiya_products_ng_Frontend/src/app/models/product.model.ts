export class Product{
    private id?: string;
    private name: string;
    private price: number;
    private currency: string;
    private imageURL: string;

    constructor(name: string, price: number, currency: string, imageURL: string, id?: string){
        this.name = name;
        this.price = price;
        this.currency = currency;
        this.imageURL = imageURL;
        this.id = id;
    }

    public getId(): string | undefined {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getPrice(): number {
        return this.price;
    }

    public getCurency(): string {
        return this.currency;
    }

    public getImageURL(): string {
        return this.imageURL;
    }

}

export class Pagination{
    limit: number;
    offset: number;
    totalRecordCount: number;

    constructor(limit: number, offset: number, totalRecordCount: number) {
        this.limit = limit;
        this.offset = offset;
        this.totalRecordCount = totalRecordCount;
    }
}

export class ProductsAPIResponse {
    message: string;
    data: {
        products: [{
            id: string,
            name: string,
            price: number,
            currency: string,
            imageURL: string,
            createdAt: Date,
            updatedAt: Date
        }],
        pagination: Pagination
    };

    constructor(
        message: string,
        data:
        {
            products: [{
                id: string,
                name: string,
                price: number,
                currency: string,
                imageURL: string,
                createdAt: Date,
                updatedAt: Date
            }],
            pagination: Pagination
        }
    ){
        this.message = message;
        this.data = data;
    }
}

export class SingleProductAPIResponse {
    message: string;
    data: {
        id: string,
        name: string,
        price: number,
        currency: string,
        imageURL: string,
        createdAt: Date,
        updatedAt: Date
    };

    constructor(message: string, data: {
        id: string,
        name: string,
        price: number,
        currency: string,
        imageURL: string,
        createdAt: Date,
        updatedAt: Date
    }){
        this.message = message;
        this.data = data;
    }
}