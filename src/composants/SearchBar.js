import { useEffect, useState } from 'react';
import './SearchBar.css'

function SearchBar({className}){
    return (
        <div className={className}>
            <form class="d-flex flex-row justify-content-start " role="search" >
                <input 
                    class="form-control w-50 me-2" 
                    type="search" 
                    placeholder="Entrez mots clés" 
                    aria-label="Search" 
                    style={
                        { backgroundColor: '#202730', color: 'white' }
                    }
                /> 
                <button class="btn btn-success fw-bold" type="submit" style={{ color: 'black',  }}>Rechercher</button>
            </form>
        </div>
    )   
}

export default  SearchBar;