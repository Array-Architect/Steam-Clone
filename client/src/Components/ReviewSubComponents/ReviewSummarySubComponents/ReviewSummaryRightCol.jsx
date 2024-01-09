import { useState } from 'react'
import { setContexts } from '../../../Context'

const ReviewSummaryRightCol = () => {

  const {
    reviewBoxPartial,
    setReviewBoxPartial,
    toolTipAxis,
    setToolTipAxis,
    reviewTipVisible,
    setReviewTipVisible
  } =  setContexts()

  const reviewBoxPartialHandler = () => {
    setReviewBoxPartial(!reviewBoxPartial)
  }

  const toolTipLoc = (event) => {
    setToolTipAxis({x:event.pageX,y:event.pageY})
    setReviewTipVisible(!reviewTipVisible)
  }

  const toolTipStop = () => {
    setReviewTipVisible(false)
  }

  return (
  <div className="rightcol recent_reviews">
    <div className="user_reviews_sub_header">Recently Posted</div>
    <div className="review_box short  ">
      <div id="ReviewContentrecent_short155534039">
        <a href="https://steamcommunity.com/id/shahediran/recommended/892970/" className="short_header tooltip" onMouseOver={toolTipLoc} onMouseOut={toolTipStop}>
          <img className="review_source tooltip" data-tooltip-text="Product purchased directly from Steam" src="https://store.cloudflare.steamstatic.com/public/shared/images/userreviews/icon_review_steam.png"></img>
          <div className="thumb">
            <img src="https://store.cloudflare.steamstatic.com/public/shared/images/userreviews/icon_thumbsUp_v6.png" width="40" height="40"></img>
          </div>
          <div className="persona_name">
            <span data-miniprofile="1025637856">Shahed</span>
          </div>
          <div className="hours ellipsis"> 26.0 hrs</div>
        </a>
<div className="shortcol" id="ReviewContentrecent_short155534039_shortcol">
  <div className="early_access_review tooltip" data-tooltip-text="This review was written while Valheim was marked as Steam Early Access">Early Access Review</div>
  <div className="responsive_review_leftcol_ctn" id="ReviewContentrecent_short155534039_leftcol_ctn"></div>
  <div className="postedDate">
    Posted: January 7
    <div className="responsive_purchase_source"> Direct from Steam </div>
  </div>
  <div className="content">
    Great game
    <div className="gradient"></div>
  </div>
  <div className="posted" style={{height: '11px'}}>
    <div className="view_more">
      <a href="#" >Read More</a>
    </div>
  </div>
  <div className="hr"></div>
  <div className="control_block">
    <span className="text review_was_helpful">Helpful?</span>
    <div className="vote_button_ctn" id="reviewButtonContainer155534039">
      <a className="btnv6_grey_black btn_small_thin ico_hover " id="RecommendationVoteUpBtnrecent_short155534039">
        <span>
          <i className="ico16 thumb_upv6"></i>
          {" Yes"}
        </span>
      </a>
      <a className="btnv6_grey_black btn_small_thin ico_hover " id="RecommendationVoteDownBtnrecent_short155534039">
        <span>
          <i className="ico16 thumb_downv6"></i>
          {" No"}
        </span>
      </a>
      <a className="btnv6_grey_black btn_small_thin ico_hover " id="RecommendationVoteTagBtnrecent_short155534039_1">
        <span><i className="ico16 funny"></i>
        {' Funny'}
        </span>
      </a>
      <a className="btnv6_grey_black btn_small_thin review_award_button">
        <span><img src="https://store.cloudflare.steamstatic.com/public/shared/images//award_icon.svg" className="reward_btn_icon"/>
        {' Award'}
        </span>
      </a>
    </div>
  </div>
  <div className="vote_info" style={{display: "none"}}>
    <div className="review_award_ctn" id="reviewAwardContainer155534039"></div>
  </div>
  <div style={{clear: "left"}}></div>
</div>
      </div>
    </div>
  </div>
  )
}

export default ReviewSummaryRightCol