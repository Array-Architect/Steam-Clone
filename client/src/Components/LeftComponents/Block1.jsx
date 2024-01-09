const Block1 = () => {
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
        <h2 className="underline">More from Coffee Stain</h2>
      </div>
      <div
        className="store_horizontal_autoslider_ctn"
        style={{ height: "132px" }}
      >
        <div
          className="block_responsive_horizontal_scroll store_horizontal_autoslider block_content nopad"
          id="franchise_app_block_content"
          data-panel='{"maintainX":true,"bFocusRingRoot":true,"flow-children":"row"}'
          style={{ overflow: "scroll" }}
        >
          <a
            className="small_cap app_impression_tracked"
            data-ds-appid="548430"
            href="https://store.steampowered.com/app/548430/Deep_Rock_Galactic/?snr=1_5_9__316_1"
          >
            <img
              src="https://cdn.akamai.steamstatic.com/steam/apps/548430/capsule_184x69_alt_assets_13.jpg?t=1704456164"
              className="small_cap_img"
              alt="Deep Rock Galactic"
            />
            <h4>Deep Rock Galactic</h4>
            <div
              className="discount_block no_discount discount_block_inline"
              data-price-final="2999"
              data-bundlediscount="0"
              data-discount="0"
            >
              <div className="discount_prices">
                <div className="discount_final_price">$29.99</div>
              </div>
            </div>
          </a>
          {/* Satisfactory */}
          <a
            className="small_cap app_impression_tracked"
            data-ds-appid="526870"
            href="https://store.steampowered.com/app/526870/Satisfactory/?snr=1_5_9__316_2"
          >
            <img
              src="https://cdn.akamai.steamstatic.com/steam/apps/526870/capsule_184x69.jpg?t=1701857353"
              className="small_cap_img"
              alt="Satisfactory"
            />
            <h4>Satisfactory</h4>
            <div
              className="discount_block no_discount discount_block_inline"
              data-price-final="2999"
              data-bundlediscount="0"
              data-discount="0"
            >
              <div className="discount_prices">
                <div className="discount_final_price">$29.99</div>
              </div>
            </div>
          </a>
          {/* Songs of Conquest */}
          <a
            className="small_cap app_impression_tracked"
            data-ds-appid="867210"
            href="https://store.steampowered.com/app/867210/Songs_of_Conquest/?snr=1_5_9__316_3"
          >
            <img
              src="https://cdn.akamai.steamstatic.com/steam/apps/867210/capsule_184x69.jpg?t=1702542770"
              className="small_cap_img"
              alt="Songs of Conquest"
            />
            <h4>Songs of Conquest</h4>
            <div
              className="discount_block discount_block_inline"
              data-price-final="1499"
              data-bundlediscount="0"
              data-discount="50"
            >
              <div className="discount_pct">-50%</div>
              <div className="discount_prices">
                <div className="discount_original_price">$29.99</div>
                <div className="discount_final_price">$14.99</div>
              </div>
            </div>
          </a>
          {/* Goat Simulator */}
          <a
            className="small_cap app_impression_tracked"
            data-ds-appid="265930"
            href="https://store.steampowered.com/app/265930/Goat_Simulator/?snr=1_5_9__316_4"
          >
            <img
              src="https://cdn.akamai.steamstatic.com/steam/apps/265930/capsule_184x69.jpg?t=1596094271"
              className="small_cap_img"
              alt="Goat Simulator"
            />
            <h4>Goat Simulator</h4>
            <div
              className="discount_block no_discount discount_block_inline"
              data-price-final="999"
              data-bundlediscount="0"
              data-discount="0"
            >
              <div className="discount_prices">
                <div className="discount_final_price">$9.99</div>
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

export default Block1;
