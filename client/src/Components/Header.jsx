import { useState } from "react";

function Header({ }) {
    // 

    return (
        <div role="banner" id="global_header">
            <div className="content">
                <div className="logo">
                    <span id="logo_holder">
                        <a href="https://store.steampowered.com/?snr_1_5_9__global-header" aria-label="Link to the Steam Homepage">
                            <img src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016" width="176" height="44" alt="Link to the Steam Homepage"/>
                        </a>
                    </span>
                </div>
                <div role="navigation" className="supernav_container" aria-label="Global Menu">
                    <a className="menuitem supernav supernav_active" href="https://store.steampowered.com/?snr=1_5_9__global-header" data-tooltip-type="selector" data-tooltip-content=".submenu_store">
                        STORE
                    </a>
                    <a className="menuitem supernav " style={{display: "block"}} href="https://steamcommunity.com/" data-tooltip-type="selector" data-tooltip-content=".submenu_community">
                        COMMUNITY
                    </a>
                    <a className="menuitem " href="https://store.steampowered.com/about/?snr=1_5_9__global-header"> 
                        About
                    </a>
                    <a className="menuitem " href="https://help.steampowered.com/en/">
                        SUPPORT
                    </a>
                    <div className="supernav_content" style={{position: "absolute", zIndex: 1500, opacity: 0, left: "1px", top: "67px", pointerEvents: "none"}}>
                        {/* <div className="submenu_store" style data-submenuid="store">
                            <a className="submenuitem" href="https://store.steampowered.com/?snr=1_5_9__global-header">Home</a>
                            <a className="submenuitem" href="https://store.steampowered.com/explore/?snr=1_5_9__global-header">Discovery Queue</a>
                            <a className="submenuitem" href="https://steamcommunity.com/my/wishlist/">Wishlist</a>
                            <a className="submenuitem" href="https://store.steampowered.com/points/shop/?snr=1_5_9__global-header">Points Shop</a>
                            <a className="submenuitem" href="https://store.steampowered.com/news/?snr=1_5_9__global-header">News</a>
                            <a className="submenuitem" href="https://store.steampowered.com/stats/?snr=1_5_9__global-header">Stats</a>
                        </div> */}
                    </div>
                    <div className="supernav_content" style={{position: "absolute", zIndex: 1500, opacity: 0, left: "66.2188px", top: "67px", pointerEvents: "none"}}>
                        {/* <div className="submenu_community" style data-submenuid="community">
                            <a className="submenuitem" href="https://steamcommunity.com/">Home</a>
                            <a className="submenuitem" href="https://steamcommunity.com/discussions/">Discussions</a>
                            <a className="submenuitem" href="https://steamcommunity.com/workshop/">Workshop</a>
                            <a className="submenuitem" href="https://steamcommunity.com/market/">Market</a>
                            <a className="submenuitem" href="https://steamcommunity.com/?subsection=broadcasts">Broadcasts</a>
                        </div> */}
                    </div>
                </div>
                {<></>}
                <div id="global_actions">
                    <div role="navigation" id="global_action_menu" aria-label="Account Menu">
                        <a className="header_installsteam_btn header_installsteam_btn_green" href="https://store.steampowered.com/about/?snr=1_5_9__global-header">
                            <div className="header_installsteam_btn_content"> Install Steam </div>
                        </a>
                        <a className="global_action_link" href="https://store.steampowered.com/login/?redir=app%2F892970%2FValheim%2F&redir_ssl=1&snr=1_5_9__global-header">login</a>
                        <span className="pulldown global_action_link" id="language_pulldown" onClick={() => ShowMenu( this, 'language_dropdown', 'right')}>language</span>
                        <div className="popup_block_new" id="language_dropdown" style={{display: "none"}}>
                            <div className="popup_body popup_menu">
                                <a className="popup_menu_item tight" href="?l=schinese" onClick={(e) => {ChangeLanguage( 'schinese' ); e.preventDefault}}>简体中文 (Simplified Chinese)</a>
                                {/* TODO: insert the remaining languages here */}
                                <a className="popup_menu_item tight" href="https://www.valvesoftware.com/en/contact?contact-person=Translation%20Team%20Feedback" target="_blank">Report a translation problem</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header;