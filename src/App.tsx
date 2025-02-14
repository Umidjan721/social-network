import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Scontainer } from "./themes/Container.style";
import { RegistrationPage } from "./components/RegistrationPage/RegistrationPage";
import { PostPage } from "./pages/PostPage/PostPage";

function App() {
  const routerConfig = createBrowserRouter([
    {
      path:"/",
      element:<LoginPage/>
    },
    {
      path:"/main-page",
      element:<MainPage/>
    },
    {
      path:"/profile-page",
      element:<ProfilePage/>
    },
    {
      path:"/register-page",
      element:<RegistrationPage/>
    },
    {
      path:"/posts/:postId",
      element:<PostPage/>
    },
  ]);
  return (
    <Scontainer>      
        <RouterProvider router={routerConfig}/>
    </Scontainer>

  );
}

export default App;
