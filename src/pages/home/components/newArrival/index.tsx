import Perfum from '../../../../assets/perfum.png';
import Ps5 from '../../../../assets/ps5.png';
import Speaker from '../../../../assets/speakers.png';
import Women from '../../../../assets/womens.png';
import BoxSubtitle from '../../../../components/boxSubtitle';
import * as S from './style';

export default function NewArrival() {
    return (
        <section>
            <BoxSubtitle.Container>
                <BoxSubtitle.Category>Destaques</BoxSubtitle.Category>
                <BoxSubtitle.Subtitle>Novas tendências</BoxSubtitle.Subtitle>
            </BoxSubtitle.Container>

            <S.ContainerNewArrivalContent>
                <S.CardArrival column="2" row="2">
                    <S.CardImage src={Ps5} alt="ps5 in game" />
                    <S.CardArrivalTitle>PlayStation 5</S.CardArrivalTitle>
                    <S.CardArrivalParagraph>
                        Versão em preto e branco do PS5 chegando à venda.
                    </S.CardArrivalParagraph>
                </S.CardArrival>

                <S.CardArrival column="2">
                    <S.CardImage src={Women} alt="ps5 in game" />
                    <S.CardArrivalTitle>Coleções Femininas</S.CardArrivalTitle>
                    <S.CardArrivalParagraph>
                        Coleções femininas em destaque que dão outra vibe.
                    </S.CardArrivalParagraph>
                </S.CardArrival>

                <S.CardArrival>
                    <S.CardImage src={Speaker} alt="ps5 in game" />
                    <S.CardArrivalTitle>Caixas de Som</S.CardArrivalTitle>
                    <S.CardArrivalParagraph>
                        Alto-falantes sem fio Amazon.
                    </S.CardArrivalParagraph>
                </S.CardArrival>

                <S.CardArrival>
                    <S.CardImage src={Perfum} alt="ps5 in game" />
                    <S.CardArrivalTitle>Perfume</S.CardArrivalTitle>
                    <S.CardArrivalParagraph>
                        GUCCI INTENSE OUD EDP.
                    </S.CardArrivalParagraph>
                </S.CardArrival>
            </S.ContainerNewArrivalContent>
        </section>
    );
}
