import './App.css';
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import Aboutusspage from './components/Aboutuspage';
import WebTechpage from './components/Webtechpage';
import MobileTechpage from './components/Mobiletechpage';
import AgileTechpage from './components/Agileteampage';
import Technologiespage from './components/Technologiespage';
import { Link, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="HOME" element={<Homepage />} />
 
        <Route path="Aboutus" element={<Aboutusspage />} />
        <Route path="Webtech" element={<WebTechpage />} />
        <Route path="Mobiletech" element={<MobileTechpage />} />
        <Route path="Agiletech" element={<AgileTechpage />} />
        <Route path="Techused" element={<Technologiespage />} />



      </Routes>

    </div>
  );
}

export default App;
