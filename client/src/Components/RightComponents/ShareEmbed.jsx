const ShareEmbed = () => {
  return (
    <>
      <div
        id="shareEmbedRow"
        className="block responsive_apppage_details_left"
        data-panel='{"flow-children":"row"}'
      >
        <a
          className="btnv6_blue_hoverfade btn_medium"
          href="#"
          style={{ marginRight: "3px" }}
        >
          <span>Share</span>
        </a>
        <a
          className="btnv6_blue_hoverfade btn_medium"
          href="#"
          style={{ marginRight: "3px" }}
        >
          <span>Embed</span>
        </a>
        <a
          id="ReportAppBtn"
          className="btnv6_blue_hoverfade btn_medium"
          // href="javascript:void(0)"
          style={{ marginRight: "3px" }}
        >
          <span data-tooltip-text="Report this Product">
            <i className="ico16 reportv6"></i>
          </span>
        </a>
      </div>
      <div
        className="block responsive_apppage_reviewblock"
        style={{ width: "100%" }}
      ></div>
    </>
  );
};

export default ShareEmbed;
