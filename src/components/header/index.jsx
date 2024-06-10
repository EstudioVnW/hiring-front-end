import React from "react";
import * as S from "./styled";

import { BsBagHeartFill } from "react-icons/bs";

export default function () {
  return (
    <section>
      <S.Header>
        <S.HeaderNav>
          <S.NavContent>
            <S.Nav>
              <ul>
                <S.NavItem>
                  <S.NavLink to="/">Home</S.NavLink>
                </S.NavItem>
                <S.NavItem>
                  <S.NavLink to="/about">About</S.NavLink>
                </S.NavItem>
              </ul>
            </S.Nav>
            <S.Brand>YourWeb</S.Brand>
            <S.Nav>
              <ul>
                <S.NavItem>
                  <S.NavLink to="/category">Category</S.NavLink>
                </S.NavItem>
                <S.NavItem>
                  <S.NavLink to="/contact">Contact</S.NavLink>
                </S.NavItem>
              </ul>
            </S.Nav>
          </S.NavContent>
          <S.Icons>
            <div>
              <S.IconUser size={24} />
            </div>
            <div>
              <S.BagCart to="/cart">
                <BsBagHeartFill size={24} className="icon-cart" />
              </S.BagCart>
            </div>
          </S.Icons>
        </S.HeaderNav>
      </S.Header>
    </section>
  );
}
