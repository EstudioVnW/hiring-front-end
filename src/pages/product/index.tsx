import { ArrowUUpLeft, Package } from '@phosphor-icons/react';
import { useEffect } from 'react';

import Speakers from '../../assets/speakers.png';
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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <Container>
            <S.ContainerProduct>
                <S.ProductFigure>
                    <S.ProductImage src={Speakers} alt="speaker" />
                </S.ProductFigure>

                <S.ProductContent>
                    <S.ProductName>Speaker</S.ProductName>
                    <S.ProductPrice>R$ 45,00</S.ProductPrice>
                    <S.ProductText>
                        PlayStation 5 Controller Skin High quality vinyl with
                        air channel adhesive for easy bubble free install & mess
                        free removal Pressure sensitive.
                    </S.ProductText>

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

            <section>
                <BoxSubtitle.Container>
                    <BoxSubtitle.Category>Outros produtos</BoxSubtitle.Category>
                </BoxSubtitle.Container>

                <S.ContainerOtherProducts>
                    {products.slice(0, 4).map((item: ProductsProps) => (
                        <Card key={item.id} products={item} />
                    ))}
                </S.ContainerOtherProducts>
            </section>
        </Container>
    );
}
