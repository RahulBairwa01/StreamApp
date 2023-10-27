import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Shorts from './components/Shorts';
import Leftnav from './components/Leftnav';
import Navbar from './components/Navbar';
import MediaState from './context/media/MediaState'
import Alert from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import React ,{ useState } from 'react';
import UploadMedia from './components/UploadMedia';
import Main from './components/Main';
import History from './components/History';
import Account from './components/Account'
import ManageMedia from './components/ManageMedia';

function App() {
  const [alert, setAlert] = useState(null);
  const [isLeftNavExpanded, setLeftNavExpanded] = useState(true);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
  }
  const toggleLeftNav = () => {
    setLeftNavExpanded(!isLeftNavExpanded);
  };
  return (
    
    <div className="App">
      <MediaState>
      <Router>
          <Navbar toggleLeftNav={toggleLeftNav} />
          <Leftnav isExpanded={isLeftNavExpanded} />
          <Alert alert={alert}/>
      <Routes>
      <Route path="/" element={<Home page="getmedia"  isExpanded={isLeftNavExpanded} />}/>
      <Route path="/Shorts" element={<Shorts page="getshorts" isExpanded={isLeftNavExpanded}/>}/>
      <Route path="/Subscription" element={<Home page="getsubscription" isExpanded={isLeftNavExpanded}/>}/>
      <Route path="/Library" element={<Home page="getlibrary" isExpanded={isLeftNavExpanded}/>}/>
      <Route path="/History" element={<History isExpanded={isLeftNavExpanded} />} /> {/* Add this line */}
      <Route path="/Trending" element={<Home page="gettrending" isExpanded={isLeftNavExpanded}/>}/>
      <Route path="/Shoping" element={<Home page="getshoping" isExpanded={isLeftNavExpanded}/>}/>
      <Route path="/Music" element={<Home page="getmusic" isExpanded={isLeftNavExpanded}/>}/>
      <Route path="/Movie" element={<Home page="getmovie" isExpanded={isLeftNavExpanded}/>}/>
      <Route path="/Live" element={<Home page="getlive" isExpanded={isLeftNavExpanded}/>}/>
      <Route path="/Gaming" element={<Home page="getgaming" isExpanded={isLeftNavExpanded}/>}/>
      <Route path="/News" element={<Home page="getnews" isExpanded={isLeftNavExpanded}/>}/>
      <Route path="/Sports" element={<Home page="getsports" isExpanded={isLeftNavExpanded}/>}/>
      <Route path="/Learning" element={<Home page="getlearning" isExpanded={isLeftNavExpanded}/>}/>
      <Route path="/Fashion" element={<Home page="getfashion" isExpanded={isLeftNavExpanded}/>}/>
      <Route exact path="/login" element={<Login showAlert={showAlert} isExpanded={isLeftNavExpanded} />}/>
      <Route exact path="/signup" element={<Signup showAlert={showAlert} isExpanded={isLeftNavExpanded}/>}/>
      <Route exact path="/UploadMedia" element={<UploadMedia showAlert={showAlert} isExpanded={isLeftNavExpanded} />}/>
      <Route path="/Main" element={<Main  isExpanded={isLeftNavExpanded}/>} />
      <Route path="/Account" element={<Account isExpanded={isLeftNavExpanded}/>} />
      <Route path="/ManageMedia" element={<ManageMedia isExpanded={isLeftNavExpanded}/>} />
      </Routes>
      </Router>
      </MediaState>
    </div>
  );
}
export default App;