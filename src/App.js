
import React from 'react';

import Buscador from './components/Buscador'
import InfoPersonaje from '../src/components/InfoPersonaje'

import { ComicsList } from './components/ComicsList';
function App() {
  return (
    <React.Fragment>
     
        <Buscador/> 
        <InfoPersonaje/> 
        <ComicsList/>
    </React.Fragment>
  );
}

export default App;
