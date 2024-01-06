const Block2 = () => {
  return (
    <div className="block" id="franchise_block">
      <div className="block_header">
        <div className="right">
          <a
            href="https://store.steampowered.com/franchise/coffeestain?snr=1_5_9__317"
            className="deck_view_all_action_link"
          >
            See all
          </a>
        </div>
        <h2 className="underline">More like this</h2>
      </div>
      <div
        className="store_horizontal_autoslider_ctn"
        style={{ height: "132px" }}
      >
        <div
          className="block_responsive_horizontal_scroll store_horizontal_autoslider block_content nopad"
          id="franchise_app_block_content"
          data-panel='{"maintainX":true,"bFocusRingRoot":true,"flow-children":"row"}'
          style={{ overflowX: "scroll" }}
        >
          <a
            className="small_cap app_impression_tracked"
            data-ds-appid="648800"
            href="https://store.steampowered.com/app/648800/Raft/?snr=1_5_9__300_1"
          >
            <img
              src="https://cdn.akamai.steamstatic.com/steam/apps/648800/capsule_184x69.jpg?t=1693638925"
              className="small_cap_img"
              alt="Raft"
            />
            <h4>Raft</h4>
            <div
              className="discount_block no_discount discount_block_inline"
              data-price-final="1999"
            >
              <div className="discount_prices">
                <div className="discount_final_price">$19.99</div>
              </div>
            </div>
          </a>

          <a
            className="small_cap app_impression_tracked"
            data-ds-appid="962130"
            href="https://store.steampowered.com/app/962130/Grounded/?snr=1_5_9__300_2"
          >
            <img
              src="https://cdn.akamai.steamstatic.com/steam/apps/962130/capsule_184x69.jpg?t=1699908769"
              className="small_cap_img"
              alt="Grounded"
            />
            <h4>Grounded</h4>
            <div
              className="discount_block no_discount discount_block_inline"
              data-price-final="3999"
            >
              <div className="discount_prices">
                <div className="discount_final_price">$39.99</div>
              </div>
            </div>
          </a>

          <a
            className="small_cap app_impression_tracked"
            data-ds-appid="252490"
            href="https://store.steampowered.com/app/252490/Rust/?snr=1_5_9__300_3"
          >
            <img
              src="https://cdn.akamai.steamstatic.com/steam/apps/252490/capsule_184x69.jpg?t=1701938429"
              className="small_cap_img"
              alt="Rust"
            />
            <h4>Rust</h4>
            <div
              className="discount_block no_discount discount_block_inline"
              data-price-final="3999"
            >
              <div className="discount_prices">
                <div className="discount_final_price">$39.99</div>
              </div>
            </div>
          </a>

          <div style={{ clear: "left" }}></div>
        </div>
      </div>
      <div className="slider_ctn store_autoslider">
        <div className="slider_left">
          <span></span>
        </div>
        <div className="slider_right">
          <span></span>
        </div>
        <div className="slider_bg"></div>
        <div className="slider">
          <div
            className="handle"
            style={{ position: "absolute", left: "0px" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Block2;
