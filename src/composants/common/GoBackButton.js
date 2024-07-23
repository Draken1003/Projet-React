import React from 'react';
import { useNavigate } from 'react-router-dom';
import ferme from '../../ressources/fermer.png'
import './GoBackButton.css'

const GoBackButton = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Cette commande permet de revenir à la page précédente
    };

    return (
        <button className="bouton" style={{}} onClick={handleGoBack}>
            <img src={ferme} width="30"/>
        </button>
    );
};

export default GoBackButton;