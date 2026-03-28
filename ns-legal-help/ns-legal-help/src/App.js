import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home.js';
import Navbar from './Components/Navbar/Navbar.js';
import Common from './Components/Common Page/Common.js';
import AboutUs from './Components/AboutUs/AboutUs.js';
import DetailsPageCommon from './Components/MoreDetails/DetailsPageCommon.js';
import Footer from './Components/Footer/Footer.js';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<DetailsPageCommon />} />
      <Route path="/about-us" element={<AboutUs />} />

      {/* Be An Entrepreneur Routes */}
      <Route path="/private-limited-company" element={<Common />} />
      <Route path="/limited-liabilty-partnership" element={<Common />} />

      {/* Return Routes  */}
      <Route path="/gst-return" element={<Common />} />
      <Route path="/itr-return" element={<Common />} />
      <Route path="/tds-return" element={<Common />} />
      <Route path="/pf-return" element={<Common />} />

      {/* Registration Routes  */}
      <Route path="/gst-reg" element={<Common />} />
      {/* <Route path="/tds-return" element={<Common />} />
      <Route path="/pf-return" element={<Common />} /> */}
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
