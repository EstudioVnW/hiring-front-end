import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

import Container from '../../components/container';
import * as S from './style';

export default function About() {
    return (
        <Container>
            <S.ContainerContent>
                <S.Title>Sobre mim</S.Title>
                <S.Paragraph>
                    Sou o Bruno, tenho 18 anos. Desenvolvedor Front-end
                    especializado em Next, React, JavaScript, TypeScript, SASS,
                    Tailwind CSS, HTML, CSS, Git, Styled-components, Storybook,
                    Jest, Context. Experiência comprovada na criação de produtos
                    de alta qualidade para setores de saúde, assessoria, varejo
                    e engenharia. Mentor voluntário para desenvolvedores em
                    formação. Sempre promovendo um ambiente colaborativo e
                    resolvendo impedimentos de forma proativa. Paixão por
                    entregar soluções eficazes e inovadoras, sempre focado em
                    otimizar processos e fortalecer relacionamentos positivos no
                    time.
                </S.Paragraph>

                <S.Subtitle>Conquistas que me orgulho:</S.Subtitle>
                <ul>
                    <S.List>
                        Conduzi três palestras bem-sucedidas no Vai na Web,
                        contribuindo para a formação de mais de 60
                        desenvolvedores ajudei promovendo habilidades essenciais
                        para a entrada no mercado de trabalho.
                    </S.List>
                    <S.List>
                        Atuei em um projeto open-source na SouJunior como
                        Desenvolvedor Front-end, refatorando o código e ajudando
                        outros desenvolvedores a superar impedimentos, e estamos
                        prestes do lançamento que será dia 1 de Julho.
                    </S.List>
                    <S.List>
                        Como freelancer, lancei um projeto para um cliente em
                        apenas dois dias, permitindo-lhe apresentar sua
                        plataforma e obter investimentos para sua empresa.
                    </S.List>
                    <S.List>
                        Acompanhei 7 desenvolvedores no projeto WebSocial que
                        fundamos durante o curso Vai na Web, ensinando
                        tecnologias, habilidades de posicionamento em reuniões e
                        juntos lançamos cinco projetos voluntários para pequenos
                        empreendedores, ajudando-os a se reposicionarem no
                        mercado digital.
                    </S.List>
                </ul>

                <S.SocialBox>
                    <a
                        href="https://github.com/brunowzz"
                        target="_blank"
                        aria-label="Link para o GitHub"
                    >
                        <GithubLogo size={32} color="#000" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/brunobarreiras/"
                        target="_blank"
                        aria-label="Link para o Linkedin"
                    >
                        <LinkedinLogo size={32} color="#000" />
                    </a>
                </S.SocialBox>
            </S.ContainerContent>
        </Container>
    );
}
