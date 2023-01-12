import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import LoginAnimation from './Components/LoginAnimation';
import NotFound from './Pages/NotFound';
import Homepage from './Pages/Homepage';
import LoginPage from './Pages/LoginPage';
import SignUp from './Pages/SignupPage';
function App() {

  const [loaded, setLoaded] = useState(false);

  setTimeout(() => { setLoaded(true) }, 2000);

  if (loaded) {
    return (
      <div>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    )
  }

  else return <LoginAnimation />

}
export default App; 