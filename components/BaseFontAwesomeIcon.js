import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function BaseFontAwesomeIcon({ icon, size = '3x', rotation = 0, colorVar = 'color-gradient-3' }) {
    return (
        <FontAwesomeIcon icon={icon} size={size} transform={{ rotate: rotation }}  color={`var(--${colorVar})`} />
    );
}