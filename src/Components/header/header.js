import React, { useState, useContext } from "react";
import './styles.css';
import { UserContext } from "../../contexts/userContext";

function Header(){
    const {login, setLogin} = useContext(UserContext);//dentor dele tem de ter o contexto que desejamos utilizar
    //substituido pelo UserContext, após criar o contexto global, const [login, setLogin] = useState(false);
    //chamazmos o login eo setlogin
    return(
        <div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Fotos</li>
                    <li>Contatos</li>
                    <li onClick={()=> setLogin(!login)}>{login ? 'Deslogar' : 'Login'}</li>
                </ul>
            </nav>
        </div>
    )

}
//onClick={()=> setLogin(!login)}>{login ? 'Deslogar' : 'Login' }checa a informação, true = login, false=deslogar 
//como passar o informação do login do header para o profile?Usando contextoglobal
//criamos uma pasta de contexto, podemos ter vários contextos por aplicação 
export default Header;

//import logo from './logo.svg';
//import './App.css';
//import React from 'react';
//import Button from './Components/button/button';
//import Header from './Components/header/header';

//function App() {

//  return (
//  <>
//    <Header />
//    <Button name='Botão 1' active  />
//    <Button name='Botão 2'  />
//    <Button name='Botão 3' />
//    <spam>QualquerCoisa</spam>  
// </>
//  );
//}

//export default App;
//<Button name='Paulo