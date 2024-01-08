import { useState } from "react";
import { setContexts } from "../../Context.jsx"

const EarlyAccess = () => {
  const {readmore, setreadmore} = setContexts()
  const [isExpanded, setIsExpanded] = useState(false);
  const showAll = () => {
    setIsExpanded(true);
    setreadmore(!readmore)
  };
  return (
    <div id="earlyAccessHeader" className="early_access_header">
      <div className="heading">
        <h1 className="inset">Early Access Game</h1>
        <h2 className="inset">
          Get instant access and start playing; get involved with this game as
          it develops.
        </h2>
        <p>
          <span>Note:</span>
          This Early Access game is not complete and may or may not change
          further. If you are not excited to play this game in its current
          state, then you should wait to see if the game progresses further in
          development.
          <a href="https://store.steampowered.com/earlyaccessfaq/?snr=1_5_9_">
            Learn more
          </a>
        </p>
      </div>
      <div id="earlyAccessBody" className="devnotes">
        <div className="devs_say">What the developers have to say:</div>
        <div
          id="devnotes_expander"
          style={{ maxHeight: isExpanded ? "none" : "113px" }}
        >
          <h1>Why Early Access?</h1>
          “We want to make a truly great game, and we believe working directly
          with our community is the best way to succeed with that. Valheim is
          already a pretty big game but we still have a ton of things that we
          want to add. Early Access is a way for us to receive valuable feedback
          that ensures the quality of the game is up to par, as well as to
          collaborate with our players on what they want to see in the game.”
          <h1>Approximately how long will this game be in Early Access?</h1>
          “We don’t know. We’re currently working on our seventh biome, the
          Ashlands, and after that we have one more to complete (the Deep North)
          before we’ll consider the game to be version 1.0. It’s a pretty safe
          bet to say that Valheim will be in active development for at least
          another two years (counting from January 2023). Aside from the large
          biome updates, we also want to add smaller updates to fill out the
          game.”
          <h1>
            How is the full version planned to differ from the Early Access
            version?
          </h1>
          “The basic functionality of the game will remain pretty much the same,
          except Biome-specific gameplay challenges. What we will add is a ton
          of more content in the form of new biomes, new enemies, new bosses,
          and new materials to find. We want to expand the crafting system with
          new crafting stations, and more recipes. We also want to add more
          types of weapons and build-pieces so you can further customize your
          viking stronghold, and make it withstand new threats. In addition, we
          also plan to add more unique locations and events for you to find in
          the world of Valheim.”
          <h1>What is the current state of the Early Access version?</h1>
          “Most planned core features of the game have been implemented.
          Single-player and multiplayer modes are fully functional and we have a
          separate dedicated server tool if you want a server running 24/7.
          There are currently six fully developed biomes out of a planned total
          of eight (plus the Ocean). There are hundreds of different items
          (weapons, materials, armor etc) in the game, to be found or crafted by
          the player. We have over 200 building pieces, and about 50 different
          types of creatures including monsters, animals and bosses.”
          <h1>
            Will the game be priced differently during and after Early Access?
          </h1>
          “No definitive plans here yet, but it is likely that the price will be
          increased over the course of the Early Access period.”
          <h1>
            How are you planning on involving the Community in your development
            process?
          </h1>
          “We currently use our Discord server as our primary ways to talk to
          our community. Players are welcome to suggest new features and
          modifications in the Suggestions chat channel. Upcoming changes are
          openly discussed with the community for early feedback. A closed
          test-group of players have access to the latest builds of the game and
          work closely with the dev-team. The test-group evaluates and tests new
          features and changes before they are released to a public test branch,
          available for everyone, and then ultimately to the live version of the
          game. We will continue to develop this process based on the needs and
          feedback of the community.”
        </div>
        {!isExpanded && (
          <a className="morebutton" id="devnotes_more" onClick={showAll}>
            Read more
          </a>
        )}
      </div>
    </div>
  );
};

export default EarlyAccess;
