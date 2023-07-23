import { Routes, Route } from "react-router-dom";
import MainView from "./views/MainView/MainView";
import AboutView from "./views/AboutView/AboutView";
import ContactView from "./views/ContactView/ContactView";
import BePainFreeView from "./views/BePainFree/BePainFreeView";
import NavBar from "./components/NavBar";
import "./App.scss";
import MassageTherapyView from "./views/MassageTherapyView/MassageTherapyView";

export default function App() {
  const routes = [
    {
      label: "home",
      path: "/",
      element: <MainView />,
      icon: "material-symbols:home",
    },
    {
      label: "about us",
      path: "/about",
      element: <AboutView />,
      icon: "mdi:about",
    },
    {
      label: "contact",
      path: "/contact",
      element: <ContactView />,
      icon: "material-symbols:contact-emergency-rounded",
    },
    {
      label: "massage therapy",
      path: "/massage-therapy",
      element: <MassageTherapyView />,
      icon: "tabler:massage",
    },
    {
      label: "be pain free",
      path: "/pain-free",
      element: <BePainFreeView />,
      icon: "ri:mental-health-fill",
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
          © {new Date().getFullYear()}&nbsp;
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
