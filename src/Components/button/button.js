import React from "react";
import './styles.css'
//letra maiuscula na primeira letra da função por ser componente, use Fragment.React caso queira mais elementos 
function Button({name, active, onClick}){//passamos o onClick junto dos elementos da função, retornando o proprio na função, como propriedade
   //pode dar outro nome para a função onclick, dedeque mantenha o mesmo nome  
    return (
        <div className='containerbutton'>
            <button onClick={()=>onClick(20)} className = {active ? 'button':'disabledButton'}>{name}</button>
            <span>Seus dados estão a salvo conosco</span>
        </div>
    )
}
//button onClick={()=>onClick(20)} passamos a função e arrw function para que seja executado só quano o primeiro onclickfor ativaso
export default Button
//podemos usar o projeto Button em todo o projeto React
//dentro da props podemos fazer de outr maneira, ao importala,podemos dar um porps.nama ou props.activ
//como props é objeto podemos desestrutura-lo

//Função Original
//function Button({name, active, onClick}){//parameto no react é propriedade(props),o sistema intende que o props é objeto por causa da dotnotation
//    
//    return (
//        <div className='containerbutton'>
//            <button className = {active ? 'button':'disabledButton'}>{name}</button>
//            <span>Seus dados estão a salvo conosco</span>
//        </div>
//    )
//}
//export default Button

//import React from "react";
//import './styles.css'
//letra maiuscula na primeira letra da função por ser componente, use Fragment.React caso queira mais elementos 
//function Button({name, active, evento}){//passamos o onClick junto dos elementos da função, retornando o proprio na função, como propriedade
   //pode dar outro nome para a função onclick, dedeque mantenha o mesmo nome  
  //  return (
//    <div className='containerbutton'>
//        <button onClick={evento}className = {active ? 'button':'disabledButton'}>{name}</button>
//            <span>Seus dados estão a salvo conosco</span>
//        </div>
//    )
//}

//export default Button