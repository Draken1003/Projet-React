import React from 'react'
import BlocQuestion from '../composants/BlocQuestion';
import './Epreuve.css'

function Epreuve({Epreuve}) {
  return (
    <div class = "justify-content-center d-flex pt-5">
        <div className="col-xxl-5">
            <div class="titre mb-5 d-flex justify-content-center align-items-center" style={{borderRadius:22, backgroundColor:"#202730"}}>
                <h1 style={{fontWeight:'bold'}}>{Epreuve}</h1>
            </div>
            <BlocQuestion question="1) Les articles : complétez avec 'UN', 'UNE', 'DES' :" text1="fleurs bleues." text2="habitude" text3="ami de la famille"></BlocQuestion>
            <BlocQuestion question="1) Les articles : complétez avec 'UN', 'UNE', 'DES' :" text1="fleurs bleues." text2="habitude" text3="ami de la famille"></BlocQuestion>
            <BlocQuestion question="1) Les articles : complétez avec 'UN', 'UNE', 'DES' :" text1="fleurs bleues." text2="habitude" text3="ami de la famille"></BlocQuestion>
        </div>
    </div>
  )
}

export default Epreuve;
