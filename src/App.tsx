import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
function App() {
  return (
    <ChakraProvider>
      <Navbar/>
      <Router>
        <Routes>
          <Route />
        </Routes>
      </Router>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
