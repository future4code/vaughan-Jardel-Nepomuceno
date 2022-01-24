import React from 'react';
import styled from 'styled-components';

const Etapa1Style = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: antiquewhite;
`

class Etapa1 extends React.Component {



  render (){

    return (    
    <Etapa1Style>          
      <h1>ETAPA 1 - DADOS GERAIS</h1>
      <h3>1. Qual o seu  nome?</h3>
      <input/>
      <h3>2. Qual a sua idade?</h3>
      <input/>
      <h3>3. Qual seu email?</h3>
      <input/>
      <h3>4. Qual a sua escolaridade?</h3>
      <select>
          <option value = 'Ensino médio incompleto'>Ensino Médio incompleto</option>
          <option value = 'Ensino médio completo'>Ensino Médio completo</option>
          <option value = 'Ensino Superior incompleto'>Ensino Superior incompleto</option>
          <option value = 'Ensino Superior completo'>Ensino Superior completo</option>
      </select>
    </Etapa1Style>
    )
  }  
}

export default Etapa1
