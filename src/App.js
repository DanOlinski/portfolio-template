import './App.scss';
import * as React from 'react';
import Header from "./components/Header";
import Content from "./components/Content";
import Email from "./components/Email";
import Footer from "./components/Footer";

function App() {

  return (
    <div className='main-div'>
      <Header />
      <Content />
      <Email />
      <Footer />
    </div> 
  );
}

export default App;
