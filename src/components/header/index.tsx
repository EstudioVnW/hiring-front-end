import { List, MagnifyingGlass, ShoppingCart, X } from '@phosphor-icons/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { navLinks } from '../../mocks/navLinks';
import * as S from './style';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <S.Header>
            <S.WinterPromoSection>
                <S.PromoText>
                    Promoção de inverno para todos os trajes de frio e entrega
                    expressa grátis - OFF 50%!
                </S.PromoText>
            </S.WinterPromoSection>

            <S.HeaderSection>
                <S.BoxLinks>
                    <Link to="/">
                        <S.Title>Exlusive</S.Title>
                    </Link>

                    <S.HeaderNav menuOpen={menuOpen}>
                        {navLinks.map((item) => (
                            <Link to={item.link} key={item.name}>
                                {item.name}
                            </Link>
                        ))}
                    </S.HeaderNav>

                    <S.MenuButton onClick={toggleMenu}>
                        {menuOpen ? <X size={32} /> : <List size={32} />}
                    </S.MenuButton>

                    <S.HeaderBoxSearch>
                        <S.SearchBar>
                            <S.InputSearch
                                type="text"
                                placeholder="O que você está procurando?"
                            />
                            <S.BtnTransparent search type="submit">
                                <MagnifyingGlass size={20} />
                            </S.BtnTransparent>
                        </S.SearchBar>

                        <S.BtnTransparent>
                            <ShoppingCart size={24} />
                        </S.BtnTransparent>
                    </S.HeaderBoxSearch>
                </S.BoxLinks>
            </S.HeaderSection>
        </S.Header>
    );
}
