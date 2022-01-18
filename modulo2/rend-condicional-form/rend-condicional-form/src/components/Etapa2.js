import React from 'react';
import styled from 'styled-components';

const Etapa2Style = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: antiquewhite;
`

class Etapa2 extends React.Component {

    state = {
        etapa: 2
    }

  render (){

    return (    
      <Etapa2Style>          
        <h1>ETAPA 2 - INFORMAÇÕES DO CURSO SUPERIOR</h1>
        <h3>5. Qual o curso?</h3>
        <input/>
        <h3>6. Qual a sua unidade de ensino?</h3>
        <input/>
      </Etapa2Style>
    )
  }  
}

export default Etapa2