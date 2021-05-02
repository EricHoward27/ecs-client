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
  const aboutLink = [
    {
      year: '2021',
      link: 'ECSLOGO.png',
      heading: 'ECS first open as a Studio',
      body: 'A full stack developer, Eric Howard, decided to open ECS studio, after having many years of ambition with creating software. With technology advancing, more and more people are getting their hands on many devices. With his passion of technology, Eric always believe he could help push the industry further, and he enjoys bringing business owners with a vision to the net.',
      invert_link: 'ecs.png',
      invert_heading: 'Our Journey',
      invert_year: '2021-beyond',
      invert_body: 'ECS would love for you to be apart of our journey. ECS have a vision to expand and provide many businesses with professional web applications. Join us on this epic journey!'
    }
  ]
  return (
    <div className="App">
     <Header />
     <Masthead />
     <Services />
     <Portfolio portfolioLinks={portfolioLinks}/>
     <About aboutLink={aboutLink}/>
     <Team />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
