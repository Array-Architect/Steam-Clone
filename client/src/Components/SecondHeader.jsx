function Header({ }) {
    //
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
                            <div className="store_nav" data-panel="{&quot;flow-children&quot;:&quot;row&quot;}">
                                <div className="tab  flyout_tab " id="foryou_tab" data-flyout="foryou_flyout" data-flyout-align="left" data-flyout-valign="bottom" data-flyout-delay="300" data-panel={{"focusable":true}}>
                                    <span className="pulldown">
                                        <a className="pulldown_desktop" href="https://store.steampowered.com/?snr=1_5_9__12">Your Store</a>
                                        <a className="pulldown_mobile" href="#">Your Store</a>
                                        <span></span>
                                    </span>
                                </div>
                                {/* <div className="popup_block_new flyout_tab_flyout responsive_slidedown" id="foryou_flyout" style="display: none;">
                                    <div className="popup_body popup_menu popup_menu_browse">
                                        <a className="popup_menu_item" href="https://store.steampowered.com/?snr=1_5_9__12"> Home </a>
                                        <a className="popup_menu_item" href="https://store.steampowered.com/communityrecommendations/?snr=1_5_9__12">" Community Recommendations "</a>
                                        <a className="popup_menu_item" href="https://store.steampowered.com/recommended/?snr=1_5_9__12"> Recently Viewed </a>
                                        <a className="popup_menu_item" href="https://store.steampowered.com/curators/?snr=1_5_9__12"> Steam Curators </a>
                                    </div>
                                </div> */}
                                <div className="tab  flyout_tab" id="noteworthy_tab" data-flyout="noteworthy_flyout" data-flyout-align="left" data-flyout-valign="bottom" data-flyout-delay="300" data-panel="{&quot;focusable&quot;:true}">
                                    <span className="pulldown">
                                        <a href="javascript:void(0);" className="pulldown_desktop">New & Noteworthy</a>
                                        <a href="javascript:void(0);" className="pulldown_mobile">New & Noteworthy</a>
                                        <span></span>
                                    </span>
                                </div>
                                <div className="popup_block_new flyout_tab_flyout responsive_slidedown" id="noteworthy_flyout" style={{visibility: "visible", top: "42px", left: "96.125px", display: "none", opacity: 1}}>
                                    <div className="popup_body popup_menu_twocol_new">
                                        <div className="popup_menu popup_menu_browse" data-panel="{&quot;maintainY&quot;:true,&quot;flow-children&quot;:&quot;column&quot;}">
                                            <div className="popup_menu_subheader responsive_hidden">Popular</div>
                                            <a className="popup_menu_item" href="https://store.steampowered.com/charts/topselling/?snr=1_5_9__12"> Top Sellers </a>
                                            <a className="popup_menu_item" href="https://store.steampowered.com/charts/mostplayed/?snr=1_5_9__12"> Most Played </a>
                                            <div className="category_hr responsive_hidden"></div>
                                            <a className="popup_menu_item" href="https://store.steampowered.com/explore/new/?snr=1_5_9__12"> New Releases </a>
                                            <a className="popup_menu_item" href="https://store.steampowered.com/explore/upcoming/?snr=1_5_9__12"> Upcoming Releases </a>
                                            <div className="popup_menu_subheader responsive_hidden">News & Updates</div>
                                            <a className="popup_menu_item" href="https://store.steampowered.com/newshub/?snr=1_5_9__12"> Recently Updated </a>
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

export default Header;