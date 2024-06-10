import React from "react";
import * as S from "../styled";

import { BsBagHeartFill } from "react-icons/bs";
import { IoMenu, IoClose } from "react-icons/io5";

export default function MenuModal({ actionClose = () => {}, setOpenModal }) {
  return (
    <S.Modal onClick={(e) => actionClose(e)} id="modal">
      <S.ModalCard>
        <S.ModalCardClose onClick={() => setOpenModal(false)}>
          <IoClose color="red" size={40} />
        </S.ModalCardClose>
        <S.NavModal>
          <S.NavModalList>
            <S.NavModalLi id="modal">
              <S.NavModalLink to="/" id="modal">
                Home
              </S.NavModalLink>
            </S.NavModalLi>

            <S.NavModalLi id="modal">
              <S.NavModalLink to="/about" id="modal">
                About
              </S.NavModalLink>
            </S.NavModalLi>

            <S.NavModalLi id="modal">
              <S.NavModalLink to="/category" id="modal">
                Category
              </S.NavModalLink>
            </S.NavModalLi>

            <S.NavModalLi id="modal">
              <S.NavModalLink to="/contact" id="modal">
                Contact
              </S.NavModalLink>
            </S.NavModalLi>
          </S.NavModalList>
        </S.NavModal>
      </S.ModalCard>
    </S.Modal>
  );
}
