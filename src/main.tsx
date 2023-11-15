import React from "react";
import ReactDOM from "react-dom/client";
import ProductsContextProvider from "./contexts/ProductsContext/index.tsx";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<ProductsContextProvider>
		<App />
	</ProductsContextProvider>
);
