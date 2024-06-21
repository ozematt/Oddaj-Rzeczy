import HomeHeader from "./HomeHeader.jsx";
import HomeThreeColumns from "./HomeThreeColumns.jsx";
import HomeSimpleSteps from "./HomeSimpleSteps.jsx";
import HomeAboutUs from "./HomeAboutUs.jsx";
import HomeWhoWeHelp from "./HomeWhoWeHelp.jsx";
import HomeContact from "./HomeContact.jsx";
import { useStoreState } from "easy-peasy";

const Home = () => {
  const userLogIn = useStoreState((state) => state.userLogIn);
  console.log(userLogIn);

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
