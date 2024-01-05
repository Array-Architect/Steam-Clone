import AboutGame from "./AboutGame";
import Discord from "./Discord";
import Bug from "./Bug";
import Event from "./Event";
import Purchase from "../Purchase";
import EarlyAccess from "./EarlyAccess";

const LeftSection = () => {
  return (
    <div className="page_content" data-panel="[]">
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
      </div>
    </div>
  );
};

export default LeftSection;
