import "./NavBar.scss";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
export default function NavBar(props) {
  const { routes, ...rest } = props;
  return (
    <div className="nav-bar" {...rest}>
      <div className="links">
        {routes?.map((route, i) => (
          <Link className="link" key={i} to={route.path}>
            <Icon className="icon" icon={route.icon} />
            <span className="text">{route.label}</span>
          </Link>
        ))}
      </div>
      <h1 className="title">Glenn A. Hadlock, D.C.</h1>
    </div>
  );
}
