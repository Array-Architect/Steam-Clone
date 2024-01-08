import LeftSection from "./LeftComponents/LeftSection";
import RightSection from "./RightComponents/RightSection";
import { setContexts } from "../Context";

const Columns = () => {
  const {readmore, setreadmore} = setContexts()
  return (
    <div className="page_content" data-panel="[]" style={{ height:readmore ? "4895px" : "4105px" }}>
      <RightSection />
      <LeftSection />
    </div>
  );
};

export default Columns;
