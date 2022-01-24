import React from 'react';
import styled from 'styled-components';

const Etapa3Style = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: antiquewhite;
`

class Etapa3 extends React.Component {

    state = {
        etapa: 3
    }

  render (){

    return (    
      <Etapa3Style>          
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
        <h3>7. Por que você não terminou um curso de graduação?</h3>
        <input/>
        <h3>8. Você fez algum curso complementar?</h3>
        <select>
            <option value = 'Não'>Não.</option>
            <option value = 'Curso técnico'>Curso técnico</option>
            <option value = 'Curso de Inglês'>Curso de Inglês</option>
        </select>
      </Etapa3Style>
    )
  }  
}

export default Etapa3 