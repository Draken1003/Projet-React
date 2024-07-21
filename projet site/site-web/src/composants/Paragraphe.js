import { useEffect, useState } from 'react';


function Paragraphe({text}){
    return(
        <div class = "mb-4">
            <p class="text-center fs-4">{text}</p>
        </div>
    );
}

export default Paragraphe;