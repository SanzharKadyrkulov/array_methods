import React, { FC, createContext, useContext, useState } from "react";
import { Product } from "../../models/product";
import { mockProducts } from "./mock";

interface ProductContext {
	products: Product[];
}

const productContext = createContext<ProductContext>({} as ProductContext);

export function useProductContext(): ProductContext {
	return useContext(productContext);
}

interface ContextProps {
	children: React.ReactNode;
}

const ProductsContextProvider: FC<ContextProps> = ({ children }) => {
	const [products, setProducts] = useState(mockProducts);

	const value = {
		products,
	};

	return (
		<productContext.Provider value={value}>{children}</productContext.Provider>
	);
};

export default ProductsContextProvider;
