import { useState, useEffect } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="responsive_page_frame with_header">
        <div
          role="navigation"
          className="responsive_page_menu_ctn mainmenu"
        ></div>
        <div className="responsive_local_menu_tab"></div>
        <div className="responsive_page_menu_ctn localmenu"></div>
        <div className="responsive_header"></div>
        <div className="responsive_page_content_overlay"></div>
        <div className="responsive_fixonscroll_ctn nonresponsive_hidden"></div>
        <div className="responsive_page_content">

        </div>
          <div
            role="main"
            className="responsive_page_template_content"
            id="responsive_page_template_content"
            data-panel="{&quot;autoFocus&quot;:true}">
                <div className="review_ctn">
                  <div className="page_content">
                    <div id="app_reviews_hash" className="app_reviews_area">
                      <h2 className="user_reviews_header no_bottom_margin">Customer reviews</h2>
                      <div id="review_recent_events_container" className="review_recent_events  "> </div>
                      <div id="review_histograms_container" className="has_data collapsed">
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
                        <div id="review_histogram_recent_section" className="review_histogram_section recent"></div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
      </div>
      <div className="miniprofile_hover" style={{display: "none"}}></div>
      <div className="FullModalOverlay" style={{display: "none"}}></div>
      <div id="review_histogram_tooltip"></div>
    </>
  );
}

export default App;
