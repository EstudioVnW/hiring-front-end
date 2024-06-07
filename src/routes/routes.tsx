import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';

import DefaultLayout from '../layout/defaultLayout';
import Home from '../pages/home';

const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
        </Route>,
    ),
);

export default Router;
