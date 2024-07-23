import { useEffect, useState } from 'react';
import {Routes , Route} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Cours from './pages/Cours';
import Navbar from './composants/Navbar';
import Connexion from './pages/Connexion';
import Inscription from './pages/Inscription';
import Chapitre from './pages/Chapitre';
import Epreuve from './pages/Epreuve';
import BlocQuestion from './composants/BlocQuestion';
import Exercice from './pages/Exercice';
import Programme from './pages/Programme';
import Controle from './pages/Controle';




function App() {

  return (
    <div>
      <Navbar></Navbar>
      <div class="px-5">
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/cours' element={<Cours/>}/>
            <Route path='/exercice' element={<Exercice/>}/>
            <Route path='/programme' element={<Programme/>}/>
            <Route path='/controle' element={<Controle/>}/>
            <Route path='/epreuve' element={<Epreuve Epreuve="Test de niveau de Français"/>}/>
            <Route path="/connexion" element={<Connexion/>} />
            <Route path="/inscription" element={<Inscription/>} />
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
