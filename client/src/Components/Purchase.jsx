const Purchase = () => {
  return (
    <div id="game_area_purchase" className="game_area_purchase">
      <div className="game_area_purchase_game_wrapper">
        <div
          className="game_area_purchase_game"
          id="game_area_purchase_section_add_to_cart_285032"
        >
          <div className="game_area_purchase_platform">
            <span className="platform_img win"></span>
            <span className="platform_img linux"></span>
          </div>
          <h1>Buy Valheim</h1>
          <div className="game_purchase_action">
            <div className="game_purchase_action_bg">
              <div
                className="game_purchase_price price"
                data-price-final="1999"
              >
                $19.99
              </div>
              <div className="btn_addtocart">
                <a
                  className="btn_green_steamui btn_medium"
                  id="btn_add_to_cart_285032"
                >
                  <span>Add to Cart</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        data-panel={[]}
        className="game_area_purchase_game_wrapper dynamic_bundle_description ds_no_flags"
        data-ds-bundleid="24016"
        data-ds-bundle-data='{"m_nDiscountPct":"10","m_bMustPurchaseAsSet":1,"m_rgItems":[{"m_nPackageID":285032,"m_rgIncludedAppIDs":[892970],"m_bPackageDiscounted":false,"m_nBasePriceInCents":1999,"m_nFinalPriceInCents":1999,"m_nFinalPriceWithBundleDiscount":1799},{"m_nPackageID":575079,"m_rgIncludedAppIDs":[1620250],"m_bPackageDiscounted":false,"m_nBasePriceInCents":799,"m_nFinalPriceInCents":799,"m_nFinalPriceWithBundleDiscount":719}],"m_bIsCommercial":false,"m_bRestrictGifting":false}'
        data-ds-itemkey="Bundle_24016"
        data-ds-tagids="[7948,1100689,1662,3843,1695,3859,1643]"
        data-ds-crtrids="[32965813]"
      >
        <div className="game_area_purchase_game_dropdown_subscription game_area_purchase_game">
          <div className="game_area_purchase_platform">
            <span className="platform_img win"></span>
            <span className="platform_img linux"></span>
            <span className="platform_img music"></span>
          </div>
          <h1> Buy Valheim Soundtrack Bundle </h1>
          <p className="package_contents">
            <b>Includes 2 items:</b>
            <a
              data-panel='{"focusable":false}'
              href="https://store.steampowered.com/app/892970/Valheim/"
            >
              Valheim ,
            </a>
            <a
              data-panel='{"focusable":false}'
              href="https://store.steampowered.com/app/1620250/Valheim_Soundtrack/"
            >
              Valheim Soundtrack
            </a>
          </p>
          <div className="game_purchase_action">
            <div className="game_purchase_action_bg">
              <div className="btn_addtocart btn_packageinfo">
                <a
                  className="btn_blue_steamui btn_medium"
                  href="https://store.steampowered.com/bundle/24016/Valheim_Soundtrack_Bundle/?snr=1_5_9__403"
                >
                  <span>Bundle info</span>
                </a>
              </div>
            </div>
            <div className="game_purchase_action_bg">
              <div
                className="discount_block game_purchase_discount no_discount"
                data-price-final="2518"
                data-bundlediscount="10"
                data-discount="0"
              >
                <div className="bundle_base_discount">-10%</div>
                <div className="discount_prices">
                  <div className="discount_final_price">$25.18</div>
                </div>
              </div>
              <div className="btn_addtocart">
                <a
                  data-panel='{"focusable":true,"clickOnActivate":true}'
                  className="btn_green_steamui btn_medium"
                  href="javascript:addBundleToCart( 24016);"
                >
                  <span>Add to Cart</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="gameAreaDLCSection" className="game_area_dlc_section">
        {/* Content here */}
      </div>
    </div>
  );
};

export default Purchase;
