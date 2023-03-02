import logo from './logo.svg';
import { HashRouter as Router , Routes, Route, useLocation } from 'react-router-dom';



import Header from './components/Header';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import AnimatedRoutes from './components/AnimatedRoutes';

import Footer from './components/Footer';

function App() {
  return (
    
    <div>
      <Header />
  <Router >
   <AnimatedRoutes />
  </Router>
 
  <Footer/>
    </div>
  );
}

export default App;
