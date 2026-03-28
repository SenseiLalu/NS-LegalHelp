import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home.js';
import Navbar from './Components/Navbar/Navbar.js';
import Common from './Components/Common Page/Common.js';
import AboutUs from './Components/AboutUs/AboutUs.js';
import DetailsPageCommon from './Components/MoreDetails/DetailsPageCommon.js';
import Footer from './Components/Footer/Footer.js';
import ContactUs from './Components/ContactUs/ContactUs.js';
import Website from './Components/Website/Website.js';
import LaunchCountdown from './Components/Home/LaunchCountdown.js';
import WebsiteDesc from './Components/Website/WebsiteDesc.js';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<LaunchCountdown />} />
        <Route path="/details" element={<DetailsPageCommon />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />

        {/* Be An Entrepreneur Routes */}
        <Route path="/private-limited-company" element={<Common />} />
        <Route path="/limited-liabilty-partnership" element={<Common />} />
        <Route path="/solePropritorship" element={<Common />} />
        <Route path="/onePersonCompany" element={<Common />} />
        <Route path="/HufDeed" element={<Common />} />
        <Route path="/partnership" element={<Common />} />
        <Route path="/ecomBusiness" element={<Common />} />
        <Route path="/nonProfitOrg" element={<Common />} />

        {/* Return Routes  */}
        <Route path="/gst-return" element={<Common />} />
        <Route path="/itr-return" element={<Common />} />
        <Route path="/tds-return" element={<Common />} />
        <Route path="/pf-return" element={<Common />} />

        <Route path="/plc-annualFilling" element={<Common />} />
        <Route path="/opc-annualFilling" element={<Common />} />
        <Route path="/llp-annualFilling" element={<Common />} />

        <Route path="/nidhi-annualFilling" element={<Common />} />
        <Route path="/section8-annualFilling" element={<Common />} />

        {/* Registration Routes  */}
        <Route path="/gst-reg" element={<Common />} />
        <Route path="/iec-reg" element={<Common />} />
      {/* <Route path="/pf-return" element={<Common />} /> */}


        <Route path="/website" element={<Website />} />
        <Route path="/websiteDesc" element={<WebsiteDesc />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
