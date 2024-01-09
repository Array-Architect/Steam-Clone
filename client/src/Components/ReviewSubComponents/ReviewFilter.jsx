import {useState} from 'react'
import { setContexts } from '../../Context'

const ReviewFilter = () => {

  const { graphVisible, setGraphVisible } = setContexts()

  const showGraph = () => {
    setGraphVisible(!graphVisible)
  }

  return (
    <div id="review_filter_options" className="user_reviews_filter_options flyout graph_collapsed">

    {/* The below code needs to be added to each input tag once the function has been defined */}
    {/* checked onchange={ShowFilteredReviews()} */}

    <div className="user_reviews_filter_menu">
      <div className="title">Review Type</div>
      <div className="user_reviews_filter_menu_flyout">
        <div className="user_reviews_filter_menu_flyout_content">
          <input type="radio" name="review_type" value="all" id="review_type_all" ></input>
          <label htmlFor="review_type_all">
             {' All'}
            <span className="user_reviews_count">&nbsp;(433,306)&nbsp;</span>
          </label>
          <br></br>

          <input type="radio" name="review_type" value="positive" id="review_type_positive"></input>
          <label htmlFor="review_type_positive">
            {' Positive'}
            <span className="user_reviews_count">&nbsp;(410,974)&nbsp;</span>
          </label>
          <br></br>

          <input type="radio" name="review_type" value="negative" id="review_type_negative"></input>
          <label htmlFor="review_type_negative">
            {' Negative'}
            <span className="user_reviews_count">&nbsp;(22,332)&nbsp;</span>
          </label>

        </div>
      </div>
    </div>

    <div className="user_reviews_filter_menu">
      <div className="title">Purchase Type</div>
      <div className="user_reviews_filter_menu_flyout">
        <div className="user_reviews_filter_menu_flyout_content">
          <input type="radio" name="purchase_type" value="all" id="purchase_type_all"></input>
          <label htmlFor="purchase_type_all">
            {' All'}
            <span className="user_reviews_count">&nbsp;(433,314)&nbsp;</span>
          </label>
          <br></br>

          <input type="radio" name="purchase_type" value="steam" id="purchase_type_steam"></input>
          <label htmlFor="purchase_type_steam">
            {' Steam Purchasers'}
            <span className="user_reviews_count">&nbsp;(371,092)&nbsp;</span>
            <a className="tooltip" data-tooltip-text="These are reviews written by customers that purchased the game directly from Steam.">
              <img src="https://store.cloudflare.steamstatic.com/public/shared/images/ico/icon_questionmark_dark.png"></img>
            </a>
          </label>
          <br></br>

          <input type="radio" name="purchase_type" value="non_steam_purchase" id="purchase_type_non_steam"></input>
          <label htmlFor="purchase_type_non_steam">
            {' Other'}
            <span className="user_reviews_count">&nbsp;(62,222)&nbsp;</span>
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
          <label htmlFor="review_language_all">
            {' All Languages'}
            <span className="user_reviews_count">&nbsp;(433,314)&nbsp;</span>
          </label>
          <br></br>

          <input type="radio" name="review_language" id="review_language_mine" value="english"/>
          <label htmlFor="review_language_mine">
            {' Your Languages'}
            <span className="user_reviews_count">&nbsp;(256,582)&nbsp;</span>
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
            To view reviews within a date range, please click and drag a selection on a graph above or click on a specific bar.
            <br></br>
            <br></br>
            {/* onClick={SetReviewsGraphVisibility( true )}   This needs to be added to the span below once the function has been declared */}
            <span className="btn_darkblue_white_innerfade btn_small_thin" onClick={showGraph}>
              <span>Show graph</span>
            </span>
          </div>

          <input type="radio" name="review_date_range" id="review_date_range_all" value="all" disabled/>
          <label htmlFor="review_date_range_all">{' Lifetime'}</label>
          <br></br>

          <input type="radio" name="review_date_range" id="review_date_range_histogram" value="include"></input>
          <label htmlFor="review_date_range_histogram">{' Only Specific Range (Select on graph above)'}</label>
          <br></br>

          <input type="radio" name="review_date_range" id="review_date_range_exclude_histogram" value="exclude"></input>
          <label htmlFor="review_date_range_exclude_histogram">{' Exclude Specific Range (Select on graph above)'}</label>
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
            Filter reviews by the user's playtime when the review was written:
          </div>

          <input type="radio" name="review_playtime_preset" id="review_playtime_preset_0" value="0"></input>
          <label htmlFor="review_playtime_preset_0">{' No Minimum'}</label>
          <br></br>

          <input type="radio" name="review_playtime_preset" id="review_playtime_preset_1" value="1"></input>
          <label htmlFor="review_playtime_preset_1">{' Over 1 hour'}</label>
          <br></br>

          <input type="radio" name="review_playtime_preset" id="review_playtime_preset_10" value="10"></input>
          <label htmlFor="review_playtime_preset_10">{' Over 10 hours'}</label>
          <br></br>

          <input type="radio" name="review_playtime_preset" id="review_playtime_preset_100" value="100"></input>
          <label htmlFor="review_playtime_preset_100">{' Over 100 hours'}</label>
          <br></br>

          <div id="app_reviews_playtime_range_text">
            <span id="app_reviews_playtime_range_text_min">{'No minimum '}</span>
            {' to '}
            <span id="app_reviews_playtime_range_text_max">{' No maximum'}</span>
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
        <option value="summary">Summary</option>
        <option value="all">Most Helpful</option>
        <option value="recent">Recent</option>
        <option value="funny">Funny</option>
      </select>
    </div>

    {/* The following line of code needs to be added to the input checkbox once the function has been declared */}
    {/* onchange={ChangedOfftopicReviewActivityFilter()} */}

    <div id="user_reviews_offtopic_activity_menu" className="user_reviews_filter_menu" style={{display: "none"}}>
      <div className="title">Off-topic Review Activity</div>
      <div className="user_reviews_filter_menu_flyout">
        <div className="user_reviews_filter_menu_flyout_content">
          <div className="user_reviews_offtopic_activity_explanation">
            When enabled, off-topic review activity will be filtered out. This defaults to your Review Score Setting. Read more about it in the
            <a href="https://steamcommunity.com/games/593110/announcements/detail/1808664240333155775?snr=1_5_9_">blog post</a>
            .
          </div>
          <input type="checkbox" id="reviews_offtopic_activity_checkbox"></input>
          <label htmlFor="reviews_offtopic_activity_checkbox">Enabled</label>
        </div>
      </div>
    </div>


    <div style={{float: "right"}}>
      { !graphVisible ?
      <span id="review_show_graph_button" className="btnv6_blue_hoverfade btn_small_thin review_graph_toggle" onClick={showGraph}>
        <span>Show graph</span>
        <div className="graph_toggle_icon down"></div>
      </span>
      :
      <span id="review_hide_graph_button" className="btnv6_blue_hoverfade btn_small_thin review_graph_toggle" onClick={showGraph}>
        <span>Hide graph</span>
        <div className="graph_toggle_icon up"></div>
      </span>
      }
    </div>

    <div style={{clear: "both"}}></div>

  </div>
  )

}

export default ReviewFilter