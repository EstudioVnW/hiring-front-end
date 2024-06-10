import { createGlobalStyle } from 'styled-components';

import theme from './theme';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${theme.fonts.primary};
    }

    ::-webkit-scrollbar {
        width: 12px;
    }
        
    ::-webkit-scrollbar-track {
        background: ${theme.lightForegroud}; 
    }
        
    ::-webkit-scrollbar-thumb {
        background-color: ${theme.accent}; 
        border-radius: 10px;
        border: 3px solid ${theme.lightForegroud}; 
    }
        
    ::-webkit-scrollbar-thumb:hover {
        background-color: ${theme.accentForegroud}; 
    }
        
    ::-webkit-scrollbar-thumb:vertical {
        background-color: ${theme.accent}; 
    }

    a {
        text-decoration: none;
    }
`;
