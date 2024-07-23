import { useEffect, useState } from 'react';
import './ButtonMatiere.css';
import { useNavigate } from 'react-router-dom';

function ButtonMatiere({text = 'vide'}) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('');
    };
    return(
        <div>
            <button class="matière mb-4 col-12 py-3" onClick={handleClick}>{text}</button>
        </div> 
    )
}

export default ButtonMatiere;