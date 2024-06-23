import Navbar from "./../components/shared/Navbar/Navbar";
import Hero from "./../components/unique/Hero/Hero";
import NavTab from "./../components/shared/NavTab/NavTab";
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
        <NavTab />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
