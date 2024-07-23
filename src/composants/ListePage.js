import { useEffect, useState } from 'react';
import Button from './common/ButtonMatiere';
import './ListePage.css';

function ListePage(){
    return(
        <div className="main-container row p-4">
            <div className="col-md-6 col-12">
                <Button text="Mathématique"></Button>
                <Button text="Physique Chimie"></Button>
                <Button text="SVT"></Button>
                <Button text="NSI"></Button>
                <Button text="SI"></Button>
                <Button text="SES"></Button>
            </div>
            <div className="col-md-6 col-12">
                <Button text="Histoire"></Button>
                <Button text="Français"></Button>
                <Button text="Philosophie"></Button>
                <Button text="HGGSP"></Button>
                <Button text="HLP"></Button>
                <Button text="EMC"></Button>
                
            </div>
        </div>
    )
}

export default ListePage;