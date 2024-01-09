import { useState } from 'react'
import { setContexts } from '../../Context'

const Histogram = () => {

  const {
    graphVisible,
    setGraphVisible,
    toolTipAxis,
    setToolTipAxis,
    customerTipVisible,
    setCustomerTipVisible,
    recentTipVisible,
    setRecentTipVisible
   } = setContexts()

  const custTipLoc = () => {
    setToolTipAxis({x:event.pageX,y:event.pageY})
    setCustomerTipVisible(!customerTipVisible)
  }

  const custTipStop = () => {
    setCustomerTipVisible(false)
  }

  const recentTipLoc = () => {
    setToolTipAxis({x:event.pageX,y:event.pageY})
    setRecentTipVisible(!recentTipVisible)
  }

  const recentTipStop = () => {
    setRecentTipVisible(false)
  }

  return (
    <div id="review_histograms_container" className={graphVisible ? "has_data" : "has_data collapsed"}>
    <canvas id="review_graph_canvas" width="940" height="350"></canvas>
     <div id="review_histogram_rollup_section" className="review_histogram_section">
       <div className="user_reviews_summary_bar">
         <div className="summary_section">
           <div className="title">Overall Reviews:</div>
           <span className="game_review_summary positive" onMouseOver={custTipLoc} onMouseOut={custTipStop}>Overwhelmingly Positive </span>
           <span>(370,872 reviews)&nbsp;</span>
           <a className="tooltip" data-tooltip-text="This summary uses only reviews written by customers that purchased the game directly from Steam.">
             <img src="https://store.cloudflare.steamstatic.com/public/shared/images/ico/icon_questionmark.png"></img>
           </a>
         </div>
       </div>
       <div id="review_histogram_rollup_container" className="review_histogram">
         <div id="review_histogram_rollup" style={{padding: "0px", position: "relative"}}>
          {/* Flot is an extension of jQuery - We need to find another React Library that we can use for the graph. */}
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
           <span className="game_review_summary positive" onMouseOver={recentTipLoc} onMouseOut={recentTipStop} >Very Positive </span>
           <span>(4,448 reviews)&nbsp;</span>
           <a className="tooltip" data-tooltip-text="This summary uses only reviews written by customers that purchased the game directly from Steam.">
             <img src="https://store.cloudflare.steamstatic.com/public/shared/images/ico/icon_questionmark.png"></img>
           </a>
         </div>
       </div>
       <div className="review_histogram">
         <div id="review_histogram_recent" style={{padding: "0px", position: "relative"}}>
           <canvas className="flot-base" width="472" height="375" style={{direction: "ltr", position: "absolute", left: "0px",   top: "0px", width: "315px", height: "250px"}}></canvas>
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
  )

}

export default Histogram