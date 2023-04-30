  import React, { Component } from 'react';
  import './App.css';
  import Header from './components/Header';
  import Post from './components/Post';
  import Footer from './components/Footer';
  
  class App extends Component {
    render() {
      return (
        <div>
          <Header />
          <div>
            <Post />     
          </div>
          <Footer />
        </div>
      );
    }
  }
  export default App;
  