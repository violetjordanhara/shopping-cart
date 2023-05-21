import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import NavbarComponent from './Components/NavbarComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './Pages/Store';
import Cancel from './Pages/Cancel';
import Success from './Pages/Success';

function App() {
  return (
    <Container>
      <NavbarComponent></NavbarComponent>
      <BrowserRouter>
        <Routes>
          <Route index element={<Store />}></Route>
          <Route path="success" element={<Success />}></Route>
          <Route path="cancel" element={<Cancel />}></Route>
        </Routes>
      </BrowserRouter>
    </Container>
    
  );
}

export default App;
