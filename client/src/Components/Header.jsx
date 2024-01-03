import { useState } from "react";

function Header({ }) {
    // 

    return (
        <div role="banner" id="global_header">
            <div class="content">
                <div class="logo">
                    <span id="logo_holder">
                        <a href="https://store.steampowered.com/?snr_1_5_9__global-header" aria-label="Link to the Steam Homepage">
                            <img src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016" width="176" height="44" alt="Link to the Steam Homepage"/>
                        </a>
                    </span>
                </div>
                <div role="navigation" class="supernav_container" aria-label="Global Menu">
                    <a class="menuitem supernav supernav_active" href="https://store.steampowered.com/?snr=1_5_9__global-header" data-tooltip-type="selector" data-tooltip-content=".submenu_store">
                        STORE
                    </a>
                    <a class="menuitem supernav " style={{display: "block"}} href="https://steamcommunity.com/" data-tooltip-type="selector" data-tooltip-content=".submenu_community">
                        COMMUNITY
                    </a>
                    <a class="menuitem " href="https://store.steampowered.com/about/?snr=1_5_9__global-header"> 
                        About
                    </a>
                    <a class="menuitem " href="https://help.steampowered.com/en/">
                        SUPPORT
                    </a>
                    <div class="supernav_content" style={{position: "absolute", zIndex: 1500, opacity: 0, left: "1px", top: "67px", pointerEvents: "none"}}>
                        {/* <div class="submenu_store" style data-submenuid="store">
                            <a class="submenuitem" href="https://store.steampowered.com/?snr=1_5_9__global-header">Home</a>
                            <a class="submenuitem" href="https://store.steampowered.com/explore/?snr=1_5_9__global-header">Discovery Queue</a>
                            <a class="submenuitem" href="https://steamcommunity.com/my/wishlist/">Wishlist</a>
                            <a class="submenuitem" href="https://store.steampowered.com/points/shop/?snr=1_5_9__global-header">Points Shop</a>
                            <a class="submenuitem" href="https://store.steampowered.com/news/?snr=1_5_9__global-header">News</a>
                            <a class="submenuitem" href="https://store.steampowered.com/stats/?snr=1_5_9__global-header">Stats</a>
                        </div> */}
                    </div>
                    <div class="supernav_content" style={{position: "absolute", zIndex: 1500, opacity: 0, left: "66.2188px", top: "67px", pointerEvents: "none"}}>
                        {/* <div class="submenu_community" style data-submenuid="community">
                            <a class="submenuitem" href="https://steamcommunity.com/">Home</a>
                            <a class="submenuitem" href="https://steamcommunity.com/discussions/">Discussions</a>
                            <a class="submenuitem" href="https://steamcommunity.com/workshop/">Workshop</a>
                            <a class="submenuitem" href="https://steamcommunity.com/market/">Market</a>
                            <a class="submenuitem" href="https://steamcommunity.com/?subsection=broadcasts">Broadcasts</a>
                        </div> */}
                    </div>
                </div>
                {<></>}
                <div id="global_actions">

                </div>

            </div>
        </div>
    )
}

export default Header;