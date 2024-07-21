import { useEffect, useState } from 'react';
import Paragraphe from '../composants/Paragraphe';
import ListePage from '../composants/ListePage';

function Home() {
    return(
        <div className="container-fluid px-5">
            <h1 className='h1 my-5'>Home</h1>
            <div className="row justify-content-between">
                <div className="col-lg-5">
                    <Paragraphe text='This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.'></Paragraphe>
                </div>
                <div className="col-lg-6">
                    <ListePage></ListePage>
                </div>
            </div>
        </div>     
    );
}

export default Home;