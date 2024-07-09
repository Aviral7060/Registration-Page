
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Login';
import RegistrationPg from './RegistrationPg';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='registration' element={<RegistrationPg/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
