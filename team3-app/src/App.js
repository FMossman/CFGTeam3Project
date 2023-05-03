
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Member1 from './pages/Member1';
import Member2 from './pages/Member2';
import NavigationBar from './components/NavigationBar';



function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Routes>
        <Route path="/home" element={ <Home/> } />
        <Route path="/member1" element={ <Member1/> } />
        <Route path="/member2" element={ <Member2/> } />
      </Routes>
    </div>
  );
}

export default App;
