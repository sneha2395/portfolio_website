import logo from './logo.svg';
import './App.css';
import About from './components/about/About';
import Intro from './components/intro/Intro';
// import Product from './components/product/Product';
// import Contact from './components/contact/Contact';
import ProductList from './components/productList/ProductList';

function App() {
  return (
    <div className="App">
       <Intro/>
     <About/>
    
     {/* <Contact/> */}
     <ProductList/>

    </div>
  );
}

export default App;
