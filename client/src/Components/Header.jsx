import { useState } from "react";

function Header({}) {
  //
  const [ selectedLink, setSelectedLink ] = useState("Store");
  const [ hoveredMenu, setHoveredMenu ] = useState(null);
  const [ changeLanguage, setChangeLanguage ] = useState("english");
  const [ showMenu, setShowMenu ] = useState(false);

    const URL = "https://store.steampowered.com/app/892970/Valheim/";

    const changeSelectedItem = (itemId) => {
        setSelectedLink(itemId);
    }

    const handleMouseEnter = (menuId) => {
        setHoveredMenu(menuId);
    }

    const handleMouseLeave = () => {
        setHoveredMenu(null);
    }

  return (
    <div role="banner" id="global_header">
      <div className="content">
        <div className="logo">
          <span id="logo_holder">
            <a
              href="https://store.steampowered.com/?snr_1_5_9__global-header"
              aria-label="Link to the Steam Homepage"
            >
              <img
                src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"
                width="176"
                height="44"
                alt="Link to the Steam Homepage"
              />
            </a>
          </span>
        </div>
        <div
          role="navigation"
          className="supernav_container"
          aria-label="Global Menu"
        >
          <a
            className={selectedLink === "Store" ? "menuitem supernav_active" : "menuitem supernav"}
            href="https://store.steampowered.com/?snr=1_5_9__global-header"
            data-tooltip-type="selector"
            data-tooltip-content=".submenu_store"
            onClick={() => changeSelectedItem("Store")}
            onMouseEnter={() => handleMouseEnter("Store")}
            onMouseLeave={handleMouseLeave}
            style={{
              color: selectedLink === "Store" ? "#1a9fff" : "#dcdedf",
            }}
          >
            STORE
          </a>
          <a
            className={selectedLink === "Community" ? "menuitem supernav_active" : "menuitem supernav"}
            href="https://steamcommunity.com/"
            data-tooltip-type="selector"
            data-tooltip-content=".submenu_community"
            onClick={() => changeSelectedItem("Community")}
            onMouseEnter={() => handleMouseEnter("Community")}
            onMouseLeave={handleMouseLeave}
            style={{
              color: selectedLink === "Community" ? "#1a9fff" : "#dcdedf",
            }}
          >
            COMMUNITY
          </a>
          <a
            className="menuitem "
            href="https://store.steampowered.com/about/?snr=1_5_9__global-header"
          >
            About
          </a>
          <a className="menuitem " href="https://help.steampowered.com/en/">
            SUPPORT
          </a>
          <div
            className="supernav_content"
            style={{
              position: "absolute",
              zIndex: 1500,
              opacity: hoveredMenu === "Store" ? 1 : 0,
              left: "1px",
              top: "67px",
              pointerEvents: hoveredMenu === "Store" ? "auto" : "none",
              display: hoveredMenu === "Store" ? "block" : "none",
              background: "#3D4450",
              boxShadow: "3px 3px 5px -3px #000",
              textAlign: "left"
            }}
            onMouseEnter={() => handleMouseEnter("Store")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="submenu_store" data-submenuid="store">
                <a className="submenuitem" href="https://store.steampowered.com/?snr=1_5_9__global-header">Home</a>
                <a className="submenuitem" href="https://store.steampowered.com/explore/?snr=1_5_9__global-header">Discovery Queue</a>
                <a className="submenuitem" href="https://steamcommunity.com/my/wishlist/">Wishlist</a>
                <a className="submenuitem" href="https://store.steampowered.com/points/shop/?snr=1_5_9__global-header">Points Shop</a>
                <a className="submenuitem" href="https://store.steampowered.com/news/?snr=1_5_9__global-header">News</a>
                <a className="submenuitem" href="https://store.steampowered.com/stats/?snr=1_5_9__global-header">Stats</a>
            </div>
          </div>
          <div
            className="supernav_content"
            style={{
              position: "absolute",
              zIndex: 1500,
              opacity: hoveredMenu === "Community" ? 1 : 0,
              left: "66.2188px",
              top: "67px",
              pointerEvents: hoveredMenu === "Community" ? "auto" : "none",
              display: hoveredMenu === "Community" ? "block" : "none",
              background: "#3D4450",
              boxShadow: "3px 3px 5px -3px #000",
              textAlign: "left"
            }}
            onMouseEnter={() => handleMouseEnter("Community")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="submenu_community" data-submenuid="community">
                <a className="submenuitem" href="https://steamcommunity.com/">Home</a>
                <a className="submenuitem" href="https://steamcommunity.com/discussions/">Discussions</a>
                <a className="submenuitem" href="https://steamcommunity.com/workshop/">Workshop</a>
                <a className="submenuitem" href="https://steamcommunity.com/market/">Market</a>
                <a className="submenuitem" href="https://steamcommunity.com/?subsection=broadcasts">Broadcasts</a>
            </div>
          </div>
          </div>
                {<></>}
                <div id="global_actions">
                    <div role="navigation" id="global_action_menu" aria-label="Account Menu">
                        <a className="header_installsteam_btn header_installsteam_btn_green" href="https://store.steampowered.com/about/?snr=1_5_9__global-header">
                            <div className="header_installsteam_btn_content">Install Steam</div>
                        </a>
                        <a className="global_action_link" href="https://store.steampowered.com/login/?redir=app%2F892970%2FValheim%2F&redir_ssl=1&snr=1_5_9__global-header">&nbsp;login</a>
                        &nbsp; | &nbsp;
                        <span className="pulldown global_action_link" id="language_pulldown" onClick={() => setShowMenu(showMenu === false ? true : false)}>language</span>
                        <div className="popup_block_new" id="language_dropdown" style={{visibility: "visible", top: "19px", left: "-71.2969px", display: showMenu === true ? "block" : "none", opacity: 1}}>
                            <div className="popup_body popup_menu">
                                <a className="popup_menu_item tight" href={`${URL}?l=schinese`} onClick={() => setChangeLanguage( 'schinese' )}>简体中文 (Simplified Chinese)</a>
                                <a className="popup_menu_item tight" href={`${URL}?l=tchinese`} onClick={() => setChangeLanguage( 'tchinese' )}>繁體中文 (Traditional Chinese)</a>
                                <a className="popup_menu_item tight" href={`${URL}?l=japanese`} onClick={() => setChangeLanguage( 'japanese' )}>日本語 (Japanese)</a>
                                <a className="popup_menu_item tight" href={`${URL}?l=koreana`} onClick={() => setChangeLanguage( 'koreana' )}>한국어 (Korean)</a>
                                <a className="popup_menu_item tight" href={`${URL}?l=thai`} onClick={() => setChangeLanguage( 'thai' )}>ไทย (Thai)</a>
                                <a className="popup_menu_item tight" href={`${URL}?l=bulgarian`} onClick={() => setChangeLanguage( 'bulgarian' )}>Български (Bulgarian)</a>
                                <a className="popup_menu_item tight" href={`${URL}?l=czech`} onClick={() => setChangeLanguage( 'czech' )}>Čeština (Czech)</a>
                                <a className="popup_menu_item tight" href={`${URL}?l=danish`} onClick={() => setChangeLanguage( 'danish' )}>Dansk (Danish)</a>
                                <a className="popup_menu_item tight" href={`${URL}?l=german`} onClick={() => setChangeLanguage( 'german' )}>Deutsch (German)</a>
                                <a className="popup_menu_item tight" href={`${URL}?l=spanish`} onClick={() => setChangeLanguage( 'spanish' )}>Español - España (Spanish - Spain)</a>
                                <a className="popup_menu_item tight" href={`${URL}?l=latam`} onClick={() => setChangeLanguage( 'latam' )}>Español - Latinoamérica (Spanish - Latin America)</a>
                                <a className="popup_menu_item tight" href={`${URL}?l=greek`} onClick={() => setChangeLanguage( 'greek' )}>Ελληνικά (Greek)</a>
                                <a className="popup_menu_item tight" href={`${URL}?l=french`} onClick={() => setChangeLanguage( 'french' )}>Français (French)</a>
                                <a className="popup_menu_item tight" href={`${URL}?l=italian`} onClick={() => setChangeLanguage( 'italian' )}>Italiano (Italian)</a>
                                <a className="popup_menu_item tight" href={`${URL}?l=indonesian`} onClick={() => setChangeLanguage( 'indonesian' )}>Bahasa Indonesia (Indonesian)</a>
                                <a className="popup_menu_item tight" href={`${URL}?l=hungarian`} onClick={() => setChangeLanguage( 'hungarian' )}>Magyar (Hungarian)</a>
                                <a className="popup_menu_item tight" href={`${URL}?l=dutch`} onClick={() => setChangeLanguage( 'dutch' )}>Nederlands (Dutch)</a>
                                <a className="popup_menu_item tight" href={`${URL}?l=norwegian`} onClick={() => setChangeLanguage( 'norwegian' )}>Norsk (Norwegian)</a>
                                <a className="popup_menu_item tight" href={`${URL}?l=polish`} onClick={() => setChangeLanguage( 'polish' )}>Polski (Polish)</a>
                                <a className="popup_menu_item tight" href={`${URL}?l=portuguese`} onClick={() => setChangeLanguage( 'portuguese' )}>Português (Portuguese - Portugal)</a>
                                <a className="popup_menu_item tight" href={`${URL}?l=brazilian`} onClick={() => setChangeLanguage( 'brazilian' )}>Português - Brasil (Portuguese - Brazil)</a>
                                <a className="popup_menu_item tight" href={`${URL}?l=romanian`} onClick={() => setChangeLanguage( 'romanian' )}>Română (Romanian)</a>
                                <a className="popup_menu_item tight" href={`${URL}?l=russian`} onClick={() => setChangeLanguage( 'russian' )}>Русский (Russian)</a>
                                <a className="popup_menu_item tight" href={`${URL}?l=finnish`} onClick={() => setChangeLanguage( 'finnish' )}>Suomi (Finnish)</a>
                                <a className="popup_menu_item tight" href={`${URL}?l=swedish`} onClick={() => setChangeLanguage( 'swedish' )}>Svenska (Swedish)</a>
                                <a className="popup_menu_item tight" href={`${URL}?l=turkish`} onClick={() => setChangeLanguage( 'turkish' )}>Türkçe (Turkish)</a>
                                <a className="popup_menu_item tight" href={`${URL}?l=vietnamese`} onClick={() => setChangeLanguage( 'vietnamese' )}>Tiếng Việt (Vietnamese)</a>
                                <a className="popup_menu_item tight" href={`${URL}?l=ukrainian`} onClick={() => setChangeLanguage( 'ukrainian' )}>Українська (Ukrainian)</a>
                                <a className="popup_menu_item tight" href="https://www.valvesoftware.com/en/contact?contact-person=Translation%20Team%20Feedback" target="_blank">Report a translation problem</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
  );
}

export default Header;
