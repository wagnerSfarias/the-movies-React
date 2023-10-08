import React from 'react';
import { baseImg } from '../../services/api';
import ButtonBack from '../ButtonBack';
import { ContainerBanner } from '../../pages/Home/styles';

export default function BannerDetail({ data }) {
    return (
        <ContainerBanner style={{
            backgroundImage: `linear-gradient(${data?.backdrop_path ? `to bottom, rgba(210, 210, 219, 0.3), rgba(210, 210, 219, 0.6)),url("${baseImg}${data?.backdrop_path}"` : "Another Image Link"})`,
        }}>
            <ButtonBack/>
        </ContainerBanner>

    );
}