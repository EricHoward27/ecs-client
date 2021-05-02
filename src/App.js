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
  const portfolioLinks = [
    {
      title: 'Single-Page Application',
      caption: 'Full-Stack Web App',
      link: 'https://erichoward27.github.io/NBA_Fantasy_TeamBuilder_Client/'
    },
    {
      title: 'E-Commerce',
      caption: 'Full-Stack Web App',
      link: 'https://erichoward27.github.io/ecommerce-client/'
    },
    {
      title: 'SurveyUs Application',
      caption: 'MERN Stack Application',
      link: 'https://erichoward27.github.io/survey-client/'
    }
  ]
  return (
    <div className="App">
     <Header />
     <Masthead />
     <Services />
     <Portfolio portfolioLinks={portfolioLinks}/>
     <About />
     <Team />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
