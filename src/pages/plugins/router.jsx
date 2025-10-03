import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import ErrorPage from "../error-page";
import MainPage from "../main-page";
import ProductShowcase from "../product-showcase/ProductShowcase";
import ShoppingCart from "../../components/shopping-cart/ShoppingCart";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true, // <Link to="/">TODOS</Link>
                element: <MainPage />,
                //loader: loadTodos
            },
            {
                path: "/product-showcase", // <Link to="/todos/filtered">FILTERED TODO</Link>
                element: <ProductShowcase />,
                //loader: loadTodos
            },
            {
                path: "/shopping-cart", // <Link to="/todos/new">CREATE TODO</Link>
                element: <ShoppingCart />,
                //action: createTodoAction
            },
        ]
    }
];

export const router = createBrowserRouter(routes);