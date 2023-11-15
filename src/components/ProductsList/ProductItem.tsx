import React, { FC } from "react";
import { Product } from "../../models/product";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// interface ProductID {
// 	id: string;
// }

// interface ProductID {
// 	name: string;
// }

// const product: ProductID = {
// 	id: "12312",
// 	name: "sanzhar",
// };

// console.log(product);

// interface ProductItem extends ProductID {
// 	price: number;
// }

// type ProductID = {
// 	id: string;
// };

// type ProductID = {
// 	name: string
// }

// type ProductItem = ProductID & {
// 	price: number;
// };

interface ProductItemProps {
	product: Product;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				sx={{ height: 140 }}
				image="/static/images/cards/contemplative-reptile.jpg"
				title="green iguana"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{product.title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{product.category}
				</Typography>
				<Typography variant="h6">${product.price}</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Share</Button>
				<Button size="small">Learn More</Button>
			</CardActions>
		</Card>
	);
};

export default ProductItem;
