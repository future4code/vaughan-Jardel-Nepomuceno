import React from "react";
import styled from "styled-components";


const InputBox = styled.div`
display: flex;
width:100%;
border:1px ;
justify-content: space-around;
padding:10px 1px;
position: absolute;
bottom: 0;
`
const InputUser = styled.select`
width:16%;
height:
font-size
4px 0;
`
const InputMessage = styled.input`
width:80%;
font-size:1.0rem;
padding: 4px 0;
`

const ChatDiv= styled.div`
word-wrap: break-word;
border:0.5px solid gray;
border-radius: 10px;
box-sizing:content-box;
display: inline-block;
padding:2px;
margin: 2px;
`

class Input extends React.Component{ 

    state={ 
        inputMessage:'',
        inputUser:'',
        messagens:[]
    }

    onChangeInputUser =(e)=>{
       this.setState({inputUser: e.target.value});

    }

    onChangeInputMessage =(e) =>{

        this.setState({ inputMessage:e.target.value});
    }



    onClickSend = () => { 
       const message = this.state.inputMessage;

       this.setState ({
           messagens : [...this.state.messagens, message], 
           inputMessage:''
       })

    }


    render() {

       this.chatMessagem  = this.state.messagens.map(item => { 
           return (
                <>
                <ChatDiv>   
                  {item}
                </ChatDiv>
                <br/>
                </>
                )
                


       })

        return (
            <>   

          {this.chatMessagem}
             
             <InputBox >
            <InputUser name="select" type="text">
             <option value="valor" selected>usuário</option>
             
            </InputUser> 
                   
<InputMessage value={this.state.inputMessage}  onChange={this.onChangeInputMessage} />
            <button onClick={this.onClickSend}>enviar</button>
            
        </InputBox>

       
       </>
       )
    }
}


export default Input;