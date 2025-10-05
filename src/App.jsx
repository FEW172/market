
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";

import { createProducts } from "./api/products/productsapi";

import './App.css'

function App() {

    createProducts();

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default App
