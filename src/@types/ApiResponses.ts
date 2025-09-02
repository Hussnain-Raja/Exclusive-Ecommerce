export interface Category {
    id:         number;
    name:       string;
    slug:       string;
    image:      string;
    creationAt: Date;
    updatedAt:  Date;
}

export interface Iproducts {
    id:          number;
    title:       string;
    slug:        string;
    price:       number;
    description: string;
    category:    Category;
    images:      string[];
    creationAt:  Date;
    updatedAt:   Date;
}
