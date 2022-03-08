
import About from './components/about/About';
import Intro from './components/intro/Intro';
import ProductList from './components/productList/ProductList';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
       <Intro/>
     <About/>
     <ProductList/>
     <Contact/>
    </div>
  );
}

export default App;
