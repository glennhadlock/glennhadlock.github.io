import { Routes, Route } from "react-router-dom";
import MainView from "./views/MainView/MainView";
import AboutView from "./views/AboutView/AboutView";
import LocationView from "./views/LocationView/LocationView";
import ContactView from "./views/ContactView/ContactView";
import BePainFreeView from "./views/BePainFree/BePainFreeView";
import ServicesView from "./views/ServicesView/ServicesView";
import NavBar from "./components/NavBar";
import "./App.scss";

export default function App() {
  const routes = [
    {
      label: "home",
      path: "/",
      element: <MainView />,
      icon: "material-symbols:home",
    },
    {
      label: "about",
      path: "/about",
      element: <AboutView />,
      icon: "mdi:about",
    },
    {
      label: "location",
      path: "/location",
      element: <LocationView />,
      icon: "material-symbols:location-on",
    },
    {
      label: "contact",
      path: "/contact",
      element: <ContactView />,
      icon: "material-symbols:contact-emergency-rounded",
    },
    {
      label: "be pain free",
      path: "/pain-free",
      element: <BePainFreeView />,
      icon: "ri:mental-health-fill",
    },
    {
      label: "services",
      path: "/services",
      element: <ServicesView />,
      icon: "material-symbols:design-services",
    },
  ];
  return (
    <div className="app">
      <NavBar routes={routes} />
      <Routes>
        {routes?.map((route, i) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
      <footer className="footer">
        <span>
          © 2022&nbsp;
          <a href="https://distecsa.com" className="link" target="_blank" rel="noreferrer">
            Glenn A. Hadlock, D.C.
          </a>
          - 5664 Bee Ridge Road, Suite 102 | Sarasota, FL 34239 | 941-925-1517 &nbsp;| Web developer:&nbsp;
          <a href="https://felipe-tovar-henao.com" className="link" target="_blank" rel="noreferrer">
            Felipe Tovar-Henao
          </a>
        </span>
      </footer>
    </div>
  );
}
