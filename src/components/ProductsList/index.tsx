import React from "react";
import { Box, Container } from "@mui/material";
import { useProductContext } from "../../contexts/ProductsContext";
import ProductItem from "./ProductItem";

const ProductsList = () => {
	const { products } = useProductContext();

	return (
		<Container>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					flexWrap: "wrap",
					rowGap: "20px",
					mt: 3,
				}}
			>
				{products.map((product) => (
					<ProductItem key={product.id} product={product} />
				))}
			</Box>
		</Container>
	);
};

export default ProductsList;
