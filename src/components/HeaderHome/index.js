import React, { useState, useEffect } from 'react';
import './index.css';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function HeaderHome() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShow(window.scrollY > 100);
    });

  }, [])

  return (
    <div className={`nav-container ${show && "nav-container-black"}`}>
      <div className='logo'><p className='text-logo'>THE</p><p className='text-movie'>MOVIES</p></div>


      <Link to={'/mylist'}>
        <div className='my-list'>
          <FaBars size={30} />
          <p className='text-list'>Minha Lista</p>
        </div>
      </Link>


    </div>
  );
}