import { createContext, useEffect, useState } from "react";//createContext:para criar contextos

export const UserContext = createContext();//método, onde a constante UserContext é igual a execução do creatContext

//store responsavel por armazenar nosso contexto
export const UserStore = ({ children }) => {
    const [login, setLogin] = useState(false) 
    const [data, setData] = useState({})//inicialmente sera um elemento vazil ({}), 
    //data:função para guardar dados, setDada:função para utilizar os dados

    useEffect(()=>{//tambem pode ser utilizado para executar o callback quando o componente é renderizado
       setData({name: "Paulo", age:22})//o set data é acionado e começa a guardar informação
    },[])
//apó executar a função podemos utilizar os dados provenientes se os colocarmos dentro de um estado

    return(
        <UserContext.Provider value={{login, setLogin}}>
            {children}
        </UserContext.Provider>
    )
}



//retornmamos uma propriedade dentro do UserContext em formato de componente <UserContext.Provider>
//valores de Estado 
//para passar os valores temos de usar o atributo value dentro do UserContext.Provider, nele teremos os valores que passaremos para os outros componentes
//temos de envolver a raiz da aplicação com o store, para que todo o programa tenha acesso aos valores
//lembremos que podemos passar uma propriedade para um componente  e recebelo dentro da execução da função
//usaremos a propriedade childrem para envolver a raiz a useStore
//depois exportaremos UserContext e UserStore
//Neste caso o childrem é como se estive=ssemos passando o proprio <App> dentro dele
//para usar o estado temos de primeiro ir 
//