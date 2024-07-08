
// import './App.css';
// import { Route,Routes } from 'react-router-dom';
// import CustomerRoutes from './Routers/CustomerRoutes';
// function App() {
//   return (
//     <>
//     <div className="App">   
//       <Routes>
//         <Route path="/" element={<CustomerRoutes />} />
//       </Routes>
       
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


import './App.css'
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CustomerRoutes from './Routers/CustomerRoutes';

const router = createBrowserRouter([
  {
    path: "/*",
     element: <CustomerRoutes />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
