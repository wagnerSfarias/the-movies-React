import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export default function ButtonBack() {
    return (
            <Link to={'/'} className='btn-left'>
                <FaArrowLeft />
            </Link>
    );
}