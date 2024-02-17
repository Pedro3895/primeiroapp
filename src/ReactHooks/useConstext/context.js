//fasendo com useSet
import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';//use = padrão de hooks importados do react e criados por nos
import Button from './Components/button/button';
import Header from './Components/header/header';


function App() {
  const [login, setlogin] = useState(false);
 //se alterarmos(atualizarmos) os componentes aqui, passara para os componenets filhos 
  //no userSet o Header seria um componente filho, passe ele como propriedade 
  return (
   <div>
    <Header/>
    </div>
  );
}