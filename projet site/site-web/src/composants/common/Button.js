import { useEffect, useState } from 'react';
import './Button.css';

function Button({text = 'vide', className}) {
    return(
        <div>
            <button class={className}>{text}</button>
        </div>
    )
}

export default Button;