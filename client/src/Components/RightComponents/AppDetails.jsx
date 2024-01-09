const AppDetails = () => {
  return (
    <div
      id="appDetailsUnderlinedLinks"
      className="block responsive_apppage_details_left game_details underlined_links"
    >
      <div className="block_content">
        <div className="block_content_inner">
          <div id="genresAndManufacturer" className="details_block">
            <b>Title:</b>
            Valheim
            <br />
            <b>Genre:</b>
            <span data-panel='{"flow-children":"row"}'>
              <a href="https://store.steampowered.com/genre/Action/?snr=1_5_9__408">
                {" "}
                Action
              </a>
              ,
              <a href="https://store.steampowered.com/genre/Adventure/?snr=1_5_9__408">
                {" "}
                Adventure
              </a>
              ,
              <a href="https://store.steampowered.com/genre/Indie/?snr=1_5_9__408">
                {" "}
                Indie
              </a>
              ,
              <a href="https://store.steampowered.com/genre/RPG/?snr=1_5_9__408">
                {" "}
                RPG
              </a>
              ,
              <a href="https://store.steampowered.com/genre/Early%20Access/?snr=1_5_9__408">
                {" "}
                Early Access
              </a>
            </span>
            <br />
            <div className="dev_row">
              <b>Developer:</b>
              <a href="https://store.steampowered.com/developer/coffeestain?snr=1_5_9__408">
                {" "}
                Iron Gate AB
              </a>
            </div>
            <div className="dev_row">
              <b>Publisher:</b>
              <a href="https://store.steampowered.com/publisher/coffeestain?snr=1_5_9__408">
                {" "}
                Coffee Stain Publishing
              </a>
            </div>
            <div className="dev_row">
              <b>Franchise:</b>
              <a href="https://store.steampowered.com/franchise/coffeestain?snr=1_5_9__408">
                {" "}
                Coffee Stain Publishing
              </a>
            </div>
            <b>Release Date:</b> Feb 2, 2021
            <br />
            <b>Early Access Release Date:</b> Feb 2, 2021
            <br />
          </div>
          <div className="details_block" style={{ paddingTop: "14px" }}>
            <a
              className="linkbar"
              href="https://steamcommunity.com/linkfilter/?u=http%3A%2F%2Fwww.valheimgame.com"
              target="_blank"
              rel="noreferrer  noopener"
            >
              Visit the website
              <img
                src="https://store.akamai.steamstatic.com/public/images/v5/ico_external_link.gif"
                border="0"
                align="bottom"
              ></img>
            </a>
            <a
              className="linkbar"
              href="https://twitter.com/Valheimgame"
              target="_blank"
              // rel
              data-tooltip-text="https://twitter.com/Valheimgame"
            >
              <img src="https://store.akamai.steamstatic.com/public/images//v6/social/twitter_32_white.png"></img>
              <span className="social_account">Valheim on Twitter</span>
              <img
                src="https://store.akamai.steamstatic.com/public/images/v5/ico_external_link.gif"
                border="0"
                align="bottom"
              ></img>
            </a>
            <a
              className="linkbar"
              href="https://www.youtube.com/channel/UCr3Yfz4Ts_K4bAyMCoVXeyA/"
              target="_blank"
              // rel
              data-tooltip-text="https://www.youtube.com/channel/UCr3Yfz4Ts_K4bAyMCoVXeyA/"
            >
              <img src="https://store.akamai.steamstatic.com/public/images//v6/social/youtube_32_white.png"></img>
              <span className="social_account">Iron Gate on YouTube</span>
              <img
                src="https://store.akamai.steamstatic.com/public/images/v5/ico_external_link.gif"
                border="0"
                align="bottom"
              ></img>
            </a>
            <a
              className="linkbar responsive_chevron_right"
              href="https://store.steampowered.com/newshub/?appids=892970&snr=1_5_9__408"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              View update history{" "}
            </a>
            <a
              className="linkbar responsive_chevron_right"
              href="https://store.steampowered.com/newshub/app/892970?snr=1_5_9__408"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Read related news{" "}
            </a>
            <a
              className="linkbar responsive_chevron_right"
              href="https://steamcommunity.com/app/892970/discussions/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              View discussions{" "}
            </a>
            <a
              className="linkbar responsive_chevron_right"
              href="https://steamcommunity.com/actions/Search?T=ClanAccount&K=Valheim"
            >
              {" "}
              Find Community Groups{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
