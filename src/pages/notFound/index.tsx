import { Link } from 'react-router-dom';

import Button from '../../components/button';
import * as S from './style';

const NotFoundPage = () => {
    return (
        <S.Container>
            <S.Title>404 - Página não encontrada</S.Title>
            <S.Description>
                A página que você está procurando não existe.
            </S.Description>

            <Link to="/">
                <Button>Voltar para a página inicial</Button>
            </Link>
        </S.Container>
    );
};

export default NotFoundPage;
