import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Employment from "../pages/Employment";
import Education from "../pages/Education";
import Accomplishment from "../pages/Accomplishment";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import CreativeEnterprise from "../pages/EmploymentDetails/CreativeEnterprise"
import KnitConcern from "../pages/EmploymentDetails/KnitConcern"
import Bsc from "../pages/EducationDetails/Bsc"
import Diploma from "../pages/EducationDetails/Diploma"
import Ssc from "../pages/EducationDetails/Ssc"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "employment", element: <Employment /> },
      { path: "education", element: <Education /> },
      { path: "accomplishment", element: <Accomplishment /> },
      { path: "projects", element: <Projects /> },
      { path: "contact", element: <Contact /> },
      {
        path: "/employment/creative-enterprise",
        element: <CreativeEnterprise />,
      },
      {
        path: "/employment/knit-concern-group",
        element: <KnitConcern />,
      },
      {
        path: "/education/bsc",
        element: <Bsc />,
      },
      {
        path: "/education/diploma",
        element: <Diploma />,
      },
      {
        path: "/education/ssc",
        element: <Ssc />,
      },
    ],
  },
]);

export default router;
