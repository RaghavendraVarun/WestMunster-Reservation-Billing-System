import './App.css';
import { AdminHomePage } from './components/AdminHomePage';
import { CustomerHomePage } from './components/CustomerHomePage';

import { FeedbackPage } from './components/FeedbackPage';
import { FooterPage } from './components/FooterPage';
import { HeaderPage } from './components/HeaderPage';
import { LoginPage } from './components/LoginPage';
import { PaymentPage } from './components/PaymentPage';
import { RegisterPage } from './components/RegisterPage';
import { ReservationPage } from './components/ReservationPage';
import { RoomPage } from './components/RoomPage';
import { HomePage } from './components/HomePage';
import { SearchUserPage } from './components/SearchUserPage';


import { WelcomePage } from './components/WelcomePage';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AvailabilityCalendar } from './components/AvailabilityCalender';
import { RoomAvailability } from './components/Roomavailability';
import RoomTypeFetchall from './components/RoomTypeFetchall';
import { RoomType } from './components/RoomType';
import { FetchbyIdRoomtype } from './components/FetchbyIdRoomtype ';
import { UpdateRoomType } from './components/updateRoomType';
import RoomLocationList from './components/RoomsLocationSetup/RoomLocationList';
import UpdateRoomLocation from './components/RoomsLocationSetup/UpdateRoomLocation';
import UpdateSeason from './components/Season/UpdateSeason';
import Addseason from './components/Season/Addseason';
import Seasonlist from './components/Season/Seasonlist';
import { FetchAllRoomAllocations } from './components/RoomNumberAllocation/FetchAllRoomAllocations ';
import { Roomnoallocation } from './components/RoomNumberAllocation/Roomnoallocation';
import { FeedbackAllPage } from './components/FeedbackAllPage ';
import { PaymentListPage } from './components/PaymentListPage ';
import { DeluxeRoomPage } from './components/Roomdetails/DeluxeRoomPage';
import { DoubleRoomPage } from './components/Roomdetails/DoubleRoomPage';
import { NormalRoomPage } from './components/Roomdetails/NormalRoomPage';
import { AddRoomLocation } from './components/RoomsLocationSetup/AddRoomLocation';
import { ConfirmationDetailsPage } from './components/ConfirmationDetailsPage';
import { ReservationList } from './components/ReservationList';
import { About } from './components/About';
import { SuperDeluxeRoomPage } from './components/Roomdetails/SuperDeluxeRoomPage';
import { ReservationUserList } from './components/ReservationUserList';

function App() {
  return (
    
      <BrowserRouter>
      <div className="App">
        <HeaderPage />
        <main>
          
             <Routes>
          <Route path="/" element={<WelcomePage />}></Route>
          <Route path="/homepage" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage  />}></Route>
          <Route path="/register/:userId" element={<RegisterPage />}></Route>
          <Route path="/reservation" element={<ReservationPage />}></Route>
           <Route path="/reservationlist" element={<ReservationList />}></Route>
          <Route path="/reservation/:userId" element={<ReservationPage />}></Route>
          <Route path="/confirmationdetails" element={<ConfirmationDetailsPage/>}></Route>
          <Route path="/payment" element={<PaymentPage />}></Route>
          <Route path="/paymentlist" element={<PaymentListPage />}></Route>
          <Route path="/feedback" element={<FeedbackPage />}></Route>
          <Route path="/listfeedback" element={<FeedbackAllPage />}></Route>
          <Route path="/rooms" element={<RoomPage />}></Route>
          <Route path="/room/deluxe" element={<DeluxeRoomPage />} />
          <Route path="/room/double" element={<DoubleRoomPage />} />
          <Route path="/room/normal" element={<NormalRoomPage />} />
          <Route path="/room/superdeluxe" element={<SuperDeluxeRoomPage />} />

          
          <Route path="/roompage" element={<RoomPage />}></Route>


          <Route path="/search" element={<SearchUserPage />}></Route>
          <Route path="/roomTypeFetchall" element={<RoomTypeFetchall />}></Route>
          <Route path="/addRoom" element={<RoomType />}></Route>
          <Route path="/fetchbyId/:id" element={<FetchbyIdRoomtype />}></Route>
          <Route path="/updateRoomtype/:id" element={<UpdateRoomType />}></Route>
          <Route path="/admin" element={<AdminHomePage />}></Route>
          <Route path="/customer" element={<CustomerHomePage />}></Route>
          <Route path="/dates" element={<AvailabilityCalendar />}></Route>
          <Route path="/availability" element={<RoomAvailability />}></Route>
          <Route path="/reservationuserlist" element={<ReservationUserList/>}></Route>
          <Route path="/roomLocationSetup" element={<RoomLocationList />}></Route>
          <Route path="/addRoomLocation" element={<AddRoomLocation />}></Route>
          <Route path="/updateRoomLocation/:locationId" element={<UpdateRoomLocation />}></Route>
?          {/* <Route path="/seasonFetchall" element={<UpdateSeason/>}></Route> */}
          <Route path="/seasonList" element={<Seasonlist />}></Route>

          <Route path="/updateseason/:id" element={<UpdateSeason />}></Route>
          <Route path="/addseason" element={<Addseason />}></Route>


          <Route path="/addlocation" element={<Roomnoallocation />}></Route>
          {/* <Route path="/roomlocation/:roomlocationId" element={<RoomLocationfetchbyId/>}></Route> */}
          <Route path="/update/:roomlocationId" element={<Roomnoallocation />}></Route>
          <Route path="/fetchall" element={<FetchAllRoomAllocations />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/uselist" element={<ReservationUserList/> }></Route>
         

        </Routes>
        </main>
        <FooterPage />
         </div>
      </BrowserRouter>
   
  );
}

export default App;
