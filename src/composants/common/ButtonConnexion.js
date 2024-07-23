import { useEffect, useState } from 'react';
import './ButtonConnexion.css';
import { useNavigate } from 'react-router-dom';

function Button() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/connexion');
    };
    
    return(
        <div>
            <button className="connexion" onClick={handleClick}>Connexion</button>
        </div> 
    )
}

export default Button;