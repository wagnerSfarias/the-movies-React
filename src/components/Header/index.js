import React from 'react';
import './index.css';
const baseImg = 'https://image.tmdb.org/t/p/original/';

export default function Header({data}) {
 return (
        <div className='header' style={{
            backgroundSize:'cover',
            backgroundImage: `linear-gradient(${data?.backdrop_path ? `to bottom, rgba(210, 210, 219, 0.3), rgba(210, 210, 219, 0.6)),url("${baseImg}${data?.backdrop_path}"` : "Another Image Link"})`,
            backgroundPosition:'to center'
        }}>     
    </div>
    
 );
}