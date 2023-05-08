
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Member1 from './pages/member1';
import Member2 from './pages/member2';
import Member3 from './pages/Member3';
import NavigationBar from './components/NavigationBar';



function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="home" element={ <Home/> } />
        <Route path="member1" element={ <Member1/> } />
        <Route path="member2" element={ <Member2/> } />
        <Route path="member3" element={ <Member3/> } />
      </Routes>

    </div>
  );
}

export default App;
