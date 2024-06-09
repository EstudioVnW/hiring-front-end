import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ProductsProps } from '../interfaces/productsProps';
import api from '../services/api';

export default function useApi() {
    const [products, setProducts] = useState<ProductsProps[] | []>([]);
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigate();

    async function getProducts() {
        setLoading(true);

        try {
            const { data: response } = await api.get('/produtos');
            setProducts(response);
        } catch (error) {
            setError(true);
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        if (error) {
            navigate('*');
        }
    }, [error, navigate]);

    return {
        products,
        error,
        loading,
    };
}
