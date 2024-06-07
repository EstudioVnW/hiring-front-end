import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import router from './routes/routes.tsx';
import { GlobalStyle } from './styles/globalStyle.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
        <GlobalStyle />
    </React.StrictMode>,
);
