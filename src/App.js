import { Route, Routes } from 'react-router-dom';
import './App.css'
import LoginAnimation from './Components/LoginAnimation';
import Homepage from './Pages/Homepage';
import LoginPage from './Pages/LoginPage';
import SignUp from './Pages/SignupPage';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginAnimation />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  )
}
export default App; 