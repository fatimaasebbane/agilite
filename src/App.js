import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home'
import { CallPepers } from './pages/CallPepers';
import Contact from './pages/Contact';
import committees from './pages/committees';
import Registration from './components/Registration';
import Submission from './components/Submission';
import SpeakersTable from './components/SpeakersTable';
import Venue from './components/Venue';
import Shedule from './components/Shedule';
function App() {
  return (
    <div>
      <Router>
         <Routes>
           <Route path='/' Component={Home}/>
           <Route path='/call for papers' Component={CallPepers}/>
           <Route path='/Contact' Component={Contact}></Route>
           <Route path='/committees' Component={committees}></Route>
           <Route path='/submission' Component={Submission}></Route>
           <Route path='/Regstration' Component={Registration}></Route>
           <Route path='/keynotespeakers' Component={SpeakersTable}></Route>
           <Route path='/venue' Component={Venue}></Route>
           <Route path='/program' Component={Shedule}></Route>
           
         </Routes>
      </Router>
    </div>
   
  );
}

export default App;
