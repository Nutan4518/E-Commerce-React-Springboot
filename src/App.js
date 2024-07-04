
// import './App.css';
// import HomePage from './customer/components/HomeCarousel/pages/HomePage/HomePage';
// import Navigation from './customer/components/Navigation/Navigation';
// import Footer from './customer/components/Footer/Footer';
// import Product from './customer/components/Product/Product';
// import ProductDetails from './customer/components/ProductDetails/ProductDetails';
// import Cart from './customer/components/Cart/Cart';
// import Checkout from './customer/components/Checkout/Checkout';

// function App() {
//   return (
//     <>
//     <div className="App">   
//         <Navigation/>
//         <div>
//           {/* <HomePage/>         */}
//           {/* <Product/> */}
//           {/* <ProductDetails/> */}
//           {/* <Cart/> */}
//           <Checkout/>
//         </div>
//         <Footer/>
//     </div>
//     </>
//   );
// }

// export default App;
// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Checkout from './customer/components/Checkout/Checkout';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Checkout />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// src/App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Checkout from './customer/components/Checkout/Checkout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Checkout />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
