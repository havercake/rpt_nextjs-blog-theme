import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandRock } from '@fortawesome/free-regular-svg-icons'
import BaseFontAwesomeIcon from './BaseFontAwesomeIcon';

export default function PointerIcon({ }) {
    return (
        <>
            <BaseFontAwesomeIcon icon={faHandRock} colorVar = 'color-gradient-3'/>
        </>
    );
}