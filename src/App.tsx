import SiteContainer from "./SiteContainer";
import "./style/main.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Router,
  createRoutesFromElements,
} from "react-router-dom";
import Profile from "./Profile";
import Boys from "./Boys";

const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<SiteContainer />}>
      <Route path="" element={<Boys />} />
      <Route path="blue" element={<Profile />} />
    </Route>
    )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;