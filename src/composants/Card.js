import { useEffect, useState } from 'react';

function Card({className, source, titre, text}) {
    return(
        <div className={`${className}`}> 
            <div class="card" style={{width: '16rem', backgroundColor:'#202730'}}>
                <img src={source} class="card-img-top" alt="#"/>
                <div class="card-body">
                    <h5 class="card-title" style={{color: 'white'}}>{titre}</h5>
                    <p class="card-text">{text}</p>
                    <a href="#" class="btn" style={{color:'rgb(0, 255, 153)', paddingLeft: '0px', border: 'none'}}>Voir plus</a>
                </div>
            </div>
        </div>
    );
}

export default Card; 