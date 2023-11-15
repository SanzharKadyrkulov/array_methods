import React from "react";

const App = () => {
	//! forEach
	// const arr = [1, 2, 3, 4, 5, 6];

	// const result = arr.forEach((item, index, array) => {
	// 	console.log(item, index, array);
	// });

	// console.log(result); //! undefined

	//! map
	// const arr = [1, 2, 3, 4, 5, 6];

	// const result = arr.map((item) => {
	// 	return item ** 2;
	// });

	// console.log(result);

	//! filter

	// const filteredArray = arr.filter((item) => item % 2 === 0);

	// console.log(filteredArray);

	//! some

	// const products = [
	// 	{
	// 		id: 1,
	// 		name: "Iphone",
	// 	},
	// 	{
	// 		id: 2,
	// 		name: "Xiaomi",
	// 	},
	// 	{
	// 		id: 3,
	// 		name: "Samsung",
	// 	},
	// ];

	// const cartProducts = [
	// 	{
	// 		id: 1,
	// 		name: "Iphone",
	// 	},
	// 	{
	// 		id: 3,
	// 		name: "Samsung",
	// 	},
	// ];

	// function isAlreadyInCart(id: number) {
	// 	const res = cartProducts.some((item) => item.id === id);

	// 	return res;
	// }

	// const arr = [{ name: "Elena" }, { name: "John" }];

	// const res = arr.some((item) => item.name === "John");

	// console.log(res);

	// ! every

	// const fruits = ["apple", "banana", "grape", "abc"];

	// const res = fruits.every((item) => item.length >= 5);

	// console.log(res);

	//! reduce

	// const arr = [1, 2, 3, 5, 6];

	// //                                     1      2
	// const res = arr.reduce((acc, item) => acc + item);

	// console.log(res);

	// const products = [
	// 	{
	// 		id: 1,
	// 		name: "Iphone",
	// 		price: 800,
	// 	},
	// 	{
	// 		id: 2,
	// 		name: "Xiaomi",
	// 		price: 400,
	// 	},
	// 	{
	// 		id: 3,
	// 		name: "Samsung",
	// 		price: 600,
	// 	},
	// ];

	//                                  1200
	// const totalPrice = products.reduce((acc, item, index, array) => {
	// 	return acc + item.price;
	// }, 0);
	// const newArr = products.reduce((acc, item, index, array) => {
	// 	return [...acc, item.name];
	// }, []);

	// console.log(newArr);

	// const fruits = ["apple", "banana", "grape", "abc"];

	// const obj = fruits.reduce((acc, item) => {
	// 	return {
	// 		...acc,
	// 		[item]: item.length,
	// 	};
	// }, {});

	// console.log(obj);

	return (
		<div>
			{/* some */}
			{/* {products.map((item) => (
				<div style={{ border: "1px solid black", margin: "15px" }}>
					<p>{item.name}</p>
					<p>{isAlreadyInCart(item.id) ? "in cart" : "not yet"}</p>
				</div>
			))} */}
		</div>
	);
};

export default App;
