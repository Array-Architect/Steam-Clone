import { useState } from 'react'
import { setContexts } from '../../../Context'

const ReviewSummaryLeftCol = () => {

  const {
    reviewBoxPartial,
    setReviewBoxPartial,
    toolTipAxis,
    setToolTipAxis,
    reviewTipVisible,
    setReviewTipVisible
  } = setContexts()

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
    <div className="leftcol">
      {/* Summary SubHeader */}
      <div className="user_reviews_sub_header">
        Most Helpful Reviews&nbsp;
        <span className="user_reviews_most_helpful_days">{" In The Past 30 Days"}</span>
      </div>

      {/* Review Boxes */}
      {/* The data panels for this section should be reviewed for further functionality */}
      <div className={ reviewBoxPartial ? "review_box partial" : "review_box"}>
        <div id="ReviewContentsummary153546726">
          {/* Review Box Left Col */}
          <div className="leftcol" id="ReviewContentsummary153546726_leftcol">
            <div className="avatar">
              <a href="https://steamcommunity.com/profiles/76561197971770492/">
                <div className="playerAvatar offline" data-miniprofile="11504764">
                  <img src="https://avatars.cloudflare.steamstatic.com/1c42b2fa17332c6055c94b8b867ae6704ac92326.jpg" srcSet="https://avatars.cloudflare.steamstatic.com/1c42b2fa17332c6055c94b8b867ae6704ac92326.jpg 1x, https://avatars.cloudflare.steamstatic.com/1c42b2fa17332c6055c94b8b867ae6704ac92326_medium.jpg 2x" alt="iteration2"></img>
                </div>
              </a>
            </div>
            <div className="persona_name">
              <a href="https://steamcommunity.com/profiles/76561197971770492/" data-miniprofile="11504764">iteration2</a>
            </div>
            <div className="num_reviews">
              <a href="https://steamcommunity.com/profiles/76561197971770492/recommended/">4 reviews</a>
            </div>
          </div>
          {/* Review Box Right Col */}
          <div className="rightcol" id="ReviewContentsummary153546726_rightcol">
            <a href="https://steamcommunity.com/profiles/76561197971770492/recommended/892970/" className="vote_header tooltip" data-tooltip-text="See Full Review">
              <div className="thumb">
                <img id="votingImage" src="https://store.cloudflare.steamstatic.com/public/shared/images/userreviews/icon_thumbsUp_v6.png" width="40" height="40"></img>
                <img className="responsive_voting_image" src="https://community.cloudflare.steamstatic.com/public/images/apphubs/bigpicture/thumbs_upselected.png" width="40" height="40"></img>
              </div>
              <img className="review_source tooltip" data-tooltip-text="Product purchased directly from Steam" src="https://store.cloudflare.steamstatic.com/public/shared/images/userreviews/icon_review_steam.png"></img>
              <div className="title ellipsis" onMouseOver={toolTipLoc} onMouseOut={toolTipStop} key={'fullReview'}>Recommended</div>
              <div className="hours ellipsis"> 306.1 hrs on record (297.1 hrs at review time) </div>
            </a>
            <div className="early_access_review tooltip" data-tooltip-text="This review was written while Valheim was marked as Steam Early Access">Early Access Review</div>
            <div className="responsive_review_leftcol_ctn" id="ReviewContentsummary153546726_leftcol_ctn"></div>
            <div className="postedDate">
              Posted: December 13, 2023
              <div className="responsive_purchase_source"> Direct from Steam </div>
            </div>
            <div className="content">
              Valheim really nails a lot of things that the survival genre sometimes struggles with:
              <br/>
              <br/>
              The sandbox gameplay that never rushes you is balanced with a meaningful progression system that keeps you fixed on certain goals and milestones.
              <br/>
              <br/>
              Acquiring and consuming better food makes you more capable in combat and exploration, but you will never simply drop dead due to hunger, making sustenance feel more like a reward than a nagging requirement.
              <br/>
              <br/>
              The building system is rewarding. Your shelters must be constructed with adequate support and ventilation of smoke in mind, and interior comforts increase the amount of rest you gain, incentivizing you to not just build a house, but a nice house.
              <br/>
              <br/>
              You can construct paired portals to fast travel across the map, but certain raw materials cannot be carried through them, which creates interesting logistical choices between shipping materials over long distances by cart or by boat, and building outposts to process and craft your materials closer to where they are mined. Additionally, certain crops can only grow in certain biomes, which further incentivizes setting up multiple bases. Thankfully, the rewarding nature of the building system makes the prospect of building a new base an opportunity rather than a burden.
              <br/>
              <br/>
              Like most games in this genre, a good amount of time is spent gathering resources, but the amount you need never seems onerous. It can be time consuming, but this is often because you will get interrupted by monsters drawn to the sound of mining ore and chopping trees, which breaks up what could otherwise be a monotonous task.
              <br/>
              <br/>
              And lastly, the game's unique graphical style is gorgeous. Low polygon counts and simple textures free up resources that are spent on beautiful lighting, atmospherics, and color composition.
              <br/>
              <br/>
              This type of open-world survival/building game isn't for everyone. It's heavy on atmosphere, but light on story, and there are some routine repetitive tasks involved. But if you've ever enjoyed another game in this genre, or are curious and looking for one to start on, Valheim strikes an amazing balance that accentuates the genre's strengths while minimizing its inherent flaws.
              <div className="gradient"></div>
            </div>
            <div className="posted" style={{height: "11px"}}>
              <div className="view_more">
                {/* The following needs to be added to the a tag below once it has been declared onClick={UserReviewShowMore(reviewId, summary)} */}
                {/* View the a tag on steam for more reference to it's functionality */}
                <a onClick={reviewBoxPartialHandler}>Read More</a>
              </div>
            </div>
            <div className="hr"></div>
            <div className="control_block">
              <span className="text review_was_helpful">Was this review helpful?</span>
              {/* Review Box Vote Buttons */}
              {/* The vote buttons need to be reviewed on steam to determine onClick functionality */}
              <div className="vote_button_ctn" id="reviewButtonContainer153546726">

                <a className="btnv6_grey_black btn_small_thin ico_hover " id="RecommendationVoteUpBtnsummary153546726">
                  <span>
                    <i className="ico16 thumb_upv6"></i>
                    {' Yes'}
                  </span>
                </a>

                <a className="btnv6_grey_black btn_small_thin ico_hover " id="RecommendationVoteDownBtnsummary153546726">
                  <span>
                    <i className="ico16 thumb_downv6"></i>
                    {' No'}
                  </span>
                </a>

                <a className="btnv6_grey_black btn_small_thin ico_hover " id="RecommendationVoteTagBtnsummary153546726_1">
                  <span>
                    <i className="ico16 funny"></i>
                    {' Funny'}
                  </span>
                </a>

                <a className="btnv6_grey_black btn_small_thin review_award_button">
                  <span>
                    <img src="https://store.cloudflare.steamstatic.com/public/shared/images//award_icon.svg" className="reward_btn_icon"></img>
                    {' Award'}
                  </span>
                </a>
              </div>
            </div>
            <div className="vote_info">
              233 people found this review helpful
              <div className="commentCount">
                <a href="https://steamcommunity.com/profiles/76561197971770492/recommended/892970/" className="tooltip" data-tooltip-text="See Full Review">5 </a>
              </div>
              <br/>
              1 person found this review funny
              <div className="review_award_ctn" id="reviewAwardContainer153546726">
                <div data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" className="review_award tooltip" style={{width: '36.58px'}} data-reaction="17" data-reactioncount="4" data-tooltip-html="		<div>
                  <div class=&quot;reaction_award_icon&quot;>
                    <img src=&quot;https://store.cloudflare.steamstatic.com/public/images/loyalty/reactions/animated/17.png?v=5&quot;>
                  </div>
                  <div class=&quot;reaction_award_info&quot;>
                    <div class=&quot;reaction_award_name&quot;>Take My Points</div>
                    <div class=&quot;reaction_award_desc&quot;>Shut up and take my Steam Points!</div>
                    <div class=&quot;reaction_award_points&quot;>Award gives creators 1,600 Steam Points.&nbsp;Given by 4 people.</span></div>
                  </div>
                </div>
                " data-tooltip-class="reaction_award_hover">
                  <img className="review_award_icon" src="https://store.cloudflare.steamstatic.com/public/images/loyalty/reactions/still/17.png?v=5"></img>
                  <span className="review_award_count ">4</span>
                </div>
                <div data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" className="review_award tooltip" style={{width: '36.58px'}} data-reaction="13" data-reactioncount="5" data-tooltip-html="		<div>
                  <div class=&quot;reaction_award_icon&quot;>
                    <img src=&quot;https://store.cloudflare.steamstatic.com/public/images/loyalty/reactions/animated/13.png?v=5&quot;>
                  </div>
                  <div class=&quot;reaction_award_info&quot;>
                    <div class=&quot;reaction_award_name&quot;>Clever</div>
                    <div class=&quot;reaction_award_desc&quot;>Gold medal in mental gymnastics.</div>
                    <div class=&quot;reaction_award_points&quot;>Award gives creators 800 Steam Points.&nbsp;Given by 5 people.</span></div>
                  </div>
                </div>
                " data-tooltip-class="reaction_award_hover">
                  <img className="review_award_icon" src="https://store.cloudflare.steamstatic.com/public/images/loyalty/reactions/still/13.png?v=5"></img>
                  <span className="review_award_count ">5</span>
                </div>
                <div data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" className="review_award tooltip" data-reaction="15" data-reactioncount="1" data-tooltip-html="		<div>
                  <div class=&quot;reaction_award_icon&quot;>
                    <img src=&quot;https://store.cloudflare.steamstatic.com/public/images/loyalty/reactions/animated/15.png?v=5&quot;>
                  </div>
                  <div class=&quot;reaction_award_info&quot;>
                    <div class=&quot;reaction_award_name&quot;>Saucy</div>
                    <div class=&quot;reaction_award_desc&quot;>Sometimes you just need to kick it up a notch.</div>
                    <div class=&quot;reaction_award_points&quot;>Award gives creators 400 Steam Points.&nbsp;Given by 1 person.</span></div>
                  </div>
                </div>
                " data-tooltip-class="reaction_award_hover">
                  <img className="review_award_icon" src="https://store.cloudflare.steamstatic.com/public/images/loyalty/reactions/still/15.png?v=5"></img>
                  <span className="review_award_count ">1</span>
                </div>
                <div data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" className="review_award tooltip" data-reaction="18" data-reactioncount="2" data-tooltip-html="		<div>
                  <div class=&quot;reaction_award_icon&quot;>
                    <img src=&quot;https://store.cloudflare.steamstatic.com/public/images/loyalty/reactions/animated/18.png?v=5&quot;>
                  </div>
                  <div class=&quot;reaction_award_info&quot;>
                    <div class=&quot;reaction_award_name&quot;>Wholesome</div>
                    <div class=&quot;reaction_award_desc&quot;>Like laying in the grass on a warm sunny day.</div>
                    <div class=&quot;reaction_award_points&quot;>Award gives creators 100 Steam Points.&nbsp;Given by 2 people.</span></div>
                  </div>
                </div>
                " data-tooltip-class="reaction_award_hover">
                  <img className="review_award_icon" src="https://store.cloudflare.steamstatic.com/public/images/loyalty/reactions/still/18.png?v=5"></img>
                  <span className="review_award_count hidden">2</span>
                </div>
                <div data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" className="review_award tooltip"  data-reaction="16" data-reactioncount="1" data-tooltip-html="		<div>
                    <div class=&quot;reaction_award_icon&quot;>
                      <img src=&quot;https://store.cloudflare.steamstatic.com/public/images/loyalty/reactions/animated/16.png?v=5&quot;>
                    </div>
                    <div class=&quot;reaction_award_info&quot;>
                      <div class=&quot;reaction_award_name&quot;>Slow Clap</div>
                      <div class=&quot;reaction_award_desc&quot;>Every standing ovation starts with a single clap.</div>
                      <div class=&quot;reaction_award_points&quot;>Award gives creators 200 Steam Points.&nbsp;Given by 1 person.</span></div>
                    </div>
                  </div>
                  " data-tooltip-class="reaction_award_hover">
                  <img className="review_award_icon" src="https://store.cloudflare.steamstatic.com/public/images/loyalty/reactions/still/16.png?v=5"></img>
                  <span className="review_award_count hidden">1</span>
                </div>
                <div data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" className="review_award tooltip" data-reaction="22" data-reactioncount="1" data-tooltip-html="		<div>
                      <div class=&quot;reaction_award_icon&quot;>
                        <img src=&quot;https://store.cloudflare.steamstatic.com/public/images/loyalty/reactions/animated/22.png?v=5&quot;>
                      </div>
                      <div class=&quot;reaction_award_info&quot;>
                        <div class=&quot;reaction_award_name&quot;>Super Star</div>
                        <div class=&quot;reaction_award_desc&quot;>Leaping through the sky, like a tiger defying the laws of gravity...</div>
                        <div class=&quot;reaction_award_points&quot;>Award gives creators 200 Steam Points.&nbsp;Given by 1 person.</span></div>
                      </div>
                    </div>
                    " data-tooltip-class="reaction_award_hover">
                  <img className="review_award_icon" src="https://store.cloudflare.steamstatic.com/public/images/loyalty/reactions/still/22.png?v=5"></img>
                  <span className="review_award_count hidden">1</span>
                </div>
                <div data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" className="review_award tooltip" data-reaction="1" data-reactioncount="1" data-tooltip-html="		<div>
                      <div class=&quot;reaction_award_icon&quot;>
                        <img src=&quot;https://store.cloudflare.steamstatic.com/public/images/loyalty/reactions/animated/1.png?v=5&quot;>
                      </div>
                      <div class=&quot;reaction_award_info&quot;>
                        <div class=&quot;reaction_award_name&quot;>Deep Thoughts</div>
                        <div class=&quot;reaction_award_desc&quot;>Trained dolphins couldn't get to the bottom of this one.</div>
                        <div class=&quot;reaction_award_points&quot;>Award gives creators 100 Steam Points.&nbsp;Given by 1 person.</span></div>
                      </div>
                    </div>
                    " data-tooltip-class="reaction_award_hover">
                  <img className="review_award_icon" src="https://store.cloudflare.steamstatic.com/public/images/loyalty/reactions/still/1.png?v=5"></img>
                  <span className="review_award_count hidden">1</span>
                </div>
                <div data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" className="review_award tooltip" data-reaction="5" data-reactioncount="1" data-tooltip-html="		<div>
                      <div class=&quot;reaction_award_icon&quot;>
                        <img src=&quot;https://store.cloudflare.steamstatic.com/public/images/loyalty/reactions/animated/5.png?v=5&quot;>
                      </div>
                      <div class=&quot;reaction_award_info&quot;>
                        <div class=&quot;reaction_award_name&quot;>Poetry</div>
                        <div class=&quot;reaction_award_desc&quot;>Such elegant prose! A literary feast.</div>
                        <div class=&quot;reaction_award_points&quot;>Award gives creators 100 Steam Points.&nbsp;Given by 1 person.</span></div>
                      </div>
                    </div>
                    " data-tooltip-class="reaction_award_hover">
                  <img className="review_award_icon" src="https://store.cloudflare.steamstatic.com/public/images/loyalty/reactions/still/5.png?v=5"></img>
                  <span className="review_award_count hidden">1</span>
                </div>
                <div data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" className="review_award tooltip" data-reaction="6" data-reactioncount="1" data-tooltip-html="		<div>
                      <div class=&quot;reaction_award_icon&quot;>
                        <img src=&quot;https://store.cloudflare.steamstatic.com/public/images/loyalty/reactions/animated/6.png?v=5&quot;>
                      </div>
                      <div class=&quot;reaction_award_info&quot;>
                        <div class=&quot;reaction_award_name&quot;>Extra Helpful</div>
                        <div class=&quot;reaction_award_desc&quot;>If this were any more helpful I wouldn't need a brain.</div>
                        <div class=&quot;reaction_award_points&quot;>Award gives creators 100 Steam Points.&nbsp;Given by 1 person.</span></div>
                      </div>
                    </div>
                    " data-tooltip-class="reaction_award_hover">
                  <img className="review_award_icon" src="https://store.cloudflare.steamstatic.com/public/images/loyalty/reactions/still/6.png?v=5"></img>
                  <span className="review_award_count hidden">1</span>
                </div>
                <div data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" className="review_award tooltip" data-reaction="8" data-reactioncount="1" data-tooltip-html="		<div>
                      <div class=&quot;reaction_award_icon&quot;>
                        <img src=&quot;https://store.cloudflare.steamstatic.com/public/images/loyalty/reactions/animated/8.png?v=5&quot;>
                      </div>
                      <div class=&quot;reaction_award_info&quot;>
                        <div class=&quot;reaction_award_name&quot;>Michelangelo</div>
                        <div class=&quot;reaction_award_desc&quot;>It belongs in a museum (and my inventory).</div>
                        <div class=&quot;reaction_award_points&quot;>Award gives creators 100 Steam Points.&nbsp;Given by 1 person.</span></div>
                      </div>
                    </div>
                    " data-tooltip-class="reaction_award_hover">
                  <img className="review_award_icon" src="https://store.cloudflare.steamstatic.com/public/images/loyalty/reactions/still/8.png?v=5"></img>
                  <span className="review_award_count hidden">1</span>
                </div>
                <div data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" className="review_award more_btn tooltip" style={{width: '43.81px'}} data-count="8" data-tooltip-text="View the other 8 Community Awards">
                  <img className="review_award_icon" src="https://store.cloudflare.steamstatic.com/public/shared/images//award_icon_blue.svg"></img>
                  <span className="review_award_count">8</span>
                </div>

              </div>
            </div>
          </div>
          <div style={{clear: "left"}}></div>
        </div>
      </div>

    </div>
  )
}

export default ReviewSummaryLeftCol