import './App.css';
import Homepage from './Components/Homepage';
import {Routes, Route, Link, NavLink} from "react-router-dom";
import LoginPage from './Components/LoginPage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;