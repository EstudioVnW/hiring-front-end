import { useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import { CartContext } from '../contexts/cartContext';
import { ProductValues, ProductsProps } from '../interfaces/productsProps';
import api from '../services/api';

export default function useApi() {
    const [products, setProducts] = useState<ProductsProps[] | []>([]);
    const [product, setProduct] = useState<ProductValues | null>(null);
    const [filterProducts, setFilterProducts] = useState<ProductsProps[]>([]);
    const [noResults, setNoResults] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigate();
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get('search') || '';
    const sortOrder = searchParams.get('sortOrder') || '';
    const sortBy = searchParams.get('sortBy') || '';

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

    const getProduct = useCallback(async () => {
        try {
            const { data } = await api.get(`/produtos/${id}`);
            const productWithQuantity = { ...data, quantity: 1 };
            setProduct(productWithQuantity);
        } catch (error) {
            console.error(error);
        }
    }, [id]);

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        if (error) {
            navigate('*');
        }
    }, [error, navigate]);

    useEffect(() => {
        if (id) {
            getProduct();
            window.scrollTo(0, 0);
        }
    }, [id, getProduct]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        async function handleFilterAndSort() {
            const filteredProducts = products.filter((item) => {
                if (search) {
                    const searchLower = search.toLowerCase();
                    const nameMatch = item.name
                        .toLowerCase()
                        .includes(searchLower);
                    const createdAtMatch = item.createdAt.includes(search);
                    return nameMatch || createdAtMatch;
                }
                return true;
            });

            filteredProducts.sort((a, b) => {
                let valueA, valueB;

                if (sortBy === 'name') {
                    valueA = a.name;
                    valueB = b.name;
                    return sortOrder === 'asc'
                        ? valueA.localeCompare(valueB)
                        : valueB.localeCompare(valueA);
                }

                if (sortBy === 'date') {
                    valueA = new Date(a.createdAt).getTime();
                    valueB = new Date(b.createdAt).getTime();
                    return sortOrder === 'asc'
                        ? valueA - valueB
                        : valueB - valueA;
                }

                return 0;
            });

            setFilterProducts(filteredProducts);
            setNoResults(search !== '' && filteredProducts.length === 0);
        }

        handleFilterAndSort();
    }, [products, search, sortOrder, sortBy]);

    function handleSortChange(sort: string, order: string) {
        setSearchParams({ search, sortBy: sort, sortOrder: order });
    }

    const otherProducts = products
        .filter((item) => item.id !== Number(id))
        .slice(0, 4);

    return {
        search,
        sortBy,
        sortOrder,
        products,
        product,
        filterProducts,
        noResults,
        otherProducts,
        addToCart,
        handleSortChange,
        error,
        loading,
    };
}
