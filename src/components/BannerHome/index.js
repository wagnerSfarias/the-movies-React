import React from 'react';
import './index.css';
import { baseImg } from '../../services/api';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';


export default function BannerHome({ data }) {
    return (
        <div className='header' style={{
            backgroundSize: 'cover',
            backgroundImage: `linear-gradient(${data?.backdrop_path ? `to bottom, rgba(210, 210, 219, 0.3), rgba(210, 210, 219, 0.6)),url("${baseImg}${data?.backdrop_path}"` : "Another Image Link"})`,
            backgroundPosition: 'to center'
        }}>
            <Link to={'/'} className='btn-left'>
                <FaArrowLeft className='svg-save' />
            </Link>
        </div>

    );
}