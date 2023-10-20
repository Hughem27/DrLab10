
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Read from './components/Read';
import Create from './components/Create';

import Content from './components/conent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* This is the navbar taken from bootstrap, we're using router dom here*/}
        {/* This is the actual NavBar itself */}
        <Navbar bg="secondary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="create">Create</Nav.Link>
              <Nav.Link href="read">Read</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* These are the Routes and where they tie to */}
        {/* Make sure to match lowercase elements that match the hrefs above (Also # is a fragment link so make sure its not here.) */}
        <Routes>
          <Route path='/home' element={<Content></Content>}></Route>  
          <Route path='/read' element={<Read></Read>}></Route>
          <Route path='/create' element={<Create></Create>}></Route>
        </Routes>

      {/* <Header></Header>
      <Content></Content>
      <Footer></Footer> */}
      
    </div >
    </BrowserRouter >
  );
}

export default App;
