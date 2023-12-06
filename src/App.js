import logo from './logo.svg';
import Header from './components/Header';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import './App.css';
import { Container } from 'react-bootstrap';
import Homescreen from './Screens/Homescreen';
import Productscreen from './Screens/Productscreen';
import Cartscreen from './Screens/Cartscreen';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path='/' element={<Homescreen />} exact />
            <Route path='/product/:id' element={<Productscreen />} />
            <Route path='/cart/:id?' element={<Cartscreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
