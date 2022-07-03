import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointer } from '@fortawesome/free-regular-svg-icons'
import BaseFontAwesomeIcon from './BaseFontAwesomeIcon';

export default function PointerIcon({ }) {
    return (
        <>
            <BaseFontAwesomeIcon icon={faHandPointer} rotation={0} />
        </>
    );
}