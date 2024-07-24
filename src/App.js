
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import Sales from './components/Sales';
import ErrorPage from './components/ErrorPage';
import LandingPage from './components/LandingPage';
// import ProductTable from './components/ProductTable';
import SaleTable from './components/SaleTable';
import SaleExpense from './components/SaleExpense';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let adminLogin = localStorage.getItem("data");
    // console.log(adminLogin);

    if (adminLogin != null) {
      setIsLoggedIn(true)
    }
  }, [])


  return (
    <div className="">

      {
        isLoggedIn

          ?

          // <BrowserRouter>
          <>
            {/* <Navbar /> */}
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/admin' element={<Home />} >
                <Route path='/admin/dashboard' element={<LandingPage />} />
                <Route path={"/admin/products"} element={<Products />} />
                {/* <Route path={"/admin/sales"} element={<Sales />} /> */}
                <Route path={"/admin/saletable"} element={<SaleTable />} />
                <Route path={"/admin/saleexpense"} element={<SaleExpense />} />
              </Route>
              <Route path='/img' element={<ErrorPage />}></Route>
            </Routes>
          </>
          // </BrowserRouter>

          :

          <Login />
      }


    </div>
  );
}

export default App;
