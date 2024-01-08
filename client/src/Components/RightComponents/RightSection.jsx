import Relevant from "./Relevant";
import Details from "./Details";
import Languages from "./Languages";
import SteamDeck from "./SteamDeck";
import AppDetails from "./AppDetails";

const RightSection = () => {
  return (
    <div
      className="rightcol game_meta_data"
      data-panel='{"flow-children":"column"}'
    >
      <Relevant />
      <Details />
      <Languages />
      <SteamDeck />
      <AppDetails />
    </div>
  );
};

export default RightSection;
