import { ArrowUUpLeft, Package } from '@phosphor-icons/react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import BoxSubtitle from '../../components/boxSubtitle';
import Button from '../../components/button';
import Card from '../../components/card';
import Container from '../../components/container';
import Loading from '../../components/loading';
import useApi from '../../hooks/useApi';
import { ProductsProps } from '../../interfaces/productsProps';
import * as S from './style';

export default function Product() {
    const { products, loading } = useApi();
    const { id } = useParams();

    const product = products.filter((item) => item.id === id);
    const otherProduct = products.filter((item) => item.id !== id).slice(0, 4);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (loading) {
        return <Loading />;
    }

    return (
        <Container>
            {product.map((item) => (
                <S.ContainerProduct key={item.id}>
                    <S.ProductFigure>
                        <S.ProductImage
                            src={`${item.avatar}?${item.id}`}
                            alt={item.name}
                        />
                    </S.ProductFigure>

                    <S.ProductContent>
                        <S.ProductName>{item.name}</S.ProductName>
                        <S.ProductPrice>R$ 45,00</S.ProductPrice>
                        <S.ProductText>{item.desciption}</S.ProductText>

                        <S.ProductText>Em estoque</S.ProductText>
                        <Button padding="12px">Adicionar ao carrinho</Button>

                        <S.BoxInfos>
                            <S.InlineContent border>
                                <span>
                                    <Package size={32} />
                                </span>

                                <span>
                                    <S.ProductText>Frete Grátis</S.ProductText>
                                    <S.ProductText>
                                        Digite seu código postal para
                                        disponibilidade de entrega
                                    </S.ProductText>
                                </span>
                            </S.InlineContent>
                            <S.InlineContent>
                                <span>
                                    <ArrowUUpLeft size={32} />
                                </span>

                                <span>
                                    <S.ProductText>
                                        30 dias para devoluções
                                    </S.ProductText>
                                    <S.ProductText>
                                        Devoluções de entrega grátis em 30 dias.
                                    </S.ProductText>
                                </span>
                            </S.InlineContent>
                        </S.BoxInfos>
                    </S.ProductContent>
                </S.ContainerProduct>
            ))}

            <section>
                <BoxSubtitle.Container>
                    <BoxSubtitle.Category>Outros produtos</BoxSubtitle.Category>
                </BoxSubtitle.Container>

                <S.ContainerOtherProducts>
                    {otherProduct.map((item: ProductsProps) => (
                        <Card key={item.id} products={item} />
                    ))}
                </S.ContainerOtherProducts>
            </section>
        </Container>
    );
}
