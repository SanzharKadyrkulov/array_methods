import React, { FC, createContext, useContext, useState } from "react";
import { Product } from "../../models/product";
import { mockProducts } from "./mock";
import { getPageItems } from "./helper";

interface ProductContext {
	products: Product[];
	searchItems: Product[];
	onePageItems: Product[];
	currentPage: number;
	pageTotalCount: number;
	onSearch: (searchStr: string) => void;
	changePage: (page: number) => void;
}

const productContext = createContext<ProductContext>({} as ProductContext);

export function useProductContext(): ProductContext {
	return useContext(productContext);
}

interface ContextProps {
	children: React.ReactNode;
}

// const [counter, setCounter] = useState(1);

// function increment(): void {
// 	setCounter(counter + 1);
// 	setCounter(counter + 1);
// 	setCounter(counter + 1);
// }

// function increment(): void {
// 	setCounter((prev) => prev + 1);
// 	setCounter((prev) => prev + 1);
// 	setCounter((prev) => prev + 1);
// }

// console.log(counter);
const LIMIT = 2;

const ProductsContextProvider: FC<ContextProps> = ({ children }) => {
	const [products] = useState(mockProducts);
	const [searchItems, setSearchItems] = useState(products);
	const [onePageItems, setOnePageItems] = useState(searchItems.slice(0, LIMIT));
	const [currentPage, setCurrentPage] = useState(1);
	const pageTotalCount = searchItems.length / LIMIT;

	function onSearch(searchStr: string): void {
		setSearchItems(
			products.filter((item) =>
				item.title.toLowerCase().includes(searchStr.toLowerCase())
			)
		);

		changePage(1);
	}

	function changePage(page: number): void {
		setCurrentPage(page);
		setOnePageItems(getPageItems(searchItems, page, LIMIT));
	}

	const value = {
		products,
		searchItems,
		onePageItems,
		currentPage,
		pageTotalCount,
		onSearch,
		changePage,
	};

	return (
		<productContext.Provider value={value}>{children}</productContext.Provider>
	);
};

export default ProductsContextProvider;
