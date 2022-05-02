import { FormGroup } from "@angular/forms";

export interface Product {
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    id: number;
    images: string[];
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
}

export interface ResponseProduct {
    limit: number;
    products: Product[];
    skip: number;
    total: number;
  }

export interface Feedback{
    name: string;
    text: string;
}

// "src/styles.sass",