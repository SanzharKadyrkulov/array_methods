export interface Product {
	id: number;
	title: string;
	price: number;
	category: ProductCategory;
}

export enum ProductCategory {
	men = "men",
	women = "women",
	children = "children",
}
