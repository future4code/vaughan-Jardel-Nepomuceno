import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <>
      <MainContainer>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
      </MainContainer>
      <p/>
      <MainContainer>
        <Post
          nomeUsuario={'Astrobot'}
          fotoUsuario={'https://picsum.photos/40/40'}
          fotoPost={'https://picsum.photos/190/140'}
        />
      </MainContainer>
      <p/>

      <MainContainer>
        <Post
          nomeUsuario={'Labetube'}
          fotoUsuario={'https://picsum.photos/30/30'}
          fotoPost={'https://picsum.photos/180/130'}
        />
      </MainContainer>
      </>

    );
  }
}

export default App; 




