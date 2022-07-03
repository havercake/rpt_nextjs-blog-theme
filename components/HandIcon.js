import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPaper } from '@fortawesome/free-regular-svg-icons'
import BaseFontAwesomeIcon from './BaseFontAwesomeIcon';

export default function PointerIcon({ }) {
    return (
        <>
            <BaseFontAwesomeIcon icon={faHandPaper} rotation={42} colorVar='color-gradient-'/>
        </>
    );
}