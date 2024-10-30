import { HomeHeader } from "./HomeHeader";
import { HomeThreeColumns } from "./HomeThreeColumns";
import { HomeSimpleSteps } from "./HomeSimpleSteps";
import { HomeAboutUs } from "./HomeAboutUs";
import { HomeWhoWeHelp } from "./HomeWhoWeHelp";
import { HomeContact } from "./HomeContact";
import { useStoreState } from "../store/store";

export const Home = () => {
  //
  ////DATA
  const userLogIn = useStoreState((state) => state.userLogIn);

  ////UI
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
