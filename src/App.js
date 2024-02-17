import logo from './logo.svg';
import './App.css';
import React from 'react';//use = padrão de hooks importados do react e criados por nos
import Button from './Components/button/button';
import Home from './Pages/home/Hindex';


function App() {
  
  
  return (
   <div>
    <Home />
   </div>
  );
}
//a função callBack só será executado quando button for acionado, depois que todos os elemento foram criados em tela
//não retornamos um valor para armazenar, mas sim a função que só é recarragada caso aja uma dependência, 
//após a primeira renderização do componente 
export default App;
//<Button name='Paulo'/>passamos o valor do atributo='Paulo'
//mesmos componentes transformados pelas propriedades
//só o active ele entende como true