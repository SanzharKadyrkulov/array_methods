import React from "react";
import { Box, Container, Pagination } from "@mui/material";
import { useProductContext } from "../../contexts/ProductsContext";
import ProductItem from "./ProductItem";

const ProductsList = () => {
	const { onePageItems, pageTotalCount, currentPage, changePage } =
		useProductContext();

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
				{onePageItems.map((product) => (
					<ProductItem key={product.id} product={product} />
				))}
			</Box>
			<Box sx={{ maxWidth: "max-content", margin: "20px auto" }}>
				<Pagination
					onChange={(e, page) => changePage(page)}
					count={pageTotalCount}
					page={currentPage}
					color="primary"
				/>
			</Box>
		</Container>
	);
};

export default ProductsList;
