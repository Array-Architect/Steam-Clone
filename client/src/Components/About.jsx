import LeftSection from "./LeftSection";

const About = () => {
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
        <div id="tabletGrid" className="tablet_grid">
          <LeftSection />
        </div>
      </div>
    </div>
  );
};

export default About;
