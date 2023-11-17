import { ProductCategory } from "../../models/product";

export const mockProducts = [
	{
		id: 1,
		title: "Men's T-Shirt",
		price: 19.99,
		category: ProductCategory.men,
	},
	{
		id: 2,
		title: "Women's Dress",
		price: 49.99,
		category: ProductCategory.women,
	},
	{
		id: 3,
		title: "Children's Sneakers",
		price: 29.99,
		category: ProductCategory.children,
	},
	{
		id: 4,
		title: "Men's Jeans",
		price: 39.99,
		category: ProductCategory.men,
	},
	{
		id: 5,
		title: "Women's Handbag",
		price: 34.99,
		category: ProductCategory.women,
	},
	{
		id: 6,
		title: "Children's Pajamas",
		price: 14.99,
		category: ProductCategory.children,
	},
];
