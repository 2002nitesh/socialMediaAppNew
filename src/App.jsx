import Login from "./pages/login/Login"
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Register from "./pages/register/Register"
import NavBar from './components/navbar/NavBar'
import LeftBar from './components/leftBar/LeftBar'
import RightBar from './components/rightBar/RightBar'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

function App() {
  const Layout = () => {
    return (
      <div>
        <NavBar />
        <div style={{ display : 'flex'}}>
          <LeftBar />
          <div style={{flex:6}}>
          <Outlet />
          </div>
          
          <RightBar />
        </div>
      </div>
    )
  }
  const currentUser = true;
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path:'/',
          element: <Home />
        },
        {
          path:'/profile/:id',
          element: <Profile/>
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App