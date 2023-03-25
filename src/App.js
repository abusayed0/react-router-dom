import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact, { contactAction } from "./pages/help/Contact";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareerDetails, { CareerDetailsLoader } from "./pages/careers/CareerDetails";
import NotFound from "./pages/NotFound";
import Error from "./pages/careers/Error";

// layouts 
import RootLayout from "./Layouts/RootLayout";
import HelpLayout from "./Layouts/HelpLayout";
import CareersLayout from "./Layouts/CareersLayout";


const router = createBrowserRouter(createRoutesFromElements(

  <>
    <Route path="/"
      element={<RootLayout />}
      errorElement={<Error />}
    >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>
      <Route path="careers"
        element={<CareersLayout />}

      >
        <Route
          index
          element={<Careers />}
          loader={careersLoader}
        />
        <Route
          path=":id"
          loader={CareerDetailsLoader}
          element={<CareerDetails />}
        />
      </Route>
    </Route>
    <Route path="*" element={<NotFound />} />
  </>

))

function App() {

  return (


    <RouterProvider router={router}></RouterProvider>

  );
}

export default App
