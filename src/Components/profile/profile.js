import React, {useContext} from 'react'
import { UserContext } from '../../contexts/userContext';

function Profile(){
const {login} = useContext(UserContext);//chama-mos só o login já que desejamos saber apenas se o usuârio está logado

    return(
        <div>
            {login? 'dados do usuário' : 'Faça seu login para ter acesso as informações'}    
        </div>
    )
}    
//undo o úsuario estiver deslogado mostraremos isso, logado mostraremos as iformações dele
//usamos o contexto global
export default Profile;
