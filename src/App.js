import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import NewCustomer from './components/createcustomer/newcustomer';
import PostpaidCustomer from './components/createcustomer/postpaidcustomer';
import PrepaidCustomer from './components/createcustomer/prepaidcustomer';
import Payments from './components/payments/payments';
import Bills from './components/bills/bills';
import AllCustomers from './components/customers/allcustomers';
import Transformer from './components/dss/transformers';

const App = () =>  {
  return (
   <div className="container-scroller">
    <BrowserRouter>
      <Header />
      <div className="container-fluid page-body-wrapper">
      <div className="main-panel">
        <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/createcustomer" element={<NewCustomer/>} />
          <Route path="/postpaid_customers" element={<PostpaidCustomer />} />
          <Route path="prepaid_customers" element={<PrepaidCustomer/>} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/bills" element={<Bills />} />
          <Route path="/allcustomers" element={<AllCustomers/>} />
          <Route path="/transformers" element={<Transformer/>} />

        </Routes>
        <Footer/>
        </div>
        </div>
      </div>
      </BrowserRouter>
   </div>
  
  );
}

export default App;
