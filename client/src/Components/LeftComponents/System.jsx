import { useState } from "react";

const System = () => {
  const [currentVersion, setCurrentVersion] = useState(true);

  const windows = () => {
    setCurrentVersion(true);
  };

  const linux = () => {
    setCurrentVersion(false);
  };

  return (
    <div className="game_page_autocollapse_ctn expanded">
      <div
        className="game_page_autocollapse sys_req"
        style={{ maxHeight: "none" }}
      >
        <h2 className="underline" style={{ marginBottom: "0px" }}>
          System Requirements
        </h2>
        <div className="sysreq_tabs">
          <div
            className={`sysreq_tab ${currentVersion ? "active" : ""}`}
            data-os="win"
            onClick={windows}
          >
            {" "}
            Windows{" "}
          </div>
          <div
            className={`sysreq_tab ${currentVersion ? "" : "active"}`}
            data-os="linux"
            onClick={linux}
          >
            {" "}
            SteamOS + Linux{" "}
          </div>
          <div style={{ clear: "left" }}></div>
        </div>
        <div className="sysreq_contents">
          <div
            className={`game_area_sys_req sysreq_content ${
              currentVersion ? "active" : ""
            }`}
            data-os="win"
            style={{ fontSize: "12px" }}
          >
            <div className="game_area_sys_req_leftCol">
              <ul>
                <strong>Minimum:</strong>
                <br />
                <ul className="bb_ul">
                  <li>
                    Requires a 64-bit processor and operating system
                    <br />
                  </li>
                  <li>
                    <strong>OS *:</strong> Windows 7 or later
                    <br />
                  </li>
                  <li>
                    <strong>Processor:</strong> 2.6 GHz Quad Core or similar
                    <br />
                  </li>
                  <li>
                    <strong>Memory:</strong> 8 GB RAM
                    <br />
                  </li>
                  <li>
                    <strong>Graphics:</strong> GeForce GTX 950 or Radeon HD 7970
                    <br />
                  </li>
                  <li>
                    <strong>DirectX:</strong> Version 11
                    <br />
                  </li>
                  <li>
                    <strong>Storage:</strong> 1 GB available space
                    <br />
                  </li>
                  <li>
                    <strong>Additional Notes:</strong> The following languages
                    have been partially translated by the community: Svenska,
                    Italiano, Romanian, български, македонски, Suomi, Dansk,
                    íslenska, Lietuvių kalba, čeština, Magyar nyelv, Português
                    europeu, 한국어 (불완전한), Norsk, ภาษาไทย, ქართული ენა,
                    Abenaki, Slovenčina
                    <br />
                  </li>
                </ul>
              </ul>
            </div>
            <div className="game_area_sys_req_rightCol">
              <ul>
                <strong>Recommended:</strong>
                <br />
                <ul className="bb_ul">
                  <li>
                    Requires a 64-bit processor and operating system
                    <br />
                  </li>
                  <li>
                    <strong>OS *:</strong> Windows 7 or later
                    <br />
                  </li>
                  <li>
                    <strong>Processor:</strong> i5 3GHz or Ryzen 5 3GHz
                    <br />
                  </li>
                  <li>
                    <strong>Memory:</strong> 16 GB RAM
                    <br />
                  </li>
                  <li>
                    <strong>Graphics:</strong> GeForce GTX 1060 or Radeon RX 580
                    <br />
                  </li>
                  <li>
                    <strong>DirectX:</strong> Version 11
                    <br />
                  </li>
                  <li>
                    <strong>Network:</strong> Broadband Internet connection
                    <br />
                  </li>
                  <li>
                    <strong>Storage:</strong> 1 GB available space
                    <br />
                  </li>
                </ul>
              </ul>
            </div>
            <div style={{ clear: "left" }}></div>
            <div className="game_area_sys_req_note">
              <strong>*</strong>" Starting January 1st, 2024, the Steam Client
              will only support Windows 10 and later versions. "
            </div>
          </div>
          <div
            className={`game_area_sys_req sysreq_content ${
              currentVersion ? "" : "active"
            }`}
            data-os="linux"
            style={{ fontSize: "12px" }}
          >
            <div className="game_area_sys_req_leftCol">
              <ul>
                <strong>Minimum:</strong>
                <br />
                <ul className="bb_ul">
                  <li>
                    <strong>OS:</strong> Any up to date version
                    <br />
                  </li>
                  <li>
                    <strong>Processor:</strong> 2.6 GHz Dual Core or similar
                    <br />
                  </li>
                  <li>
                    <strong>Memory:</strong> 8 GB RAM
                    <br />
                  </li>
                  <li>
                    <strong>Graphics:</strong> GeForce GTX 950 or Radeon HD 7970
                    <br />
                  </li>
                  <li>
                    <strong>Storage:</strong> 1 GB available space
                    <br />
                  </li>
                </ul>
              </ul>
            </div>
            <div className="game_area_sys_req_rightCol">
              <ul>
                <strong>Recommended:</strong>
                <br />
                <ul className="bb_ul">
                  <li>
                    <strong>OS:</strong> Any up to date version
                    <br />
                  </li>
                  <li>
                    <strong>Processor:</strong> i5 3GHz or Ryzen 5 3GHz
                    <br />
                  </li>
                  <li>
                    <strong>Memory:</strong> 16 GB RAM
                    <br />
                  </li>
                  <li>
                    <strong>Graphics:</strong> GeForce GTX 1060 or Radeon RX 580
                    <br />
                  </li>
                  <li>
                    <strong>Network:</strong> Broadband Internet connection
                    <br />
                  </li>
                  <li>
                    <strong>Storage:</strong> 1 GB available space
                    <br />
                  </li>
                </ul>
              </ul>
            </div>
            <div style={{ clear: "left" }}></div>
          </div>
        </div>
      </div>
      {/* <div className="game_page_autocollapse_fade">
        <div className="game_page_autocollapse_readmore">READ MORE</div>
    </div> */}
    </div>
  );
};

export default System;
