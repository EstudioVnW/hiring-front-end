import { ArrowUUpLeft, Package } from '@phosphor-icons/react';
import { toast } from 'react-toastify';

import BoxSubtitle from '../../components/boxSubtitle';
import Button from '../../components/button';
import Card from '../../components/card';
import Container from '../../components/container';
import Loading from '../../components/loading';
import useApi from '../../hooks/useApi';
import { ProductsProps } from '../../interfaces/productsProps';
import * as S from './style';

export default function Product() {
    const { product, loading, addToCart, otherProducts } = useApi();

    function addCart() {
        if (product) {
            addToCart(product);
            toast.success('Produto adicionado ao carrinho!');
        }
    }

    if (loading) {
        return <Loading />;
    }

    if (!product) {
        return null;
    }

    return (
        <Container>
            <S.ContainerProduct key={product.id}>
                <S.ProductFigure>
                    <S.ProductImage
                        src={`${product.avatar}?${product.id}`}
                        alt={product.name}
                    />
                </S.ProductFigure>

                <S.ProductContent>
                    <S.ProductName>{product.name}</S.ProductName>
                    <S.ProductPrice>R$ {product.price}</S.ProductPrice>
                    <S.ProductText>{product.description}</S.ProductText>

                    <S.ProductText>Em estoque</S.ProductText>
                    <Button padding="12px" onClick={addCart}>
                        Adicionar ao carrinho
                    </Button>

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
                    {otherProducts.map((item: ProductsProps) => (
                        <Card key={item.id} products={item} />
                    ))}
                </S.ContainerOtherProducts>
            </section>
        </Container>
    );
}
