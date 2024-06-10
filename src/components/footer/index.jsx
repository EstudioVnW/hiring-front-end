import React from "react";
import * as S from "./styled";

export default function Footer() {
  return (
    <S.Foot>
      <S.Brand>YourWeb</S.Brand>
      <S.List>
        <li>
          <S.LinkList to="/">Home</S.LinkList>
        </li>
        <li>
          <S.LinkList to="/about">About</S.LinkList>
        </li>
        <li>Category</li>
        <li>Contact</li>
      </S.List>
    </S.Foot>
  );
}
