import { useState, useEffect } from "react";
import "./App.css";
import './Alex.css';
import Header from "./Components/Header";
import MainPage from "./Components/MainPage";
import Footer from "./Components/Footer";
import { ContextProvider } from "./Context.jsx";
import TagsModal from "./Components/TagsModal.jsx";

function App() {
  // const {displayTags} = setContexts()

  return (
    <>
    <ContextProvider>
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
        {/* {displayTags&&<TagsModal/>} */}
      </ContextProvider>
    </>
  );
}

export default App;