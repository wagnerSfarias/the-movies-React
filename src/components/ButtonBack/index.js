import React from 'react';
import { Button } from './styles'
import { FaArrowLeft } from 'react-icons/fa';

export default function ButtonBack() {
    return (
            <Button to={'/'} >
                <FaArrowLeft />
            </Button>
    );
}