import './App.css';
import { AdminHomePage } from './components/AdminHomePage';
import { CustomerHomePage } from './components/CustomerHomePage';
import { DeluxeRoomPage } from './components/DeluxeRoomPage';
import { DoubleRoomPage } from './components/DoubleRoomPage';
import { FeedbackPage } from './components/FeedbackPage';
import { FooterPage } from './components/FooterPage';
import { HeaderPage } from './components/HeaderPage';
import { LoginPage } from './components/LoginPage';
import { NormalRoomPage } from './components/NormalRoomPage';
import { PaymentPage } from './components/PaymentPage';
import { RegisterPage } from './components/RegisterPage';
import { ReservationDetailsPage } from './components/ReservationDetailsPage';
import { ReservationPage } from './components/ReservationPage';
import { RoomdetailsPage } from './components/RoomDetailsPage';
import { RoomPage } from './components/RoomPage';
import { SearchUserPage } from './components/SearchUserPage';
import { SuiteRoomPage } from './components/SuiteRoomPage';
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
          <Route path="/register/:userId" element={<RegisterPage/>}></Route>
          <Route path="/reservation" element={<ReservationPage/>}></Route>
          <Route path="/reservation/:userId" element={<ReservationPage/>}></Route>
          <Route path="/reservationdetails" element={<ReservationDetailsPage/>}></Route>
          <Route path="/payment" element={<PaymentPage/>}></Route>
          <Route path="/feedback" element={<FeedbackPage/>}></Route>
          <Route path="/rooms" element={<RoomPage/>}></Route>
          <Route path="/room/suite" element={<SuiteRoomPage />} />
          <Route path="/room/deluxe" element={<DeluxeRoomPage />} />
          <Route path="/room/double" element={<DoubleRoomPage/>} />
          <Route path="/room/normal" element={<NormalRoomPage/>} />
          <Route path="/roomdetails" element={<RoomdetailsPage/>}></Route>
          <Route path="/search" element={<SearchUserPage/>}></Route>
          <Route path="/admin" element={<AdminHomePage/>}></Route>
          <Route path="/customer" element={<CustomerHomePage/>}></Route>

        </Routes>
      <FooterPage/>
      </BrowserRouter>
    </div>
  );
}

export default App;
