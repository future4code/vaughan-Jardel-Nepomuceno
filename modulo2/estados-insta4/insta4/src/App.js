import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const peopleList = [ 
        {
        nomeUsuario:'Paulinha',
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
        },
        {  
        nomeUsuario:'Astrobot',
        fotoUsuario:'https://picsum.photos/40/40',
        fotoPost:'https://picsum.photos/190/140'
        },
        {
        nomeUsuario:'Labetube',
        fotoUsuario:'https://picsum.photos/30/30',
        fotoPost:'https://picsum.photos/180/130'
        }
];   

class App extends React.Component {
  render() {
    return (
      <div>
        {peopleList.map(element => {
          return (
            <MainContainer>
              <Post fotoPost={element.fotoPost} fotoUsuario={element.fotoUsuario} nomeUsuario={element.nomeUsuario} />
            </MainContainer>
          )
        })}
      </div>
    );
  };

}

export default App; 




