import { Outlet } from 'react-router-dom';

import Footer from '../components/footer';
import Header from '../components/header';

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
