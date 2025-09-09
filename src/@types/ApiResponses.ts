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

export interface User {
    id:         number;
    email:      string;
    password:   string;
    name:       string;
    role:       'admin' | 'customer' | 'seller'; // or import Role if defined elsewhere
    avatar:     string;
    creationAt: Date;
    updatedAt:  Date;
}
