import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled from 'styled-components';
function App() {

  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.weflow.com/5d640f4558306be99cf47a0e5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Jardel" 
          descricao="Oi, eu sou o Jardel, sou um estudante de Progamação atualmente. Procurando se profissionalizar na área para ter um futuro melhor. "
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>email</h2>
        <CardPequeno 
          imagem="" 
          nome="email"
          descricao="Endereço: Rua das primaveras, 55" 
        />

        <CardPequeno
          imagem="" 
          nome="email"
          descricao="E-mail: Jardelsantos15@gmail.com" 
        />
      </div>
      

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="Ypê" 
          descricao="Promotor de Vendas" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
