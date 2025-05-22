import './App.css';
import { FooterPage } from './components/FooterPage';
import { HeaderPage } from './components/HeaderPage';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';
import { ReservationPage } from './components/ReservationPage';
import { WelcomePage } from './components/WelcomePage';

import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <HeaderPage/>
        <Routes>
          
          <Route path="/" element={<WelcomePage/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/register" element={<RegisterPage/>}></Route>
          <Route path="/reservation" element={<ReservationPage/>}></Route>

        </Routes>
      <FooterPage/>
      </BrowserRouter>
    </div>
  );
}

export default App;
