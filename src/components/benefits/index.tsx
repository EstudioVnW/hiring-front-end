import { Headset, SealCheck, Truck } from '@phosphor-icons/react';

import * as S from './style';

export default function Benefits() {
    return (
        <S.ContainerBenefits>
            <S.CardBenefits>
                <S.CardBoxIcon>
                    <Truck size={32} color="#fff" />
                </S.CardBoxIcon>

                <S.CardBenefitsTitle>
                    ENTREGA GRATUITA E RÁPIDA
                </S.CardBenefitsTitle>
                <S.CardBenefitsText>
                    Entrega gratuita para todos os pedidos acima de R$ 140
                </S.CardBenefitsText>
            </S.CardBenefits>
            <S.CardBenefits>
                <S.CardBoxIcon>
                    <Headset size={32} color="#fff" />
                </S.CardBoxIcon>

                <S.CardBenefitsTitle>
                    ATENDIMENTO AO CLIENTE
                </S.CardBenefitsTitle>
                <S.CardBenefitsText>
                    Suporte ao cliente amigável 24 horas por dia, 7 dias por
                    semana
                </S.CardBenefitsText>
            </S.CardBenefits>
            <S.CardBenefits>
                <S.CardBoxIcon>
                    <SealCheck size={32} color="#fff" />
                </S.CardBoxIcon>

                <S.CardBenefitsTitle>DEVOLUÇÃO DE DINHEIRO</S.CardBenefitsTitle>
                <S.CardBenefitsText>
                    Devolvemos o dinheiro em 7 dias
                </S.CardBenefitsText>
            </S.CardBenefits>
        </S.ContainerBenefits>
    );
}
