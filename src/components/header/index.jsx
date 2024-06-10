import React, { useState } from "react";
import * as S from "./styled";
import MenuModal from "./modal";

import { BsBagHeartFill } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";

export default function Header() {
  const [isOpenModal, setOpenModal] = useState(false);

  const openModalMenu = () => {
    setOpenModal(!isOpenModal);
  };

  const closeModal = (e) => {
    if (e.target.id === "modal") setOpenModal(false);
  };

  return (
    <section>
      <S.Header>
        <S.HeaderNav>
          <S.HeaderNavMenu onClick={() => openModalMenu()}>
            <IoMenu size={30} />
          </S.HeaderNavMenu>

          {isOpenModal && (
            <MenuModal
              actionClose={(e) => closeModal(e)}
              setOpenModal={setOpenModal}
            />
          )}

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
                <S.BagCartIcon size={24} />
              </S.BagCart>
            </div>
          </S.Icons>
        </S.HeaderNav>
      </S.Header>
    </section>
  );
}
