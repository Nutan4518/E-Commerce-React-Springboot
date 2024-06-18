
import './App.css';
import HomePage from './customer/components/HomeCarousel/pages/HomePage/HomePage';
import Navigation from './customer/components/Navigation/Navigation';

function App() {
  return (
    <>
    <div className="App">   
        <Navigation/>
        <div>
          <HomePage/>
          
        </div>
    </div>
    </>
  );
}

export default App;
