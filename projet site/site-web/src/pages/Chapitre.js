import { useEffect, useState } from 'react';
import Paragraphe from '../composants/Paragraphe';
import image from '../ressources/background.jpg';
import './Chapitre.css'


function Chapitre(){
    return(
        <div class = " justify-content-center d-flex pt-5">
            <div class = " col-xl-8 col-lg-10 col-12 p-4" style={{backgroundColor :"#202730", borderRadius:20}}>
                <div className="col-12 row justify-content-center pt-3">
                    <img src={image} class="image" style={{borderRadius:20}}/>
                    <Paragraphe text='This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.'></Paragraphe>
                </div>
            </div>
        </div>
    );
}

export default Chapitre;