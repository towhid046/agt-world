import Navbar from "./components/shared/Navbar/Navbar";
import Hero from "./components/unique/Hero/Hero";
import NavTab from "./components/shared/NavTab/NavTab";
import AllPosts from "./tabs/AllPosts/AllPosts";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <NavTab />
      <AllPosts />
    </>
  );
};

export default App;
