import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import BoxSubtitle from '../../components/boxSubtitle';
import Card from '../../components/card';
import Container from '../../components/container';
import Loading from '../../components/loading';
import useApi from '../../hooks/useApi';
import { ProductsProps } from '../../interfaces/productsProps';
import Select from './components/select';
import * as S from './style';

export default function AllProducts() {
    const { products, loading } = useApi();
    const [filterProducts, setFilterProducts] =
        useState<ProductsProps[]>(products);
    const [noResults, setNoResults] = useState<boolean>(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get('search') || '';
    const sortOrder = searchParams.get('sortOrder') || '';
    const sortBy = searchParams.get('sortBy') || '';

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

    if (loading) {
        return <Loading />;
    }

    if (search && noResults) {
        return (
            <Container>
                <h4>Nenhum resultado encontrado para: {search}</h4>
            </Container>
        );
    }

    return (
        <Container>
            <BoxSubtitle.Container>
                <BoxSubtitle.Category>Todos os produtos</BoxSubtitle.Category>
                <BoxSubtitle.Subtitle>
                    Encontre todos os produtos
                </BoxSubtitle.Subtitle>
            </BoxSubtitle.Container>

            <S.ContainerContent>
                <Select
                    onSortChange={handleSortChange}
                    sortBy={sortBy}
                    sortOrder={sortOrder}
                />

                <S.ContainerCard>
                    {filterProducts.map((item) => (
                        <Card key={item.id} products={item} />
                    ))}
                </S.ContainerCard>
            </S.ContainerContent>
        </Container>
    );
}
