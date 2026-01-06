import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import PriceList from "./pages/PriceList";
import ManageBookings from "./pages/ManageBookings";
import AddBooking from "./pages/AddBooking";
import EditBooking from "./pages/EditBooking";

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<PriceList />} />
        <Route path="/bookings" element={<ManageBookings />} />
        <Route path="/bookings/add" element={<AddBooking />} />
        <Route path="/bookings/edit/:id" element={<EditBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
