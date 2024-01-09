const InfoContainer = () => {

  const panelData = {
    focusable: true,
    clickOnActivate: true
  }

  return (
    <div className="reviews_info_ctn">

    {/* onclick={ShowReviewSettingsModal()} this line of code should be added to the div below once the function has been declared*/}
    <div id="reviews_active_filters" data-panel={JSON.stringify(panelData)} className="user_reviews_active_filters" >

    <div id="reviews_filter_title" className="title">Filters</div>
      <div id="reviews_filter_title_responsive" style={{display:"none"}} className="title">
      <img src="https://store.cloudflare.steamstatic.com/public/images/bigpicture/icon_settings.png"></img>
      "Filters "
      </div>

    {/* onclick={ClearReviewTypeFilter()} this line of code should be added to the div below once the function has been declared*/}
    <div id="reviews_filter_type" className="active_filter"  style={{display: "none"}}></div>

    {/* onclick={ClearReviewPurchaseTypeFilter()} this line of code should be added to the div below once the function has been declared*/}
    <div id="reviews_filter_purchase_type" className="active_filter"  style={{display: "none"}}></div>

    {/* onclick={ClearReviewLanguageFilter()}this line of code should be added to the div below once the function has been declared*/}
    <div id="reviews_filter_language" className="active_filter " >Your Languages</div>

    {/* onclick={ClearReviewDateRangeFilter()} this line of code should be added to the div below once the function has been declared*/}
    <div id="reviews_filter_graph" className="active_filter"  style={{display: "none"}}>
      <span id="review_selected_histogram_date_range_prefix"></span>
      <span id="review_selected_histogram_date_range_text"></span>
    </div>

    {/* onclick={ClearOfftopicReviewActivityFilter()}  this line of code should be added to the div below once the function has been declared*/}
    <div id="reviews_filter_offtopic_activity" className="active_filter" style={{display: "none"}}>Excluding Off-topic Review Activity</div>

    {/* onclick={ClearReviewPlaytimeFilter()}this line of code should be added to the div below once the function has been declared*/}
    <div id="reviews_filter_playtime" className="active_filter"  style={{display: "none"}}>
      "Playtime: "
      <span id="review_playtime_preset_text"></span>
    </div>


    </div>

    <div className="user_reviews_filter_score visible" id="user_reviews_filter_score">
      <div>
        <span>
          {'Showing '}
          <b>256,586</b>
          {' reviews that match the filters above '}
        </span>
         {'( '}
        <span className="game_review_summary positive" data-tooltip-html="95% of the 256,586 user reviews for this game are positive.">Overwhelmingly Positive</span>
         {' )'}
      </div>
    </div>

    {/* onClick={window.location='#app_reviews_hash'}  This line of code needs to be added to the div below once it has been declared*/}
    <div id="appReviewsAll_Detail" className="user_reviews_summary_row" style={{cursor: "pointer", display: "none"}}>
      <div className="subtitle column all">All Reviews:</div>
      <div className="summary column">
        <span className="game_review_summary positive">Overwhelmingly Positive</span>
        <span className="responsive_reviewdesc_short">
          " (95% of 371,092)&nbsp;"
          <span className="desc_short">All Time</span>
        </span>
      </div>
    </div>

    {/* onClick={window.location='#app_reviews_hash'}  This line of code needs to be added to the div below once it has been declared*/}
    <div id="appReviewsRecent_Detail" className="user_reviews_summary_row" style={{cursor: "pointer", display: "none"}} data-tooltip-html="91% of the 4,522 user reviews in the last 30 days are positive.">
      <div className="subtitle column">Recent Reviews:</div>
      <div className="summary column">
        <span className="game_review_summary positive">Very Positive</span>
        <span className="responsive_reviewdesc_short">
          " (91% of 4,522)&nbsp;"
          <span className="desc_short">Recent</span>
        </span>
      </div>
    </div>


  </div>
  )

}

export default InfoContainer