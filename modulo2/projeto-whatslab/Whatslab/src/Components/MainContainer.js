import styled from 'styled-components'


const MainContainerBox = styled.div`
   height:80vh; 
   width: 50vh;
   border: 1px solid black;
   margin: 5% auto;
   position:relative;
   background-color: azure;
`
// const background = styled.div`
// background-color: red;
// height:100vh ;
// width:100vh;
// `



const MainContainer = ({children, size}) => { 

    return ( 
        <MainContainerBox> 
         {children} 
        </MainContainerBox>
    )
}


export default MainContainer;