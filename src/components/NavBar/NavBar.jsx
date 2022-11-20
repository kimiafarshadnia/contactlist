import { NavLink, withRouter } from "react-router-dom";
// import { BsFillStarFill } from "react-icons/bs";
// import { IoMdContact } from "react-icons/io";
import "./NavBar.css";
const items = [
  { name: "Favorites", to: "/favorites" },
  { name: "Recents", to: "/recents" },
  { name: "Contcats", to: "/", exact: true },
  { name: "Keypad", to: "/keypad" },
  { name: "Voicemail", to: "/voicemail" },
];
const NavBar = ({ location }) => {
  return (
    <nav>
      <ul>
        {items.map((items) => {
          return (
            <div className="linkOfNav">
              {/* <IoMdContact  /> */}
              <li key={items.to}>
                <NavLink
                  to={items.to}
                  activeClassName="activeLink"
                  exact={items.exact || false}
                >
                  {items.name}
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
