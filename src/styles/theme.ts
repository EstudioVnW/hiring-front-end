const colors = {
    dark: '#000',
    light: '#fff',
    lightForegroud: '#F5F5F5',
    accent: '#DB4444',
    accentForegroud: '#B53838',
};

const fonts = {
    weight: {
        extraLight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
    },
    primary: '"Poppins", sans-serif',
};

const theme = {
    fonts,
    background: colors.light,
    ...colors,
};

export default theme;
