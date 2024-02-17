import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from 'react';//use = padrão de hooks importados do react e criados por nos
import Button from './Components/button/button';
import Header from './Components/header/header';


function App() {
 
  //const hookState = useState(true)//hookState é uma função nativa do react, onde devemos passar o valor inicial do meu estado
  const [carregando, setCarregando] = useState(true)//1ªvalor atual:;2ª:função que altera o valor set+valor atual
  const [contador, setContador] = useState(0)

  //useRef criado como uma constante
  const video = useRef();
  //console.log(video);//não funcionara assim poís o console.log está sendo executado antes do elemento ser criado em tela

  useEffect(()=>{//necessario que o elementoexista para que ajá referência dele, só sera executado quando todos os elementos forem renderizados em tela
    console.log(video.current.play())//.current para ter acesso ao elmento video, .play para executa-lo
  }, [])

  useEffect(()=>{
    console.log('Contador')//será executado quando for renderizado da 1ªvez e quando o contador tiverum novo valor

  }, [contador])//
//para quando o componente é retirado da tela, devemos passar o callback(função) dentro da nossa função de callback já estabelecida
//uma função dentro de outra função, iremos retornar o callback quando o elemento deve ser deconstruido  
  useEffect(()=>{ 
    console.log('Carregando')

    return () =>{//executado quando o trecho de código é removido da tela
      

    }

  }, [carregando])

  return (
   <div>
    {carregando ? 
    <span>Carregando...</span> 
    :
    <div>
      <button onClick = {()=> setContador(contador+1)}>Adicionar</button>
      <span>{contador}</span>
    </div>
    }
    <button onClick = {()=>setCarregando(!carregando)}>{carregando ? 'Carregar Site' : 'Voltar para carregamento'}</button>
    <Button name='Alterar Valor' onClick={setContador} />
    <videos ref={video}/>
    </div>
  );
}

//criamos a tag vid e passamos como referência o constante video
export default App;
//<Button name='Paulo'/>passamos o valor do atributo='Paulo'
//mesmos componentes transformados pelas propriedades
//só o active ele entende como true

//dentro de uma callBAck
import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from 'react';//use = padrão de hooks importados do react e criados por nos
import Button from './Components/button/button';
import Header from './Components/header/header';


function App() {
 
  //const hookState = useState(true)//hookState é uma função nativa do react, onde devemos passar o valor inicial do meu estado
  const [carregando, setCarregando] = useState(true)//1ªvalor atual:;2ª:função que altera o valor set+valor atual
  const [contador, setContador] = useState(0)

  //useRef criado como uma constante
  const video = useRef();
  //console.log(video);//não funcionara assim poís o console.log está sendo executado antes do elemento ser criado em tela

  function callBack() {
    console.log(video.current)
  }

  useEffect(()=>{//necessario que o elementoexista para que ajá referência dele, só sera executado quando todos os elementos forem renderizados em tela
    //console.log(video.current.play())//.current para ter acesso ao elmento video, .play para executa-lo
  }, [])

  //useEffect(()=>{
  //  console.log('Contador')//será executado quando for renderizado da 1ªvez e quando o contador tiverum novo valor

  //}, [contador])//
//para quando o componente é retirado da tela, devemos passar o callback(função) dentro da nossa função de callback já estabelecida
//uma função dentro de outra função, iremos retornar o callback quando o elemento deve ser deconstruido  
  useEffect(()=>{ 
    console.log('Carregando')

    return () =>{//executado quando o trecho de código é removido da tela
    }
  }, [carregando])

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
    <button onClick ={() => callBack()}>{carregando ? 'Carregar Site' : 'Voltar para carregamento'}</button>
    <Button name='Alterar Valor' active onClick={setContador} />
    <videos ref={video}/>
    </div>
  );
}
//a função callBack só será executado quando button for acionado, depois que todos os elemento foram criados em tela
//criamos a tag vid e passamos como referência o constante video
export default App;