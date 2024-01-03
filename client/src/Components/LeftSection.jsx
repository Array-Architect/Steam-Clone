import AboutGame from "./AboutGame";
import Discord from "./Discord";

const LeftSection = () => {
  return (
    <div
      className="page_content_ctn"
      itemScope
      itemType="http://schema.org/Product"
    >
      <div className="page_content" data-panel="[]">
        <div
          className="leftcol game_description_column"
          data-panel='{"flow-children":"column"}'
        >
          <Discord />
          <AboutGame />
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
