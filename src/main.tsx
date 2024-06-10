import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { CartProvider } from './contexts/cartContext.tsx';
import router from './routes/routes.tsx';
import { GlobalStyle } from './styles/globalStyle.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <CartProvider>
            <RouterProvider router={router} />
            <GlobalStyle />
        </CartProvider>
    </React.StrictMode>,
);
