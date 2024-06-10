import { Link } from 'react-router-dom';

import BoxSubtitle from '../../../../components/boxSubtitle';
import Button from '../../../../components/button';
import Card from '../../../../components/card';
import Loading from '../../../../components/loading';
import useApi from '../../../../hooks/useApi';
import { ProductsProps } from '../../../../interfaces/productsProps';
import * as S from './style';

export default function OurProducts() {
    const { products, loading } = useApi();

    if (loading) {
        return <Loading />;
    }

    return (
        <S.ContainerOurProducts>
            <BoxSubtitle.Container>
                <BoxSubtitle.Category>Nossos Produtos</BoxSubtitle.Category>
                <BoxSubtitle.Subtitle>
                    Explore nossos produtos
                </BoxSubtitle.Subtitle>
            </BoxSubtitle.Container>

            <S.ContainerCard>
                {products.slice(0, 4).map((item: ProductsProps) => (
                    <Card key={item.id} products={item} />
                ))}
            </S.ContainerCard>

            <S.ContainerButton>
                <Link to="/all">
                    <Button>Ver Todos</Button>
                </Link>
            </S.ContainerButton>
        </S.ContainerOurProducts>
    );
}
