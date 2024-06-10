import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';

import DefaultLayout from '../layout/defaultLayout';
import About from '../pages/about';
import AllProducts from '../pages/allProducts';
import CartPage from '../pages/cart';
import Home from '../pages/home';
import Product from '../pages/product';

const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/all" element={<AllProducts />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/about" element={<About />} />
        </Route>,
    ),
);

export default Router;
