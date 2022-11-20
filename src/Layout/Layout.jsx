import NavBar from "../components/NavBar/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="children">{children}</div>
      <NavBar />
    </>
  );
};

export default Layout;
