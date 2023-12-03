import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import DashboardLayout from "../../Layout/Dashboard";
import UserProfile from "../../Dashboard/UserProfile/UserProfile";
import SlotBooking from "../../Pages/SlotBooking/SlotBooking";
import BookingHistory from "../../Dashboard/BookingHistory/BookingHistory";
import HoldSlot from "../../Dashboard/HoldSlot/HoldSlot";
import TurfOwnerBooking from "../../Dashboard/TurfOwnerBooking/TurfOwnerBooking";
import ManualBooking from "../../Dashboard/ManualBooking/ManualBooking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/slotBook",
        element: <SlotBooking></SlotBooking>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/dashboard/bookingHistory",
        element: <BookingHistory></BookingHistory>,
      },
      {
        path: "/dashboard/holdSlot",
        element: <HoldSlot></HoldSlot>,
      },
      {
        path: "/dashboard/bookedData",
        element: <TurfOwnerBooking></TurfOwnerBooking>,
      },
      {
        path: "/dashboard/manualBooking",
        element: <ManualBooking></ManualBooking>,
      },
    ],
  },
  // {
  //     path:'*',
  //     element:<NotFound></NotFound>
  // }
]);

export default router;
