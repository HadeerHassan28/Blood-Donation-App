import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Notfound from "./Components/Notfound/Notfound";
//import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import Volunteers from "./Components/Volunteers/Volunteers";
import Hospitals from "./Components/Hospitals/Hospitals";
import Announcement from "./Components/Announcement/Announcement";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import AboutPage from "./Pages/Landing/AboutPage";
import Organization from "./Components/SignUp/Organization/Organization";
import User from "./Components/SignUp/User/User";
import LogOrg from "./Components/LogIn/Organizations/LogOrg";
import LogUser from "./Components/LogIn/User/LogUser";
import OrgProfile from "./Components/OrgProfile/OrgProfile";
import Terms from "./Components/Terms/Terms";
import ContactUs from "./Components/ContactUs/ContactUs";
import UserProfile from "./Components/Profile/user/userProfile";
import UserEdit from "./Components/Edit/UserEdit/UserEdit";
import { Toaster } from "react-hot-toast";
// Start Animation Library
import Aos from "aos";
import "aos/dist/aos.css";
import jwtDecode from "jwt-decode";
// End Animation Library
import OrgEdit from "./Components/OrgEdit/OrgEdit";
import ContextTheme from "./Context/Context";
import VolunteerProfile from "./Components/VolunteerProfile/VolunteerProfile";
import Payment from "./Components/Payment/Payment";
import Completion from "./Components/Payment/Completion";
function App() {
  const [TokenData, setTokenData] = useState(localStorage.getItem("token"));
  function saveTokenData() {
    if (localStorage.getItem("token") === null) {
      setTokenData(null);
    } else {
      let encodedToken = localStorage.getItem("token");
      let decodedToken = jwtDecode(encodedToken);
      setTokenData(decodedToken);
    }
  }

  useEffect(() => {
    Aos.init({ duration: 1500 });
    console.log(TokenData);
  });

  let routes = createBrowserRouter([
    {
      path: "",
      element: <Layout TokenData={TokenData} setTokenData={setTokenData} />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "blogs",
          element: <Blogs />,
        },
        {
          path: "terms",
          element: (
            <ProtectedRoute>
              <Terms />,
            </ProtectedRoute>
          ),
        },
        {
          path: "contactus",
          element: <ContactUs />,
        },
        {
          path: "volunteers",
          element: <Volunteers />,
        },
        {
          path: "Hospitals",
          element: <Hospitals />,
        },
        {
          path: "Announcement",
          element: <Announcement />,
        },
        {
          path: "Signup-org",
          element: (
            <ProtectedRoute>
              <Organization />
            </ProtectedRoute>
          ),
        },
        {
          path: "Signup-user",
          element: <User />,
        },
        {
          path: "Signup-org/signin-org",
          element: <LogOrg saveTokenData={saveTokenData} />,
        },
        {
          path: "Signup-user/signin-user",
          element: <LogUser saveTokenData={saveTokenData} />,
        },
        {
          path: "orgprofile",
          element: <OrgProfile TokenData={TokenData} />,
        },
        {
          path: "userProfile",
          element: <UserProfile TokenData={TokenData} />,
        },
        {
          path: "volunteerprofile/:id",
          element: <VolunteerProfile />,
        },
        {
          path: "userProfile/edit",
          element: (
            <ProtectedRoute>
              <UserEdit
                TokenData={TokenData}
                saveTokenData={saveTokenData}
                setTokenData={setTokenData}
              />
            </ProtectedRoute>
          ),
        },
        {
          path: "orgProfile/edit",
          element: (
            <ProtectedRoute>
              <OrgEdit TokenData={TokenData} saveTokenData={saveTokenData} />
            </ProtectedRoute>
          ),
        },
        {
          path: "orgprofile/payment",
          element: <Payment TokenData={TokenData} saveTokenData={saveTokenData}/>
        },
        {
          path:"completion",
          element: <Completion/>
        },
        {
          path: "*",
          element: <Notfound />,
        },
      ],
    },
  ]);

  return (
    <>
      <ContextTheme>
        <Toaster />

        <RouterProvider router={routes}>
          <Layout />
        </RouterProvider>
      </ContextTheme>
    </>
  );
}

export default App;
