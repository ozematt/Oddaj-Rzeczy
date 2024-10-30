import { Authentication } from "./Authentication";
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
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
