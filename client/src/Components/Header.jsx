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

                </div>
                {<></>}
                <div id="global_actions">

                </div>

            </div>
        </div>
    )
}

export default Header;