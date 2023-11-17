import { Product } from "../../models/product";

export function getPageItems(
	products: Product[],
	page: number, //? 5
	limit: number //? 2
): Product[] {
	return products.slice(page - 1 * limit, limit * page);
}
