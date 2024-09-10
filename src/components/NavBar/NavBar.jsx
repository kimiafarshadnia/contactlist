import { NavLink, withRouter } from "react-router-dom";
import "./NavBar.css";

const items = [
  { name: "Favorites", to: "/favorites" },
  { name: "Recents", to: "/recents" },
  { name: "Contacts", to: "/", exact: true },
  { name: "Keypad", to: "/keypad" },
  { name: "Voicemail", to: "/voicemail" },
];

const NavBar = ({ location }) => {
  return (
    <nav>
      <ul>
        {items.map((item, index) => {
          return (
            <div className="linkOfNav" key={index}> {/* Add key here */}
              <li>
                <NavLink
                  to={item.to}
                  activeClassName="activeLink"
                  exact={item.exact || false}
                >
                  {item.name}
                </NavLink>
              </li>
            </div>
          );
        })}
      </ul>
    </nav>
  );
};

export default withRouter(NavBar);
