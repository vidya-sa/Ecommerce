import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
      <Container>
      <Outlet/>
       </Container>
      </main>
      <Footer/>
    </>
  )
}

export default App