import React from 'react'
import './BlocQuestion.css'

function BlocQuestion({question, text1, text2, text3}) {
  return (
    <div class=" w-100 mb-4">
        <div class="py-3 px-4 h-100" style={{borderRadius:22, backgroundColor:"#202730"}}>
            <h1 class="fs-5">{question}</h1>
            <div class ="d-flex gap-3 align-items-center mt-4">
                <div class="w-75 input-group">
                    <input type="text" class="form-control" placeholder="Réponse" aria-label="Réponse" aria-describedby="basic-addon1"/>
                </div>
                <h2 class="texts">{text1}</h2>
            </div>
            <div class =" d-flex gap-3 align-items-center mt-4">
                <div class="w-75 input-group">
                    <input type="text" class="form-control" placeholder="Réponse" aria-label="Réponse" aria-describedby="basic-addon1"/>
                </div>
                <h2 class="texts">{text2}</h2>
            </div>
            <div class =" d-flex gap-3 align-items-center mt-4 mb-2">
                <div class="w-75 input-group">
                    <input type="text" class="form-control" placeholder="Réponse" aria-label="Réponse" aria-describedby="basic-addon1"/>
                </div>
                <h2 class="texts">{text3}</h2>
            </div>
        </div>
    </div>
  )
}

export default BlocQuestion;
