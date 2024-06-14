import Authentication from "./Authentication.jsx";
import Navbar from "./Navbar.jsx";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <section className="nav-section wrapper">
        <Authentication />
        <Navbar />
        <Outlet />
      </section>
    </>
  );
};
export default Dashboard;
