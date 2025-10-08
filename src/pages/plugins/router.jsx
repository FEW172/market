import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import ErrorPage from "../error-page";
import MainPage from "../main-page";
import ProductShowcase from "../product-showcase/ProductShowcase";
import ShoppingCart from "../shopping-cart/ShoppingCart";
import ProductPage from "../product-showcase/ProductPage";
import { loadProductById, loadProducts, loadProductsTop5Rating, loadProductsByCategory } from "../../api/products/loaders"

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <MainPage />,
                loader: loadProductsTop5Rating
            },
            {
                path: "/product-showcase",
                element: <ProductShowcase />,
                loader: loadProducts
            },
            {
                path: "/shopping-cart",
                element: <ShoppingCart />,
                //loader: loadShoppingCart
            },
            {
                path: "/product/:id",
                element: <ProductPage />,
                loader: loadProductById
            },
            {
                path: "/products/:category",
                element: <ProductShowcase />,
                loader: loadProductsByCategory
            }
        ]
    }
];

export const router = createBrowserRouter(routes);