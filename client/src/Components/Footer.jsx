function Footer({}) {
    //
    const Responsive_RequestMobileView = () => {
        //TODO: function may not be relevant to our PC view 
    }
    return (
        <>
            <div id="footer_spacer"></div>
            <div id="footer">
                <div className="footer_content">
                    <div className="rule"></div>
                    <div id="footer_logo_steam">
                        <img src="https://store.akamai.steamstatic.com/public/images/v6/logo_steam_footer.png" alt="Valve Software" border="0"></img>
                    </div>
                    <div id="footer_logo">
                        <a href="http://www.valvesoftware.com" target="_blank">
                            <img src="https://store.akamai.steamstatic.com/public/images/footerLogo_valve_new.png" alt="Valve Software" border="0"></img>
                        </a>
                    </div>
                    <div id="footer_text" data-panel="{&quot;flow-children&quot;:&quot;row&quot;}">
                        <div>
                            © 2024 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries.
                        </div>
                        <div>
                            VAT included in all prices where applicable.&nbsp;&nbsp;&nbsp;
                            <a href="https://store.steampowered.com/privacy_agreement/?snr=1_44_44_" target="_blank">Privacy Policy</a>
                            &nbsp;&nbsp; | &nbsp;&nbsp;
                            <a href="https://store.steampowered.com/legal/?snr=1_44_44_" target="_blank">Legal</a>
                            &nbsp;&nbsp; | &nbsp;&nbsp;
                            <a href="https://store.steampowered.com/subscriber_agreement/?snr=1_44_44_" target="_blank">Steam Subscriber Agreement</a>
                            &nbsp;&nbsp; | &nbsp;&nbsp; 
                            <a href="https://store.steampowered.com/steam_refunds/?snr=1_44_44_" target="_blank">Refunds</a>
                            &nbsp;&nbsp; | &nbsp;&nbsp;
                            <a href="https://store.steampowered.com/account/cookiepreferences/?snr=1_44_44_" target="_blank">Cookies</a>
                        </div>
                        <div className="responsive_optin_link">
                            <div className="btn_medium btnv6_grey_black" onClick={Responsive_RequestMobileView}>
                                <span>View mobile website</span>
                            </div>
                        </div>
                    </div>
                    <div style={{clear: "left"}}></div>
                    <br></br>
                    <div className="rule"></div>
                    <div className="valve_links" data-panel="{&quot;flow-children&quot;:&quot;row&quot;}">
                        <a href="http://www.valvesoftware.com/about" target="_blank">About Valve</a>
                        &nbsp; | &nbsp;
                        <a href="http://www.valvesoftware.com" target="_blank">Jobs</a>
                        &nbsp; | &nbsp;
                        <a href="http://www.steampowered.com/steamworks/" target="_blank">Steamworks</a>
                        &nbsp; | &nbsp;
                        <a href="https://partner.steamgames.com/steamdirect" target="_blank">Steam Distribution</a>
                        &nbsp; | &nbsp;
                        <a href="https://help.steampowered.com/en/?snr=1_44_44_">Support</a>
                        &nbsp; | &nbsp;
                        <a href="https://store.steampowered.com/hardware_recycling/?snr=1_44_44_">Recycling</a>
                        &nbsp; | &nbsp;
                        <a href="https://store.steampowered.com/digitalgiftcards/?snr=1_44_44_" target="_blank">Gift Cards</a>
                        &nbsp; | &nbsp;
                        <a href="https://steamcommunity.com/linkfilter/?u=http%3A%2F%2Fwww.facebook.com%2FSteam" target="_blank" rel=" noopener">
                            <img src="https://store.akamai.steamstatic.com/public/images/ico/ico_facebook.png" alt="Facebook"></img>
                            Steam
                        </a>
                        &nbsp; | &nbsp;
                        <a href="http://twitter.com/steam" target="_blank">
                            <img src="https://store.akamai.steamstatic.com/public/images/ico/ico_twitter.png" alt="X"></img>
                            @steam
                        </a>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Footer;