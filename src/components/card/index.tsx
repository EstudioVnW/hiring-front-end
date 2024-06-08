import { Star } from '@phosphor-icons/react';

import * as S from './style';

export default function Card() {
    return (
        <S.ContainerCard>
            <figure>
                <S.CardImage
                    src="https://loremflickr.com/cache/resized/65535_53180561317_fed36b78e9_c_640_480_nofilter.jpg"
                    alt="asdasd"
                />
            </figure>

            <S.CardBoxInfo>
                <S.CardText>Breed Dry Dog Food</S.CardText>

                <S.CardBoxPrice>
                    <S.CardText color="#DB4444">R$ 100</S.CardText>
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
    );
}
