import BoxSubtitle from '../../components/boxSubtitle';
import Card from '../../components/card';
import Container from '../../components/container';
import Loading from '../../components/loading';
import useApi from '../../hooks/useApi';
import Select from './components/select';
import * as S from './style';

export default function AllProducts() {
    const {
        search,
        handleSortChange,
        noResults,
        loading,
        sortBy,
        sortOrder,
        filterProducts,
    } = useApi();

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
