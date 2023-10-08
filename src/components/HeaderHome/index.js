import React, { useState, useEffect } from 'react';
import {Header, Logo, TextThe, TextMovie, BtnFavorite } from './styles';
import { FaBars } from 'react-icons/fa';

export default function HeaderHome() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShow(window.scrollY > 100);
    });

  }, [])

  return (
    <Header scroll={show}>
      <Logo>
        <TextThe>THE</TextThe>
        <TextMovie>MOVIES</TextMovie>
      </Logo>

      <BtnFavorite to={'/mylist'}>
          <FaBars size={30} />
          <p>Minha Lista</p>
      </BtnFavorite>

    </Header>
  );
}