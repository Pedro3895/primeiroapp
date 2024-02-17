import React, { useState } from 'react'
import Header from '../../Components/header/header';
import Profile from '../../Components/profile/profile';

function Home(){
    //const [login, setLogin] = useState(false)//podemos passar os contexto desta forma, mas em aplicações mais complexas vira bagunça


    return (
        <div>
            <Header />
            <Profile />
        </div>
    )
}
export default Home;