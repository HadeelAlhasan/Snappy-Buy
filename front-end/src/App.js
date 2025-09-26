
import './App.css';
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Privacy from './components/parts-page/Privacy';
import ScrollToTop from './components/ScrollToTop';
import Terms from './components/parts-page/Terms'
import Questions from './components/parts-page/Questions'
   function App() {
     return (
       <Router>
        <ScrollToTop/>
         <div className="App">
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/Privacy" element={<Privacy/>}/>
             <Route path='/Terms' element={<Terms/>}/>
             <Route path='/Questions' element={<Questions/>}/>
           </Routes>
         </div>
       </Router>
     );
   }
export default App;
