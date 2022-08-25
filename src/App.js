import Navbar from './components/navbar/Navbar';
import './App.css';
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import Header from './components/Header';
import LeftPart from './components/leftPart/LeftPart';
import RightPart from './components/rightPart/RightPart';
import Dashboard from './components/Dashboard';
import Market from './components/Market';
import Portfolio from './components/Portfolio';
import Settings from './components/Settings';
import Home from './components/Home';
import Nav from './Nav';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="App">
     <Header />
     <div className='w-full min-h-[90vh] grid grid-cols-12'>
     <Sidebar />
     <Router>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Market" element={<Market />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Settings" element={<Settings />} />   
            

        </Routes>
      </Router>
       
      
      {/* <div className='grid grid-cols-1 xl:grid-cols-5 w-full col-span-10'> */}
        {/*left part   */}
        {/* <LeftPart /> */}
        {/* right part */}
        {/* <RightPart/> */}
      {/* </div> */}
     </div>
     <div>
     </div>
    </div>
  );
}

export default App;
