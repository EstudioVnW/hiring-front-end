import { Star } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

import { CardProps } from './interface';
import * as S from './style';

export default function Card({ products }: CardProps) {
    return (
        <Link to={`/products/${products.id}`}>
            <S.ContainerCard>
                <figure>
                    <S.CardImage
                        src={`${products.avatar}?${products.id}`}
                        alt={`Imagem do produto: ${products.name}`}
                    />
                </figure>

                <S.CardBoxInfo>
                    <S.CardText>{products.name}</S.CardText>
                    <S.CardBoxPrice>
                        <S.CardText color="#DB4444">
                            R$ {products.price}
                        </S.CardText>
                        <span>
                            <Star weight="fill" fill="#FFAD33" size={16} />
                            <Star weight="fill" fill="#FFAD33" size={16} />
                            <Star weight="fill" fill="#FFAD33" size={16} />
                            <Star weight="fill" fill="#FFAD33" size={16} />
                            <Star weight="fill" fill="#FFAD33" size={16} />
                        </span>
                        <S.CardText size="14px" opacity="0.5">
                            (35)
                        </S.CardText>
                    </S.CardBoxPrice>
                </S.CardBoxInfo>
            </S.ContainerCard>
        </Link>
    );
}
