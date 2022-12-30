import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';



import Header from './components/Header';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import AnimatedRoutes from './components/AnimatedRoutes';


function App() {
  return (
    <div>
      <Header />
  <Router>
   <AnimatedRoutes />
  </Router>
    </div>
  );
}

export default App;
