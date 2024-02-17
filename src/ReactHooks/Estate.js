import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from './Components/button/button';
import Header from './Components/header/header';

function App() {
  const carregando = false;//buliam true, caso esteja carrendo o span é ativado, se não mostra o botão, dois estados 
//caso implementacemos um sistema de resposta da aplicação para mudar a constante não funcionaria
//na pratica fazemos um requesição para o back-end, nos respondendo podemos mudar o estado
//neste momento vamos criar um botão para ser analogo a este processo 
  return (
   <div>
     {carregando ? <span>Carregando...</span> :<Button name='Botão 1' active  />}
    </div>

  );
}

export default App;
//<Button name='Paulo'/>passamos o valor do atributo='Paulo'
//mesmos componentes transformados pelas propriedades
//só o active ele entende como true

import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from './Components/button/button';
import Header from './Components/header/header';

function App() {
  let carregando = true;//buliam true, caso esteja carrendo o span é ativado, se não mostra o botão, dois estados 
//criar um botão não dará certo, pois mesmo que o valor estejá sendo alterado, o programa não recarrega o componenete por si só
//o componente foi renderizado dentro do HTML no estado inícial dele. e nada do que está em tela, pós return é recaregado
  return (
   <div>
     {carregando ? <span>Carregando...</span> :<Button name='Botão 1' active  />}
     <button onClick={()=>{
      carregando = false
     }}>Carregar Site</button>
    </div>
  );
}
export default App;  

import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Button from './Components/button/button';
import Header from './Components/header/header';


function App() {
  //let carregando = true;//buliam true, caso esteja carrendo o span é ativado, se não mostra o botão, dois estados 
 
  //const hookState = useState(true)//hookState é uma função nativa do react, onde devemos passar o valor inicial do meu estado
  const [carregando, setCarregando] = useState(true)//1ªvalor atual:;2ª:função que altera o valor set+valor atual
  //nosso hook : const [Carregando, setCarregando] = useState(true)
  //useState é uma função do react
  //console.log(hookState), para ver oque é retornado, retorna um array, com o valor atual e uma função paraalterar esse valor
  //como retorna um array podemos desestruturalo, const [] = useState
  return (
   <div>
    {carregando ? <span>Carregando...</span> :<Button name='Botão 1' active  />}
    <button onClick={()=>setCarregando(false)}>Carregar Site</button>
    </div>
  );
}
//chamamos a função set no elemento, contendo o valor que queremos que mude para
export default App;

//cosa o site estiver carregando funciona mormalmente, caso esteja carregado volta para o carragemento
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Button from './Components/button/button';
import Header from './Components/header/header';


function App() {
  //let carregando = true;//buliam true, caso esteja carregando o span é ativado, se não mostra o botão, dois estados 
 
  //const hookState = useState(true)//hookState é uma função nativa do react, onde devemos passar o valor inicial do meu estado
  const [carregando, setCarregando] = useState(true)//1ªvalor atual:;2ª:função que altera o valor set+valor atual
  //nosso hook : const [Carregando, setCarregando] = useState(true)
  //useState é uma função do react
  //console.log(hookState), para ver oque é retornado, retorna um array, com o valor atual e uma função paraalterar esse valor
  //como retorna um array podemos desestruturalo, const [] = useState
  return (
   <div>
    {carregando ? <span>Carregando...</span> :<Button name='Botão 1' active  />}
    <button onClick={()=>setCarregando(false)}>{carregando ? 'Carregar Site' : 'Voltar para carregamento'}</button>
    </div>
  );
}
//a mudança para caso o site esteja caregndo(linha20) ñ funcionara pois, está depois da mudança de true para false no setCarregamento, assim sempre sera false
export default App;
//<Button name='Paulo'/>passamos o valor do atributo='Paulo'
//mesmos componentes transformados pelas propriedades
//só o active ele entende como true

//Forma coreta do exmplo anterior
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Button from './Components/button/button';
import Header from './Components/header/header';


function App() {
  //let carregando = true;//buliam true, caso esteja carregando o span é ativado, se não mostra o botão, dois estados 
 
  //const hookState = useState(true)//hookState é uma função nativa do react, onde devemos passar o valor inicial do meu estado
  const [carregando, setCarregando] = useState(true)//1ªvalor atual:;2ª:função que altera o valor set+valor atual
  //nosso hook : const [Carregando, setCarregando] = useState(true)
  //useState é uma função do react
  //console.log(hookState), para ver oque é retornado, retorna um array, com o valor atual e uma função paraalterar esse valor
  //como retorna um array podemos desestruturalo, const [] = useState
  return (
   <div>
    {carregando ? <span>Carregando...</span> :<Button name='Botão 1' active  />}
    <button onClick={()=>setCarregando(!carregando)}>{carregando ? 'Carregar Site' : 'Voltar para carregamento'}</button>
    </div>
  );
}
//a mudança para caso o site esteja caregndo(linha20) ñ funcionara pois, está depois da mudança de true para false no setCarregamento, assim sempre sera false
//<button onClick={()=>setCarregando(false)}>{carregando ? 'Carregar Site' : 'Voltar para carregamento'}</button>
//para consertar isso é preciso que o valor passado sempre seja o contrario do valor atual, neste caso negaremos o valor setCarregando(!carregando)
//quando carregamos o valor muda de false para true e de true para false caso seja carrragdo de novo.
export default App;
//<Button name='Paulo'/>passamos o valor do atributo='Paulo'
//mesmos componentes transformados pelas propriedades
//só o active ele entende como true

//Contador com botão
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Button from './Components/button/button';
import Header from './Components/header/header';


function App() {
  //let carregando = true;//buliam true, caso esteja carregando o span é ativado, se não mostra o botão, dois estados 
 
  //const hookState = useState(true)//hookState é uma função nativa do react, onde devemos passar o valor inicial do meu estado
  const [carregando, setCarregando] = useState(true)//1ªvalor atual:;2ª:função que altera o valor set+valor atual
  //estado do contador; o hook pode ser qualquer coisa, neste caso um number
  //contador é a constante em sí e SetContador é uma função,
  const [contador, setContador] = useState(0)

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
    <button onClick={()=>setCarregando(!carregando)}>{carregando ? 'Carregar Site' : 'Voltar para carregamento'}</button>
    </div>
  );
}
//spam mostra o número exibido
//onClik para adicionar um evento de adicionar +1 ao contador
export default App;
//<Button name='Paulo'/>passamos o valor do atributo='Paulo'
//mesmos componentes transformados pelas propriedades
//só o active ele entende como true

import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Button from './Components/button/button';
import Header from './Components/header/header';


function App() {
  //let carregando = true;//buliam true, caso esteja carregando o span é ativado, se não mostra o botão, dois estados 
 
  //const hookState = useState(true)//hookState é uma função nativa do react, onde devemos passar o valor inicial do meu estado
  const [carregando, setCarregando] = useState(true)//1ªvalor atual:;2ª:função que altera o valor set+valor atual
  //estado do contador; o hook pode ser qualquer coisa, neste caso um number
  //contador é a constante em sí e SetContador é uma função, por isso podemos passa-los para dentro de outro componente como propriedades
  const [contador, setContador] = useState(0)

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
    </div>
  );
}
//spam mostra o número exibido
//onClik para adicionar um evento de adicionar +1 ao contador
//clicando no button o onclick leva o setContador para dentro do Button.js, oque torna o onClick no setContador
//clicar no button altera o valor por +1, ao clicar no Button o contador mostra 20 
export default App;
//<Button name='Paulo'/>passamos o valor do atributo='Paulo'
//mesmos componentes transformados pelas propriedades
//só o active ele entende como true