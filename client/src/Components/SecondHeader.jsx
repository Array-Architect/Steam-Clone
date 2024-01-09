import { useState } from "react";

function SecondHeader({ }) {
    //
    const [ hoveredMenu, setHoveredMenu ] = useState(null);

    const handleMouseEnter = (menuId) => {
        setHoveredMenu(menuId);
    }

    const handleMouseLeave = () => {
        setHoveredMenu(null);
    }


    function SearchSuggestCheckTerm() {
        //TODO:
    }

    function handleSubmitClick(event) {
        //TODO:
        event.preventDefault();
    }


    return (
        <div className="responsive_store_nav_ctn_spacer">
                <div id="store_header" role="navigation" aria-label="Store Menu">
                    <div className="content">
                        <div id="store_controls">
                            <div className="cart_status_flex" id="cart_status_data">
                                <div className="store_header_btn_green store_header_btn" id="store_header_cart_btn" style={{display: "none"}}>
                                    <div className="store_header_btn_caps store_header_btn_leftcap"></div>
                                    <div className="store_header_btn_caps store_header_btn_rightcap"></div>
                                    <a id="cart_link" className="store_header_btn_content" href="https://store.steampowered.com/cart/?snr=1_5_9__12">
                                        {" Cart ("}
                                        <span id="cart_item_count_value">0</span>
                                        {") "}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="store_nav_area">
                            <div className="store_nav_leftcap"></div>
                            <div className="store_nav_bg">
                                <div className="store_nav" data-panel={{"flow-children": "row"}}>
                                    <div className="tab  flyout_tab " id="foryou_tab" data-flyout="foryou_flyout" data-flyout-align="left" data-flyout-valign="bottom" data-flyout-delay="300" data-panel={{"focusable": true}} onMouseEnter={() => handleMouseEnter("Your Store")} onMouseLeave={handleMouseLeave}>
                                        <span className="pulldown">
                                            <a className="pulldown_desktop" href="https://store.steampowered.com/?snr=1_5_9__12">{`Your Store `}</a>
                                            {/* <a className="pulldown_mobile" href="#">Your Store</a> */}
                                            <span></span>
                                        </span>
                                    </div>
                                    <div className="popup_block_new flyout_tab_flyout responsive_slidedown" id="foryou_flyout" style={{visibility: "visible", top: "42px", left: "0px", display: hoveredMenu === "Your Store" ? "block" : "none", opacity: 1}} onMouseEnter={() => handleMouseEnter("Your Store")} onMouseLeave={handleMouseLeave}>
                                        <div className="popup_body popup_menu popup_menu_browse">
                                            <a className="popup_menu_item" href="https://store.steampowered.com/?snr=1_5_9__12"> Home </a>
                                            <a className="popup_menu_item" href="https://store.steampowered.com/communityrecommendations/?snr=1_5_9__12">Community Recommendations</a>
                                            <a className="popup_menu_item" href="https://store.steampowered.com/recommended/?snr=1_5_9__12"> Recently Viewed </a>
                                            <a className="popup_menu_item" href="https://store.steampowered.com/curators/?snr=1_5_9__12"> Steam Curators </a>
                                        </div>
                                    </div>
                                    <div className="store_labs_new"></div>
                                    <div className="tab  flyout_tab" id="noteworthy_tab" data-flyout="noteworthy_flyout" data-flyout-align="left" data-flyout-valign="bottom" data-flyout-delay="300" data-panel={{"focusable": true}} onMouseEnter={() => handleMouseEnter("Noteworthy")} onMouseLeave={handleMouseLeave}>
                                        <span className="pulldown">
                                            <a href="#" className="pulldown_desktop">{`New & Noteworthy `}</a>
                                            <a href="#" className="pulldown_mobile">New & Noteworthy</a>
                                            <span></span>
                                        </span>
                                    </div>
                                    <div className="popup_block_new flyout_tab_flyout responsive_slidedown" id="noteworthy_flyout" style={{visibility: "visible", top: "42px", left: "96.125px", display: hoveredMenu === "Noteworthy" ? "block" : "none", opacity: 1}} onMouseEnter={() => handleMouseEnter("Noteworthy")} onMouseLeave={handleMouseLeave}>
                                        <div className="popup_body popup_menu_twocol_new">
                                            <div className="popup_menu popup_menu_browse" data-panel={{"maintainY": true, "flowChildren": "column"}}>
                                                <div className="popup_menu_subheader responsive_hidden">Popular</div>
                                                <a className="popup_menu_item" href="https://store.steampowered.com/charts/topselling/?snr=1_5_9__12"> Top Sellers </a>
                                                <a className="popup_menu_item" href="https://store.steampowered.com/charts/mostplayed/?snr=1_5_9__12"> Most Played </a>
                                                <div className="category_hr responsive_hidden"></div>
                                                <a className="popup_menu_item" href="https://store.steampowered.com/explore/new/?snr=1_5_9__12"> New Releases </a>
                                                <a className="popup_menu_item" href="https://store.steampowered.com/explore/upcoming/?snr=1_5_9__12"> Upcoming Releases </a>
                                                <div className="popup_menu_subheader responsive_hidden">News & Updates</div>
                                                <a className="popup_menu_item" href="https://store.steampowered.com/newshub/?snr=1_5_9__12"> Recently Updated </a>
                                            </div>
                                            <div className="popup_menu popup_menu_browse leftborder" data-panel={{"maintainY": true, "flow-children": "column"}}>
                                                <div className="popup_menu_subheader responsive_hidden">Promos & Events</div>
                                                <a className="popup_menu_item" href="https://store.steampowered.com/specials/?snr=1_5_9__12"> Special Offers </a>
                                                <a className="popup_menu_item" href="https://store.steampowered.com/news/collection/sales/?snr=1_5_9__12"> Sale Events </a>
                                                <div className="category_hr responsive_hidden"></div>
                                                <a className="popup_menu_item" href="https://store.steampowered.com/yearinreview?src=7&snr=1_5_9__12">
                                                    {`Steam Year In Review `}
                                                    <span className="new">New</span>
                                                </a>
                                                <a className="popup_menu_item" href="https://store.steampowered.com/sale/nextfest?snr=1_5_9__12"> Steam Next Fest </a>
                                                <a className="popup_menu_item" href="https://store.steampowered.com/steamawards/?snr=1_5_9__12"> The Steam Awards </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab  flyout_tab" id="genre_tab" data-flyout="genre_flyout" data-flyout-align="left" data-flyout-valign="bottom" data-flyout-align-to-element="foryou_tab" data-flyout-delay="300" data-panel={{"focusable": true}} onMouseEnter={() => handleMouseEnter("Categories")} onMouseLeave={handleMouseLeave}>
                                        <span className="pulldown">
                                            <a className="pulldown_desktop" href="#">{`Categories `}</a>
                                            <a className="pulldown_mobile" href="#">Categories</a>
                                            <span></span>
                                        </span>
                                    </div>
                                    <div className="popup_block_new flyout_tab_flyout responsive_slidedown" id="genre_flyout" style={{visibility: "visible", top: "42px", left: "0px", display: hoveredMenu === "Categories" ? "block" : "none", opacity: 1}} onMouseEnter={() => handleMouseEnter("Categories")} onMouseLeave={handleMouseLeave}>
                                        <div className="popup_body popup_menu_twocol_new">
                                            <div className="popup_menu popup_menu_browse" data-panel={{"maintainY": true, "flow-children": "column"}}>
                                                <div className="popup_menu_subheader responsive_hidden">Special Sections</div>
                                                <a className="popup_menu_item" href="https://store.steampowered.com/genre/Free%20to%20Play/?snr=1_5_9__12"> Free to Play </a>
                                                <a className="popup_menu_item" href="https://store.steampowered.com/demos/?snr=1_5_9__12">
                                                    <span>Demos</span>
                                                </a>
                                                <a className="popup_menu_item" href="https://store.steampowered.com/genre/Early%20Access/?snr=1_5_9__12"> Early Access </a>
                                                <div className="category_hr responsive_hidden"></div>
                                                <a className="popup_menu_item" href="https://store.steampowered.com/steamdeck/?snr=1_5_9__category-menu">
                                                    <span>Steam Deck</span>
                                                </a>
                                                <a className="popup_menu_item" href="https://store.steampowered.com/greatondeck/?snr=1_5_9__category-menu">
                                                    <span>Great on Deck</span>
                                                </a>
                                                <div className="category_hr responsive_hidden"></div>
                                                <a className="popup_menu_item" href="https://store.steampowered.com/controller/?snr=1_5_9__12">
                                                    <span>Controller-Friendly</span>
                                                </a>
                                                <a className="popup_menu_item" href="https://store.steampowered.com/remoteplay_hub/?snr=1_5_9__12">
                                                    <span>Remote Play</span>
                                                </a>
                                                <div className="category_hr responsive_hidden"></div>
                                                <a className="popup_menu_item" href="https://store.steampowered.com/vr/?snr=1_5_9__12">
                                                    <span>VR Titles</span>
                                                </a>
                                                <a className="popup_menu_item" href="https://store.steampowered.com/vrhardware/?snr=1_5_9__12">
                                                    <span>VR Hardware</span>
                                                </a>
                                                <div className="category_hr responsive_hidden"></div>
                                                <a className="popup_menu_item" href="https://store.steampowered.com/software/?snr=1_5_9__12"> Software </a>
                                                <a className="popup_menu_item" href="https://store.steampowered.com/soundtracks?snr=1_5_9__12"> Soundtracks </a>
                                                <div className="category_hr responsive_hidden"></div>
                                                <a className="popup_menu_item" href="https://store.steampowered.com/macos?snr=1_5_9__12"> macOS </a>
                                                <a className="popup_menu_item" href="https://store.steampowered.com/linux?snr=1_5_9__12"> SteamOS + Linux </a>
                                                <a className="popup_menu_item" href="https://store.steampowered.com/pccafe/?snr=1_5_9__12">
                                                    <span>For PC Cafés</span>
                                                </a>
                                            </div>
                                            <div className="popup_menu popup_menu_browse leftborder" data-panel={{"maintainY": true, "flow-children": "column"}}>
                                                <div className="popup_menu_subheader reduced_vspace"> Genres </div>
                                                <div className="popup_menu_item popup_genre_expand_header nonresponsive_hidden" data-genre-group="action"> Action </div>
                                                <div className="popup_menu_subheader popup_genre_expand_header responsive_hidden" data-genre-group="action">
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/action/?snr=1_5_9__12"> Action </a>
                                                </div>
                                                <div className="popup_genre_expand_content responsive_hidden" data-genre-group="action">
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/arcade_rhythm/?snr=1_5_9__12">Arcade & Rhythm</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/fighting_martial_arts/?snr=1_5_9__12">Fighting & Martial Arts</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/action_fps/?snr=1_5_9__12">First-Person Shooter</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/hack_and_slash/?snr=1_5_9__12">Hack & Slash</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/action_run_jump/?snr=1_5_9__12">Platformer & Runner</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/action_tps/?snr=1_5_9__12">Third-Person Shooter</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/shmup/?snr=1_5_9__12">shmup</a>
                                                </div>
                                                <div className="popup_menu_item popup_genre_expand_header nonresponsive_hidden" data-genre-group="adventure"> Adventure </div>
                                                <div className="popup_menu_subheader popup_genre_expand_header responsive_hidden" data-genre-group="adventure">
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/adventure/?snr=1_5_9__12"> Adventure </a>
                                                </div>
                                                <div className="popup_genre_expand_content responsive_hidden" data-genre-group="adventure">
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/adventure_rpg/?snr=1_5_9__12">Adventure RPG</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/casual/?snr=1_5_9__12">Casual</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/hidden_object/?snr=1_5_9__12">Hidden Object</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/metroidvania/?snr=1_5_9__12">Metroidvania</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/puzzle_matching/?snr=1_5_9__12">Puzzle</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/story_rich/?snr=1_5_9__12">Story-Rich</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/visual_novel/?snr=1_5_9__12">Visual Novel</a>
                                                </div>
                                            </div>
                                            <div className="popup_menu popup_menu_browse " data-panel={{"maintainY": true, "flow-children": "column"}}>
                                                <div className="popup_menu_subheader reduced_vspace responsive_hidden">
                                                    <br></br>
                                                </div>
                                                <div className="popup_menu_item popup_genre_expand_header nonresponsive_hidden" data-genre-group="rpg"> Role-Playing </div>
                                                <div className="popup_menu_subheader popup_genre_expand_header responsive_hidden" data-genre-group="rpg">
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/rpg/?snr=1_5_9__12"> Role-Playing </a>
                                                </div>
                                                <div className="popup_genre_expand_content responsive_hidden" data-genre-group="rpg">
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/rpg_action/?snr=1_5_9__12">Action RPG</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/adventure_rpg/?snr=1_5_9__12">Adventure RPG</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/rpg_jrpg/?snr=1_5_9__12">JRPG</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/rpg_party_based/?snr=1_5_9__12">Party-Based</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/rogue_like_rogue_lite/?snr=1_5_9__12">Rogue-Like</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/rpg_strategy_tactics/?snr=1_5_9__12">Strategy RPG</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/rpg_turn_based/?snr=1_5_9__12">Turn-Based</a>
                                                </div>
                                                <div className="popup_menu_item popup_genre_expand_header nonresponsive_hidden" data-genre-group="simulation"> Simulation </div>
                                                <div className="popup_menu_subheader popup_genre_expand_header responsive_hidden" data-genre-group="simulation">
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/simulation/?snr=1_5_9__12"> Simulation </a>
                                                </div>
                                                <div className="popup_genre_expand_content responsive_hidden" data-genre-group="simulation">
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/sim_building_automation/?snr=1_5_9__12">Building & Automation</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/sim_dating/?snr=1_5_9__12">Dating</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/sim_farming_crafting/?snr=1_5_9__12">Farming & Crafting</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/sim_hobby_sim/?snr=1_5_9__12">Hobby & Job</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/sim_life/?snr=1_5_9__12">Life & Immersive</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/sim_physics_sandbox/?snr=1_5_9__12">Sandbox & Physics</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/sim_space_flight/?snr=1_5_9__12">Space & Flight</a>
                                                </div>
                                            </div>
                                            <div className="popup_menu popup_menu_browse " data-panel={{"maintainY": true, "flow-children": "column"}}>
                                                <div className="popup_menu_subheader reduced_vspace responsive_hidden">
                                                    <br></br>
                                                </div>
                                                <div className="popup_menu_item popup_genre_expand_header nonresponsive_hidden" data-genre-group="strategy"> Strategy </div>
                                                <div className="popup_menu_subheader popup_genre_expand_header responsive_hidden" data-genre-group="strategy">
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/strategy/?snr=1_5_9__12"> Strategy </a>
                                                </div>
                                                <div className="popup_genre_expand_content responsive_hidden" data-genre-group="strategy">
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/strategy_card_board/?snr=1_5_9__12">Card & Board</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/strategy_cities_settlements/?snr=1_5_9__12">City & Settlement</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/strategy_grand_4x/?snr=1_5_9__12">Grand & 4X</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/strategy_military/?snr=1_5_9__12">Military</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/strategy_real_time/?snr=1_5_9__12">Real-Time Strategy</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/tower_defense/?snr=1_5_9__12">Tower Defense</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/strategy_turn_based/?snr=1_5_9__12">Turn-Based Strategy</a>
                                                </div>
                                                <div className="popup_menu_item popup_genre_expand_header nonresponsive_hidden" data-genre-group="sports_and_racing"> Sports & Racing </div>
                                                <div className="popup_menu_subheader popup_genre_expand_header responsive_hidden" data-genre-group="sports_and_racing">
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/sports_and_racing/?snr=1_5_9__12"> Sports & Racing </a>
                                                </div>
                                                <div className="popup_genre_expand_content responsive_hidden" data-genre-group="sports_and_racing">
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/sports/?snr=1_5_9__12">All Sports</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/sports_fishing_hunting/?snr=1_5_9__12">Fishing & Hunting</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/sports_individual/?snr=1_5_9__12">Individual Sports</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/racing/?snr=1_5_9__12">Racing</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/racing_sim/?snr=1_5_9__12">Racing Sim</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/sports_sim/?snr=1_5_9__12">Sports Sim</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/sports_team/?snr=1_5_9__12">Team Sports</a>
                                                </div>
                                            </div>
                                            <div className="popup_menu popup_menu_browse leftborder" data-panel={{"maintainY": true, "flow-children": "column"}}>
                                                <div className="popup_menu_item popup_genre_expand_header nonresponsive_hidden" data-genre-group="themes"> Themes </div>
                                                <div className="popup_menu_subheader players popup_genre_expand_header responsive_hidden"> Themes </div>
                                                <div className="popup_genre_expand_content responsive_hidden" data-genre-group="themes">
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/anime/?snr=1_5_9__12">Anime</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/horror/?snr=1_5_9__12">Horror</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/mystery_detective/?snr=1_5_9__12">Mystery & Detective</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/exploration_open_world/?snr=1_5_9__12">Open World</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/science_fiction/?snr=1_5_9__12">Sci-Fi & Cyberpunk</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/space/?snr=1_5_9__12">Space</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/survival/?snr=1_5_9__12">Survival</a>
                                                    <div className="spacer responsive_hidden"></div>
                                                </div>
                                                <div className="popup_menu_item popup_genre_expand_header nonresponsive_hidden" data-genre-group="social_and_players"> Player Support </div>
                                                <div className="popup_menu_subheader players popup_genre_expand_header responsive_hidden"> Player Support </div>
                                                <div className="popup_genre_expand_content responsive_hidden" data-genre-group="social_and_players">
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/multiplayer_coop/?snr=1_5_9__12">Co-Operative</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/multiplayer_lan/?snr=1_5_9__12">LAN</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/multiplayer_local_party/?snr=1_5_9__12">Local & Party</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/multiplayer_mmo/?snr=1_5_9__12">MMO</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/multiplayer/?snr=1_5_9__12">Multiplayer</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/multiplayer_online_competitive/?snr=1_5_9__12">Online Competitive</a>
                                                    <a className="popup_menu_item" href="https://store.steampowered.com/category/singleplayer/?snr=1_5_9__12">Singleplayer</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="tab  " href="https://store.steampowered.com/points/?snr=1_5_9__12">
                                        <span>Points Shop</span>
                                    </a>
                                    <a className="tab  " href="https://store.steampowered.com/news/?snr=1_5_9__12">
                                        <span>News</span>
                                    </a>
                                    <a className="tab  " href="https://store.steampowered.com/labs/?snr=1_5_9__12">
                                        <span>Labs</span>
                                    </a>
                                    <div className="search_flex_spacer"></div>
                                    <div className="search_area">
                                        <div id="store_search">
                                            <form id="searchform" name="searchform" method="get" action="https://store.steampowered.com/search/" onSubmit={SearchSuggestCheckTerm()} role="search">
                                                <input type="hidden" name="snr" value="1_5_9__12"></input>
                                                <div className="searchbox">
                                                    <input id="store_nav_search_term" name="term" type="search" className="default" placeholder="search" size="22" autoComplete="off" maxLength="64"></input>
                                                    <a href="#" id="store_search_link" onClick={(e) => {var $Form = $J(this).parents('form'); $Form.submit(); return false;}} aria-label="Search Steam">
                                                        <img src="https://store.akamai.steamstatic.com/public/images/blank.gif"></img>
                                                    </a>
                                                </div>
                                            </form>
                                        </div>
                                        <div id="searchterm_options" className="search_suggest popup_block_new" style={{display: "none"}}>
                                            <div className="popup_body search_v2" style={{borderTop: "none"}}>
                                                <div id="search_suggestion_contents"> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="store_nav_rightcap"></div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default SecondHeader;