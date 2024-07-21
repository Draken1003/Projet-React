import { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Cours from './pages/Cours';
import Navbar from './composants/Navbar';
import Connexion from './pages/Connexion';
import Inscription from './pages/Inscription';
import Chapitre from './pages/Chapitre';
import Epreuve from './pages/Epreuve';
import BlocQuestion from './composants/BlocQuestion';

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <div class="px-5">
        {/* <Home></Home>  */}
        {/* <Cours></Cours> */}
        {/* <Connexion></Connexion> */}
        {/* <Inscription></Inscription> */}
        {/* <Chapitre></Chapitre>  */}
        <Epreuve Epreuve="Test de niveau de Français"></Epreuve>
      </div>
    </div>
  );
}

export default App;
