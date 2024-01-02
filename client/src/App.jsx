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
        <div className="responsive_page_content"></div>
      </div>
      <div className="miniprofile_hover" style="display:none"></div>
      <div className="FullModalOverlay" style="display:none"></div>
      <div id="review_histogram_tooltip"></div>
    </>
  );
}

export default App;