import { useState, useEffect } from "react";
import "./App.css";
// import './Alex.css';
import Header from "./Components/Header";
import MainPage from "./Components/MainPage";
import Footer from "./Components/Footer";
import TagsModal from "./Components/TagsModal.jsx";
import { setContexts } from "./Context.jsx";
import PreviewModal from "./Components/PreviewModal.jsx";

function App() {
  const {
    displayTags,
    displayPreviewModal,
    toolTipAxis,
    setToolTipAxis,
    reviewToolTips,
    setReviewToolTips,
    selectedToolTip,
    setSelectedToolTip,
    reviewTipVisible,
    setReviewTipVisible,
    customerTipVisible,
    setCustomerTipVisible,
    recentTipVisible,
    setRecentTipVisible
  } = setContexts()

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
            <Header />
            <MainPage />
            <Footer />
          </div>
        </div>
        <div className="miniprofile_hover" style={{ display: "none" }}></div>
        <div className="FullModalOverlay" style={{ display: "none" }}></div>
        <div id="review_histogram_tooltip"></div>
        {displayTags&&<TagsModal/>}
        {displayPreviewModal&&<PreviewModal/>}
        {
          reviewTipVisible && <div
            className={reviewToolTips.fullReview.className}
            style={{
              position: reviewToolTips.fullReview.style.position,
              zIndex: reviewToolTips.fullReview.style.zIndex,
              opacity: reviewToolTips.fullReview.style.opacity,
              pointerEvents: reviewToolTips.fullReview.style.pointerEvents,
              left: `${toolTipAxis.x}px`,
              top: `${toolTipAxis.y}px`
            }}
            >
              {reviewToolTips.fullReview.text}
            </div>
        }
        {
          customerTipVisible && <div
            className={reviewToolTips.customerReview.className}
            style={{
              position: reviewToolTips.customerReview.style.position,
              zIndex: reviewToolTips.customerReview.style.zIndex,
              opacity: reviewToolTips.customerReview.style.opacity,
              pointerEvents: reviewToolTips.customerReview.style.pointerEvents,
              left: `${toolTipAxis.x}px`,
              top: `${toolTipAxis.y}px`
            }}>
              {reviewToolTips.customerReview.text}
            </div>
        }
        {
          recentTipVisible && <div
            className={reviewToolTips.recentReview.className}
            style={{
              position: reviewToolTips.recentReview.style.position,
              zIndex: reviewToolTips.recentReview.style.zIndex,
              opacity: reviewToolTips.recentReview.style.opacity,
              pointerEvents: reviewToolTips.recentReview.style.pointerEvents,
              left: `${toolTipAxis.x}px`,
              top: `${toolTipAxis.y}px`
            }}>
              {reviewToolTips.recentReview.text}
            </div>
        }
    </>
  );
}

export default App;