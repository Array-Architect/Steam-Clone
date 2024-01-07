import AboutGame from "./AboutGame";
import Discord from "./Discord";
import Bug from "./Bug";
import Event from "./Event";
import Purchase from "../Purchase";
import EarlyAccess from "./EarlyAccess";
import System from "./System";
import Block1 from "./Block1";
import Block2 from "./Block2";
import Curator from "./Curator";

const LeftSection = () => {
  return (
    <div
      className="leftcol game_description_column"
      data-panel='{"flow-children":"column"}'
    >
      <EarlyAccess />
      <Purchase />
      <Event />
      <Bug />
      <Discord />
      <AboutGame />
      <System />
      <Block1 />
      <Block2 />
      <Curator />
    </div>
  );
};

export default LeftSection;
