import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef, useMemo } from 'react';//use = padrão de hooks importados do react e criados por nos
import Button from './Components/button/button';
import Header from './Components/header/header';


function App() {
 
  //const hookState = useState(true)//hookState é uma função nativa do react, onde devemos passar o valor inicial do meu estado
  const [carregando, setCarregando] = useState(true)//1ªvalor atual:;2ª:função que altera o valor set+valor atual
  const [contador, setContador] = useState(0)
//useMemo: metodo que recebe um função, com um valor que fiacar memorizado na variavel
  const valorMemorizado = useMemo(()=>{
    return 'Qualquer Coisa'
  }, [])//passamos um array, podendo conter nossos estados, a função pode ser recarregada dependendo se o estado é alterado ou não
  
  console.log(valorMemorizado)//mostrara o retorno da função

  return (
   <div>
    {carregando ? 
    <span>Carregando...</span> 
    :
    <div>
      <button onClick = {()=> setContador(contador + 1)}>Adicionar</button>
      <span>{contador}</span>
    </div>
    }
    <button onClick={() => {}}>{carregando ? 'Carregar site' : 'Voltar para carregamento'}</button>
    <Button name='Alterar Valor' active onClick={setContador} />
    
    </div>
  );
}
//a função callBack só será executado quando button for acionado, depois que todos os elemento foram criados em tela
//criamos a tag vid e passamos como referência o constante video
export default App;