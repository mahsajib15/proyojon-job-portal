import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Home from "./components/Home";
import LayOut from "./LayOut";
import NotFound from "./components/NotFound";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import JobDescription from "./components/JobDescription";
import Companies from "./components/Companies";
import AdminJobs from "./components/AdminJobs";
import CreateAndEditAdminJobs from "./components/CreateAndEditAdminJobs";
import Applicants from "./components/Applicants";
import Shop from "./components/ui/Shop"
import Jobs from "./components/Jobs";
import FindJob from "./components/ui/FindJob";
import Skills from "./components/ui/Skills";
import ServiceSection from "./components/ui/ServiceSection";
import ServiceDetail from "./components/ui/ServiceDetail";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LayOut URL={URL} />,
    children: [
      {
        path: "",
        element: <Home URL={URL} />,
      },
      {
        path: "/login",
        element: <Login URL={URL} />,
      },
      {
        path: "/signup",
        element: <SignUp URL={URL} />,
      },
      {
        path: "/jobs",
        element: <Jobs URL={URL} />,
      },
      {
        path: "/shop",
        element: <Shop URL={URL} />,
      },
      {
        path: "/services",
        element: <ServiceSection />,
      },
      {
        path: "/service/:serviceId",
        element: <ServiceDetail />,
      },
      {
        path: "/skills",
        element: <Skills URL={URL} />,
      },
      {
        path: "/findjob",
        element: <FindJob URL={URL} />,
      },
      {
        path: "/job/:jobId",
        element: <JobDescription URL={URL} />,
      },
      {
        path: "/browse",
        element: <Browse URL={URL} />,
      },
      {
        path: "/profile/:id",
        element: <Profile URL={URL} />,
      },
      {
        path: "/admin/companies",
        element: <Companies URL={URL} />,
      },
      {
        path: "/admin/jobs",
        element: <AdminJobs URL={URL} />,
      },
      {
        path: "/admin/jobs/create",
        element: <CreateAndEditAdminJobs URL={URL} />,
      },
      {
        path: "/admin/jobs/:jobId/applicants",
        element: <Applicants URL={URL} />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
