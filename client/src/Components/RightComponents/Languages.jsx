import { useState } from "react";

const Languages = () => {
  const [showAllLanguages, setShowAllLanguages] = useState(false);

  const toggleLanguages = () => {
    setShowAllLanguages(true);
  };

  return (
    <div className="block responsive_apppage_details_right">
      <div className="block_title" id="LanguagesHeader">
        Languages
        <span className="responsive_hidden">:</span>
      </div>
      <div id="languageTable" style={{ display: "block" }}>
        <table
          className="game_language_options"
          cellPadding="0"
          cellSpacing="0"
        >
          <tbody>
            <tr>
              <th style={{ width: "94px" }}></th>
              <th className="checkcol">Interface</th>
              <th className="checkcol">Full Audio</th>
              <th className="checkcol">Subtitles</th>
            </tr>

            <tr>
              <td
                style={{ width: "94px", textAlign: "left" }}
                className="ellipsis"
              >
                English
              </td>
              <td className="checkcol">
                <span>✔</span>
              </td>
              <td className="checkcol"></td>
              <td className="checkcol">
                <span>✔</span>
              </td>
            </tr>

            <tr>
              <td
                style={{ width: "94px", textAlign: "left" }}
                className="ellipsis"
              >
                French
              </td>
              <td className="checkcol">
                <span>✔</span>
              </td>
              <td className="checkcol"></td>
              <td className="checkcol">
                <span>✔</span>
              </td>
            </tr>

            <tr>
              <td
                style={{ width: "94px", textAlign: "left" }}
                className="ellipsis"
              >
                German
              </td>
              <td className="checkcol">
                <span>✔</span>
              </td>
              <td className="checkcol"></td>
              <td className="checkcol">
                <span>✔</span>
              </td>
            </tr>

            <tr>
              <td
                style={{ width: "94px", textAlign: "left" }}
                className="ellipsis"
              >
                Spanish - Spain
              </td>
              <td className="checkcol">
                <span>✔</span>
              </td>
              <td className="checkcol"></td>
              <td className="checkcol">
                <span>✔</span>
              </td>
            </tr>

            <tr>
              <td
                style={{ width: "94px", textAlign: "left" }}
                className="ellipsis"
              >
                Russian
              </td>
              <td className="checkcol">
                <span>✔</span>
              </td>
              <td className="checkcol"></td>
              <td className="checkcol">
                <span>✔</span>
              </td>
            </tr>

            <tr style={{ display: showAllLanguages ? "table-row" : "none" }}>
              <td
                style={{ width: "94px", textAlign: "left" }}
                className="ellipsis"
              >
                Simplified Chinese
              </td>
              <td className="checkcol">
                <span>✔</span>
              </td>
              <td className="checkcol"></td>
              <td className="checkcol">
                <span>✔</span>
              </td>
            </tr>

            <tr style={{ display: showAllLanguages ? "table-row" : "none" }}>
              <td
                style={{ width: "94px", textAlign: "left" }}
                className="ellipsis"
              >
                Turkish
              </td>
              <td className="checkcol">
                <span>✔</span>
              </td>
              <td className="checkcol"></td>
              <td className="checkcol">
                <span>✔</span>
              </td>
            </tr>

            <tr style={{ display: showAllLanguages ? "table-row" : "none" }}>
              <td
                style={{ width: "94px", textAlign: "left" }}
                className="ellipsis"
              >
                Dutch
              </td>
              <td className="checkcol">
                <span>✔</span>
              </td>
              <td className="checkcol"></td>
              <td className="checkcol">
                <span>✔</span>
              </td>
            </tr>

            <tr style={{ display: showAllLanguages ? "table-row" : "none" }}>
              <td
                style={{ width: "94px", textAlign: "left" }}
                className="ellipsis"
              >
                Japanese
              </td>
              <td className="checkcol">
                <span>✔</span>
              </td>
              <td className="checkcol"></td>
              <td className="checkcol">
                <span>✔</span>
              </td>
            </tr>

            <tr style={{ display: showAllLanguages ? "table-row" : "none" }}>
              <td
                style={{ width: "94px", textAlign: "left" }}
                className="ellipsis"
              >
                Portuguese - Brazil
              </td>
              <td className="checkcol">
                <span>✔</span>
              </td>
              <td className="checkcol"></td>
              <td className="checkcol">
                <span>✔</span>
              </td>
            </tr>

            <tr style={{ display: showAllLanguages ? "table-row" : "none" }}>
              <td
                style={{ width: "94px", textAlign: "left" }}
                className="ellipsis"
              >
                Polish
              </td>
              <td className="checkcol">
                <span>✔</span>
              </td>
              <td className="checkcol"></td>
              <td className="checkcol">
                <span>✔</span>
              </td>
            </tr>

            <tr style={{ display: showAllLanguages ? "table-row" : "none" }}>
              <td
                style={{ width: "94px", textAlign: "left" }}
                className="ellipsis"
              >
                Ukrainian
              </td>
              <td className="checkcol">
                <span>✔</span>
              </td>
              <td className="checkcol"></td>
              <td className="checkcol">
                <span>✔</span>
              </td>
            </tr>
          </tbody>
        </table>
        {!showAllLanguages && (
          <a className="all_languages" onClick={toggleLanguages}>
            See all 12 supported languages
          </a>
        )}
      </div>
    </div>
  );
};

export default Languages;
