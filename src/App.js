
import './App.css';
import HomePage from './customer/components/HomeCarousel/pages/HomePage/HomePage';
import Navigation from './customer/components/Navigation/Navigation';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
function App() {
  return (
    <>
    <div className="App">   
        <Navigation/>
        <div>
          {/* <HomePage/>         */}
          {/* <Product/> */}
          <ProductDetails/>
        </div>
        <Footer/>
    </div>
    </>
  );
}

export default App;
