import Main from './components/Main';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Project from './components/Project';
import Contact from './components/Contact';
function App() {

  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden bg-bgcolor'>
      <Header />
      <Navbar />
      <Main />
      <About />
      <Services />
      <Project />
      <Contact />
    </div>
  )
}

export default App
