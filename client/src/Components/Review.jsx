const Review = () => {

  return (
        <div className="review_ctn">
          <div className="page_content">
            <div id="app_reviews_hash" className="app_reviews_area">
              <h2 className="user_reviews_header no_bottom_margin">Customer reviews</h2>
              <div id="review_recent_events_container" className="review_recent_events  "></div>


              <div id="review_histograms_container" className="has_data">
                <canvas id="review_graph_canvas" width="940" height="350"></canvas>
                <div id="review_histogram_rollup_section" className="review_histogram_section">
                  <div className="user_reviews_summary_bar">
                    <div className="summary_section">
                      <div className="title">Overall Reviews:</div>
                      <span className="game_review_summary positive" data-tooltip-html="95% of the 370,872 user reviews for this game are positive.">Overwhelmingly Positive</span>
                      <span>(370,872 reviews)</span>
                      <a className="tooltip" data-tooltip-text="This summary uses only reviews written by customers that purchased the game directly from Steam.">
                        <img src="https://store.cloudflare.steamstatic.com/public/shared/images/ico/icon_questionmark.png"></img>
                      </a>
                    </div>
                  </div>
                  <div id="review_histogram_rollup_container" className="review_histogram">
                    <div id="review_histogram_rollup" style={{padding: "0px", position: "relative"}}>
                      <canvas className="flot-base" width="877" height="375" style={{direction: "ltr", position: "absolute", left: "0px", top: "0px", width: "585px", height: "250px"}}></canvas>
                      <div className="flot-text" style={{position: "absolute", inset: "0px", fontSize: "smaller", color: "rgb(84, 84, 84)"}}>
                        <div className="flot-x-axis flot-x1-axis xAxis x1Axis" style={{position: "absolute", inset: "0px", display: "block"}}>
                          <div className="flot-tick-label tickLabel" style={{position: "absolute", maxWidth: "73px", top: "239px", left: "92px", textAlign: "center"}}>Jul 2021</div>
                          <div className="flot-tick-label tickLabel" style={{position: "absolute", maxWidth: "73px", top: "239px", left: "180px", textAlign: "center"}}>Jan 2022</div>
                          <div className="flot-tick-label tickLabel" style={{position: "absolute", maxWidth: "73px", top: "239px", left: "270px", textAlign: "center"}}>Jul 2022</div>
                          <div className="flot-tick-label tickLabel" style={{position: "absolute", maxWidth: "73px", top: "239px", left: "358px", textAlign: "center"}}>Jan 2023</div>
                          <div className="flot-tick-label tickLabel" style={{position: "absolute", maxWidth: "73px", top: "239px", left: "448px", textAlign: "center"}}>Jul 2023</div>
                          <div className="flot-tick-label tickLabel" style={{position: "absolute", maxWidth: "73px", top: "239px", left: "536px", textAlign: "center"}}>Jan 2024</div>
                        </div>
                        <div className="flot-y-axis flot-y1-axis yAxis y1Axis" style={{position: "absolute", inset: "0px", display: "block"}}>
                          <div className="flot-tick-label tickLabel" style={{position: "absolute", top: "221px", left: "27px", textAlign: "right"}}>0</div>
                          <div className="flot-tick-label tickLabel" style={{position: "absolute", top: "169px", left: "5px", textAlign: "right"}}>25000</div>
                          <div className="flot-tick-label tickLabel" style={{position: "absolute", top: "118px", left: "5px", textAlign: "right"}}>50000</div>
                          <div className="flot-tick-label tickLabel" style={{position: "absolute", top: "66px", left: "5px", textAlign: "right"}}>75000</div>
                          <div className="flot-tick-label tickLabel" style={{position: "absolute", top: "14px", left: "0px", textAlign: "right"}}>100000</div>
                        </div>
                      </div>
                      <canvas className="flot-overlay" width="877" height="375" style={{direction: "ltr", position: "absolute", left: "0px", top: "0px", width: "585px", height: "250px"}}></canvas>
                    </div>
                  </div>
                </div>
                <div id="review_histogram_recent_section" className="review_histogram_section recent">

                  <div className="user_reviews_summary_bar">
                    <div className="summary_section">
                      <div className="title">Recent Reviews:</div>
                      <span className="game_review_summary positive" data-tooltip-html="91% of the 4,448 user reviews in the last 30 days are positive.">Very Positive</span>
                      <span>(4,448 reviews)</span>
                      <a className="tooltip" data-tooltip-text="This summary uses only reviews written by customers that purchased the game directly from Steam.">
                        <img src="https://store.cloudflare.steamstatic.com/public/shared/images/ico/icon_questionmark.png"></img>
                      </a>
                    </div>
                    <div className="review_histogram">
                      <div id="review_histogram_recent" style={{padding: "0px", position: "relative"}}>
                      <canvas className="flot-base" width="472" height="375" style={{direction: "ltr", position: "absolute", left: "0px", top: "0px", width: "315px", height: "250px"}}></canvas>
                      <div className="flot-text" style={{position: "absolute", inset: "0px", fontSize: "smaller", color: "rgb(84, 84, 84)"}}>
                        <div className="flot-x-axis flot-x1-axis xAxis x1Axis" style={{position: "absolute", inset: "0px", display: "block"}}>
                          <div className="flot-tick-label tickLabel" style={{position: "absolute", maxWidth: "52px", top: "239px", left: "34px", textAlign: "center"}}>Dec 08</div>
                          <div className="flot-tick-label tickLabel" style={{position: "absolute", maxWidth: "52px", top: "239px", left: "261px", textAlign: "center"}}>Jan 01</div>
                          <div className="flot-tick-label tickLabel" style={{position: "absolute", maxWidth: "52px", top: "239px", left: "109px", textAlign: "center"}}>Dec 16</div>
                          <div className="flot-tick-label tickLabel" style={{position: "absolute", maxWidth: "52px", top: "239px", left: "184px", textAlign: "center"}}>Dec 24</div>
                        </div>
                        <div className="flot-y-axis flot-y1-axis yAxis y1Axis" style={{position: "absolute", inset: "0px", display: "block"}}>
                          <div className="flot-tick-label tickLabel" style={{position: "absolute", top: "205px", left: "11px", textAlign: "right"}}>0</div>
                          <div className="flot-tick-label tickLabel" style={{position: "absolute", top: "151px", left: "6px", textAlign: "right"}}>50</div>
                          <div className="flot-tick-label tickLabel" style={{position: "absolute", top: "97px", left: "0px", textAlign: "right"}}>100</div>
                          <div className="flot-tick-label tickLabel" style={{position: "absolute", top: "43px", left: "0px", textAlign: "right"}}>150</div>
                        </div>
                      </div>
                      <canvas className="flot-overlay" width="472" height="375" style={{direction: "ltr", position: "absolute", left: "0px", top: "0px", width: "315px", height: "250px"}}></canvas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



              <div id="review_filter_options" className="user_reviews_filter_options flyout">

                {/* The below code needs to be added to each input tag once the function has been defined */}
                {/* checked onchange={ShowFilteredReviews()} */}

                <div className="user_reviews_filter_menu">
                  <div className="title">Review Type</div>
                  <div className="user_reviews_filter_menu_flyout">
                    <div className="user_reviews_filter_menu_flyout_content">
                      <input type="radio" name="review_type" value="all" id="review_type_all" ></input>
                      <label for="review_type_all">
                        "All&nbsp;"
                        <span className="user_reviews_count">(433,306)</span>
                      </label>
                      <br></br>

                      <input type="radio" name="review_type" value="positive" id="review_type_positive"></input>
                      <label for="review_type_positive">
                        "Positive&nbsp;"
                        <span className="user_reviews_count">(410,974)</span>
                      </label>
                      <br></br>

                      <input type="radio" name="review_type" value="negative" id="review_type_negative"></input>
                      <label for="review_type_negative">
                        "Negative&nbsp;"
                        <span class="user_reviews_count">(22,332)</span>
                      </label>

                    </div>
                  </div>
                </div>

                <div className="user_reviews_filter_menu">
                  <div className="title">Purchase Type</div>
                  <div className="user_reviews_filter_menu_flyout">
                    <div className="user_reviews_filter_menu_flyout_content">
                      <input type="radio" name="purchase_type" value="all" id="purchase_type_all"></input>
                      <label for="purchase_type_all">
                        "All&nbsp;"
                        <span className="user_reviews_count">(433,314)</span>
                      </label>
                      <br></br>

                      <input type="radio" name="purchase_type" value="steam" id="purchase_type_steam"></input>
                      <label for="purchase_type_steam">
                        "Steam Purchasers&nbsp;"
                        <span className="user_reviews_count">(371,092)</span>
                        <a className="tooltip" data-tooltip-text="These are reviews written by customers that purchased the game directly from Steam.">
                          <img src="https://store.cloudflare.steamstatic.com/public/shared/images/ico/icon_questionmark_dark.png"></img>
                        </a>
                      </label>
                      <br></br>

                      <input type="radio" name="purchase_type" value="non_steam_purchase" id="purchase_type_non_steam"></input>
                      <label for="purchase_type_non_steam">
                        "Other&nbsp;"
                        <span className="user_reviews_count">(62,222)</span>
                        <a className="tooltip" data-tooltip-text="These are reviews written by customers that did not purchase the game on Steam. (This may include legitimate sources such as other digital stores, retail stores, testing purposes, or press review purposes. Or, from inappropriate sources such as copies given in exchange for reviews.)">
                          <img src="https://store.cloudflare.steamstatic.com/public/shared/images/ico/icon_questionmark_dark.png"></img>
                        </a>
                      </label>

                    </div>
                  </div>
                </div>

                <div className="user_reviews_filter_menu">
                  <div className="title">Language</div>
                  <div className="user_reviews_filter_menu_flyout">
                    <div className="user_reviews_filter_menu_flyout_content">

                      <input type="radio" name="review_language" id="review_language_all" value="all"></input>
                      <label for="review_language_all">
                        "All Languages&nbsp;"
                        <span className="user_reviews_count">(433,314)</span>
                      </label>
                      <br></br>

                      <input type="radio" name="review_language" id="review_language_mine" value="english"></input>
                      <label for="review_language_mine">
                        "Your Languages&nbsp;"
                        <span className="user_reviews_count">(256,582)</span>
                        <a className="tooltip" data-tooltip-html="Your preferences are currently set to show content authored in these languages: English.<br><br> Click 'customize' below to modify your preferences.">
                          <img src="https://store.cloudflare.steamstatic.com/public/shared/images/ico/icon_questionmark_dark.png"></img>
                        </a>
                      </label>
                      <br></br>

                      <div className="user_reviews_customize_language">
                        <a href="https://store.steampowered.com//account/languagepreferences">Customize</a>
                      </div>


                    </div>
                  </div>
                </div>

                <div className="user_reviews_filter_menu" id="reviews_date_range_menu">
                  <div className="title">Date Range</div>
                  <div className="user_reviews_filter_menu_flyout">
                    <div className="user_reviews_filter_menu_flyout_content">

                      <div className="user_reviews_date_range_explanation">
                        " To view reviews within a date range, please click and drag a selection on a graph above or click on a specific bar. "
                        <br></br>
                        <br></br>
                        <span className="btn_darkblue_white_innerfade btn_small_thin" onclick="SetReviewsGraphVisibility( true ); ">
                          <span>Show graph</span>
                        </span>
                      </div>

                      <input type="radio" name="review_date_range" id="review_date_range_all" value="all"></input>
                      <label for="review_date_range_all">Lifetime</label>
                      <br></br>

                      <input type="radio" name="review_date_range" id="review_date_range_histogram" value="include"></input>
                      <label for="review_date_range_histogram">Only Specific Range (Select on graph above)&nbsp;</label>
                      <br></br>

                      <input type="radio" name="review_date_range" id="review_date_range_exclude_histogram" value="exclude"></input>
                      <label for="review_date_range_exclude_histogram">Exclude Specific Range (Select on graph above)&nbsp;</label>
                      <br></br>

                    </div>
                  </div>
                </div>

                {/* The following line of code needs to be added to the input tags inside the next filter menu once the function has been declared */}
                {/* onchange={SelectPlaytimeFilterPreset( 0 )}    Be sure to adjust the number to the corresponding input tag value*/}

                <div className="user_reviews_filter_menu">
                  <div className="title">Playtime</div>
                  <div className="user_reviews_filter_menu_flyout">
                    <div className="user_reviews_filter_menu_flyout_content">

                      <div className="user_reviews_steam_labs_desc">
                        <a href="https://store.steampowered.com//communityrecommendations/">
                          <img src="https://cdn.cloudflare.steamstatic.com/store/labs/main/images/steam_labs_logo.svg"></img>
                          <span>Brought to you by Steam Labs</span>
                        </a>
                      </div>

                      <div className="user_reviews_playtime_filter_explanation">
                        " Filter reviews by the user's playtime when the review was written: "
                      </div>

                      <input type="radio" name="review_playtime_preset" id="review_playtime_preset_0" value="0" onchange="SelectPlaytimeFilterPreset( 0 )" checked></input>
                      <label for="review_playtime_preset_0">No Minimum</label>
                      <br></br>

                      <input type="radio" name="review_playtime_preset" id="review_playtime_preset_1" value="1" onchange="SelectPlaytimeFilterPreset( 1 )"></input>
                      <label for="review_playtime_preset_1">Over 1 hour</label>
                      <br></br>

                      <input type="radio" name="review_playtime_preset" id="review_playtime_preset_10" value="10" onchange="SelectPlaytimeFilterPreset( 10 )"></input>
                      <label for="review_playtime_preset_10">Over 10 hours</label>
                      <br></br>

                      <input type="radio" name="review_playtime_preset" id="review_playtime_preset_100" value="100" onchange="SelectPlaytimeFilterPreset( 100 )"></input>
                      <label for="review_playtime_preset_100">Over 100 hours</label>
                      <br></br>

                      <div id="app_reviews_playtime_range_text">
                        <span id="app_reviews_playtime_range_text_min">No minimum</span>
                        " to "
                        <span id="app_reviews_playtime_range_text_max">No maximum</span>
                      </div>

                      <input type="hidden" id="app_reviews_playtime_range_min" value="0"></input>
                      <input type="hidden" id="app_reviews_playtime_range_max" value="0"></input>

                      <div id="app_reviews_playtime_slider" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                        <div className="ui-slider-range ui-widget-header" style={{left: "0%", width: "100%"}}></div>
                        <a className="ui-slider-handle ui-state-default ui-corner-all" href="#" style={{left: "0%"}}></a>
                        <a className="ui-slider-handle ui-state-default ui-corner-all" href="#" style={{left: "100%"}}></a>
                      </div>


                    </div>
                  </div>
                </div>

                {/* The following line of code needs to be added to the select tag below once the function has been declared */}
                {/* onchange={ShowFilteredReviews()} */}

                <div className="user_reviews_filter_display_as">
                  <span className="title">Display As: </span>
                  <select id="review_context" >
                    <option value="summary">Summary</option>slot
                    <option value="all">Most Helpful</option>slot
                    <option value="recent">Recent</option>slot
                    <option value="funny">Funny</option>slot
                  </select>
                </div>

                {/* The following line of code needs to be added to the input checkbox once the function has been declared */}
                {/* onchange={ChangedOfftopicReviewActivityFilter()} */}

                <div id="user_reviews_offtopic_activity_menu" className="user_reviews_filter_menu" style={{display: "none"}}>
                  <div className="title">Off-topic Review Activity</div>
                  <div className="user_reviews_filter_menu_flyout">
                    <div className="user_reviews_filter_menu_flyout_content">
                      <div className="user_reviews_offtopic_activity_explanation">
                        " When enabled, off-topic review activity will be filtered out. This defaults to your Review Score Setting. Read more about it in the "
                        <a href="https://steamcommunity.com/games/593110/announcements/detail/1808664240333155775?snr=1_5_9_">blog post</a>
                        ". "
                      </div>
                      <input type="checkbox" id="reviews_offtopic_activity_checkbox"></input>
                      <label for="reviews_offtopic_activity_checkbox">Enabled</label>
                    </div>
                  </div>
                </div>

                {/* The following line of code needs to be added to the show/hide graph buttons below once it has been declared */}
                {/* onclick={SetReviewsGraphVisibility( true )}     Be sure to adjust the boolean value accordingly*/}

                <div style={{float: "right"}}>
                  <span id="review_show_graph_button" className="btnv6_blue_hoverfade btn_small_thin review_graph_toggle">
                    <span>Show graph</span>
                    <div className="graph_toggle_icon down">&nbsp;</div>
                  </span>
                  <span id="review_hide_graph_button" className="btnv6_blue_hoverfade btn_small_thin review_graph_toggle">
                    <span>Hide graph</span>
                    <div className="graph_toggle_icon up">&nbsp;</div>
                  </span>
                </div>

                <div style={{clear: "both"}}></div>

              </div>




            </div>
          </div>
        </div>
  )
}

export default Review