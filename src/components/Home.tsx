import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeWhoWeHelp from "./HomeWhoWeHelp";
import HomeContact from "./HomeContact";
import { useStoreState } from "../store/store";
// import { useStoreState } from "easy-peasy";

const Home = () => {
  const userLogIn = useStoreState((state) => state.userLogIn);

  return (
    <>
      <HomeHeader userLogIn={userLogIn} />
      <HomeThreeColumns />
      <HomeSimpleSteps userLogIn={userLogIn} />
      <HomeAboutUs />
      <HomeWhoWeHelp />
      <HomeContact />
    </>
  );
};

export default Home;
