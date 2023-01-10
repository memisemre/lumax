import './App.css';
import Homepage from './Components/Homepage';
import { Routes, Route } from "react-router-dom";
import LoginPage from './Components/LoginPage';
import SignUpPage from './Components/SignupPage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;