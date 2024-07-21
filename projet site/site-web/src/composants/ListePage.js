import { useEffect, useState } from 'react';
import Button from './common/Button';
import './ListePage.css';

function ListePage(){
    return(
        <div className="main-container row p-4">
            <div className="col-md-6 col-12">
                <Button text="Mathématique" className="matière mb-4 col-12 py-3"></Button>
                <Button text="Physique Chimie" className="matière mb-4 col-12 py-3"></Button>
                <Button text="SVT" className="matière mb-4 col-12 py-3"></Button>
                <Button text="NSI" className="matière mb-4 col-12 py-3"></Button>
                <Button text="SI" className="matière mb-4 col-12 py-3"></Button>
                <Button text="SES" className="matière mb-sm-4 col-12 py-3"></Button>
            </div>
            <div className="col-md-6 col-12">
                <Button text="Histoire" className="matière mb-4 col-12 py-3"></Button>
                <Button text="Français" className="matière mb-4 col-12 py-3"></Button>
                <Button text="Philosophie" className="matière mb-4 col-12 py-3"></Button>
                <Button text="HGGSP" className="matière mb-4 col-12 py-3"></Button>
                <Button text="HLP" className="matière mb-4 col-12 py-3"></Button>
                <Button text="EMC" className="matière col-12 py-3"></Button>
                
            </div>
        </div>
    )
}

export default ListePage;