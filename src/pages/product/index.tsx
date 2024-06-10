import { ArrowUUpLeft, Package } from '@phosphor-icons/react';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import BoxSubtitle from '../../components/boxSubtitle';
import Button from '../../components/button';
import Card from '../../components/card';
import Container from '../../components/container';
import Loading from '../../components/loading';
import { CartContext } from '../../contexts/cartContext';
import useApi from '../../hooks/useApi';
import { ProductsProps } from '../../interfaces/productsProps';
import api from '../../services/api';
import * as S from './style';

interface ProductValues {
    id: number;
    name: string;
    price: number;
    description: string;
    avatar: string;
    quantity: number;
}

export default function Product() {
    const { products, loading } = useApi();
    const [product, setProduct] = useState<ProductValues | null>(null);
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);

    async function getProduct() {
        try {
            const { data } = await api.get(`/produtos/${id}`);

            const productWithQuantity = { ...data, quantity: 1 };

            setProduct(productWithQuantity);
        } catch (error) {
            console.error(error);
        }
    }

    const otherProducts = products
        .filter((item) => item.id !== Number(id))
        .slice(0, 4);

    useEffect(() => {
        getProduct();
        window.scrollTo(0, 0);
    }, [id]);

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
                    <S.ProductPrice>R$ 45,00</S.ProductPrice>
                    <S.ProductText>{product.description}</S.ProductText>

                    <S.ProductText>Em estoque</S.ProductText>
                    <Button padding="12px" onClick={() => addToCart(product)}>
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
