import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
//componets
import Sidebar from './components/Sidebar';

//pages
import Home from './pages/Home';
import Employee from './pages/Employee';
import Seeting from './pages/Seeting';
import Contract from './pages/Contract';

function App() {
  return(
    <BrowserRouter>
    <Header />
    <Sidebar />
      <Routes>
        <Route path="/"  element= {<Home />} />
        <Route path="/employee" element= {<Employee />} />
        <Route path="/seeting" element= {<Seeting />} />
        <Route path="/contract" element= {<Contract />} />
      </Routes>
      {/* <Footer /> */}
      <GlobalStyles />
    </BrowserRouter>
  )
}

export default App;
