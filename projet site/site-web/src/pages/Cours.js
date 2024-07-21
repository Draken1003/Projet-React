import { useEffect, useState } from 'react';
import SideBar from '../composants/SideBar';
import SearchBar from '../composants/SearchBar';
import Card from '../composants/Card';
import './Cours.css'
import image from '../ressources/background.jpg'

function Cours() {
    return(
        <div className="container-fluid row py-3 ">
            <div className=" column col-xl-3 col-md-6  ">
                
                <SideBar></SideBar>
            </div>
            <div className='col-xl-9 col-md-6 '>
                <SearchBar className='ms-3'></SearchBar>
                
                <div className='my-3 scrollable-div d-flex flex-row flex-wrap'>
                    <Card className='flex-basis-auto m-2' source= {image} titre="caca" text="Les fonctions exponnentiel"/>
                    <Card className='flex-basis-auto m-2' source= {image} titre="caca" text="Les fonctions exponnentiel"/>
                    <Card className='flex-basis-auto m-2' source= {image} titre="caca" text="Les fonctions exponnentiel"/>
                    <Card className='flex-basis-auto m-2' source= {image} titre="caca" text="Les fonctions exponnentiel"/>
                    <Card className='flex-basis-auto m-2' source= {image} titre="caca" text="Les fonctions exponnentiel"/>
                    <Card className='flex-basis-auto m-2' source= {image} titre="caca" text="Les fonctions exponnentiel"/>
                    <Card className='flex-basis-auto m-2' source= {image} titre="caca" text="Les fonctions exponnentiel"/>
                    <Card className='flex-basis-auto m-2' source= {image} titre="caca" text="Les fonctions exponnentiel"/>
                    <Card className='flex-basis-auto m-2' source= {image} titre="caca" text="Les fonctions exponnentiel"/>
                    <Card className='flex-basis-auto m-2' source= {image} titre="caca" text="Les fonctions exponnentiel"/>
                    <Card className='flex-basis-auto m-2' source= {image} titre="caca" text="Les fonctions exponnentiel"/>
                    <Card className='flex-basis-auto m-2' source= {image} titre="caca" text="Les fonctions exponnentiel"/>
                    <Card className='flex-basis-auto m-2' source= {image} titre="caca" text="Les fonctions exponnentiel"/>
                    <Card className='flex-basis-auto m-2' source= {image} titre="caca" text="Les fonctions exponnentiel"/>
                    <Card className='flex-basis-auto m-2' source= {image} titre="caca" text="Les fonctions exponnentiel"/>
                    <Card className='flex-basis-auto m-2' source= {image} titre="caca" text="Les fonctions exponnentiel"/>
                    <Card className='flex-basis-auto m-2' source= {image} titre="caca" text="Les fonctions exponnentiel"/>

                </div>     
            </div>
        </div>   
    );
}

export default Cours;