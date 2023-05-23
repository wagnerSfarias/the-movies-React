import React from 'react';
import { baseImg } from '../../services/api';
import ButtonBack from '../ButtonBack';

export default function BannerDetail({ data }) {
    return (
        <div className='header' style={{
            backgroundImage: `linear-gradient(${data?.backdrop_path ? `to bottom, rgba(210, 210, 219, 0.3), rgba(210, 210, 219, 0.6)),url("${baseImg}${data?.backdrop_path}"` : "Another Image Link"})`,
        }}>
            <ButtonBack/>
        </div>

    );
}