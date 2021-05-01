import logo from './logo.svg';
import './App.css';
// Custom Components
import Header from './components/Header'
import Masthead from './components/Masthead'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
     <Header />
     <Masthead />
     <Services />
     <Portfolio />
     <About />
     <Team />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
