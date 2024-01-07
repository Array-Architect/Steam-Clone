import LeftSection from "./LeftComponents/LeftSection";
import RightSection from "./RightComponents/RightSection";

const Columns = () => {
  return (
    <div className="page_content" data-panel="[]" style={{ height: "4045px" }}>
      <RightSection />
      <LeftSection />
    </div>
  );
};

export default Columns;
