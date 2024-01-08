import SecondHeader from "./SecondHeader";
import Columns from "./Columns";
import Review from "./Review";
import Summary from "./Summary";

const MainPage = () => {
  return (
    <div
      role="main"
      className="responsive_page_template_content"
      id="responsive_page_template_content"
      data-panel='{"autoFocus":true}'
    >
      <div
        className="game_page_background game"
        style={{
          backgroundImage:
            "url('https://cdn.akamai.steamstatic.com/steam/apps/892970/page_bg_generated_v6b.jpg?t=1701931405')",
        }}
        data-miniprofile-appid="892970"
      >
        <SecondHeader />
        <div id="tabletGrid" className="tablet_grid">
          <div
            className="page_content_ctn"
            itemScope
            itemType="http://schema.org/Product"
          >
            <Summary />
            <Columns />
            <Review />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
