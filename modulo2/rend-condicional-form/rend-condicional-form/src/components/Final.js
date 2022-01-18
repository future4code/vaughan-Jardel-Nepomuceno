import React from 'react';
import styled from 'styled-components';

const EtapaFinalStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: antiquewhite;
    color: red;
`

class EtapaFinal extends React.Component {

    state = {
        etapa: 4
    }

  render (){

    return (    
      <EtapaFinalStyle>          
        <h1>O FORMULÁRIO ACABOU</h1>
        <h3>Muito obrigado por participar! Entraremos em contato.</h3>        
      </EtapaFinalStyle>
    )
  }  
}

export default EtapaFinal 