import { useState } from "react";

const AboutGame = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const showAll = () => {
    setIsExpanded(true);
  };

  return (
    <div className="game_page_autocollapse_ctn expanded">
      <div
        data-panel='{"type":"PanelGroup"}'
        id="aboutThisGame"
        className="game_page_autocollapse"
        style={{ maxHeight: isExpanded ? "none" : "850px" }}
      >
        <div id="game_area_description" className="game_area_description">
          <h2 className="underline">About This Game</h2>
          <p className="spacing">
            <strong>Valheim </strong>is a brutal exploration and survival game
            for 1-10 players set in a procedurally-generated world inspired by
            Norse mythology. Craft powerful weapons, construct longhouses, and
            slay mighty foes to prove yourself to Odin!
          </p>
          <img
            src="https://cdn.akamai.steamstatic.com/steam/apps/892970/extras/VALHEIM_EXPLORE.gif?t=1701931405"
            alt="Valheim Explore"
          />
          <h3 style={{ fontSize: "14px", color: "#acb2b8" }}>
            EXPLORE THE TENTH WORLD
          </h3>
          <p className="spacing">
            Explore a world shrouded in mystery. Discover distinct environments
            with unique enemies to battle, resources to gather and secrets to
            uncover! Be a viking, sail the open seas in search of lands unknown,
            and fight bloodthirsty monsters.
          </p>
          <img
            src="https://cdn.akamai.steamstatic.com/steam/apps/892970/extras/VALHEIM_BUILD.gif?t=1701931405"
            alt="Valheim Build"
          />
          <h3 style={{ fontSize: "14px", color: "#acb2b8" }}>
            BUILD MIGHTY HALLS
          </h3>
          <p className="spacing">
            Raise viking longhouses and build bases that offer reprieve from the
            dangers ahead. Customise buildings, both inside and out, with a
            detailed building system. Progress through building tiers to
            upgrade, expand and defend your base.
          </p>
          <img
            src="https://cdn.akamai.steamstatic.com/steam/apps/892970/extras/VALHEIM_CRAFT_SURVIVE.gif?t=1701931405"
            alt="Valheim Craft and Survive"
          />
          <h3 style={{ fontSize: "14px", color: "#acb2b8" }}>
            GATHER, CRAFT AND SURVIVE
          </h3>
          <p className="spacing">
            Struggle to survive as you gather materials and craft weapons,
            armor, tools, ships, and defenses. Decorate your hearths and sharpen
            your blades, grow crops and vegetables, prepare food, brew meads and
            potions, and progress as you defeat more difficult bosses and
            discover new recipes and blueprints.
          </p>
          <h3 style={{ fontSize: "14px", color: "#acb2b8" }}>KEY FEATURES:</h3>
          <ul className="bb_ul">
            <li>
              Massive procedurally-generated world where every biome is
              immersive and distinct, with unique enemies, resources and
              crafting recipes to discover.
            </li>
            <li>
              Play alone or with up to 10 players on player-hosted dedicated
              servers and experience unlimited world creation and enemies that
              scale in difficulty.
            </li>
            <li>
              Stamina based combat that rewards preparation and skill. Utilize
              weapon types with unique attacks, different blocking styles,
              ranged combat, dodges and parries to fight your enemies.
            </li>
            <li>
              Rewarding food system where you cannot starve and are not punished
              for not eating, instead you gain health, stamina and regeneration
              buffs depending on what foods you consume.
            </li>
            <li>
              Intuitive crafting where recipes are discovered as you explore the
              world, and pick up new resources and ingredients.
            </li>
            <li>
              Flexible building system that takes structural integrity and
              ventilation into account. Build a small shelter or an entire
              village, make outposts or claim abandoned buildings as your own.
              Then customize to your liking.
            </li>
            <li>
              Sail boats and ships to reach distant lands and explore the sea
              that offers riches to claim and monsters to fight.
            </li>
            <li>
              Epic boss fights that will test even the best prepared vikings and
              offer rewards that help you on your journey.
            </li>
          </ul>
          <p>
            <strong>Community-translated languages:</strong>
            <br />
            In addition to the officially supported languages, Valheim has
            several community-translated languages. As the name would suggest
            these are all translated by fans and members of the community, and
            is an ongoing process.{" "}
            <strong>
              We can't guarantee the quality nor completeness of any specific
              translation effort.
            </strong>
          </p>
        </div>
      </div>
      {!isExpanded && (
        <div className="game_page_autocollapse_fade">
          <div className="game_page_autocollapse_readmore" onClick={showAll}>
            READ MORE
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutGame;
