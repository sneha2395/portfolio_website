import logo from './logo.svg';
import './App.css';
import About from './components/about/About';
import Intro from './components/intro/Intro';
import Product from './components/product/Prouduct';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
       <Intro/>
     <About/>
    
     {/* <Contact/> */}
     <Product/>
    </div>
  );
}

export default App;
