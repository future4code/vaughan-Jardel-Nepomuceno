import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

class ButtonComponent extends React.Component {
  render() {
    return (
    <ButtonDiv>
      <Button onClick={this.props.proximaEtapa}>{this.props.label}</Button>
    </ButtonDiv>
    )
  }
}

export default ButtonComponent;
