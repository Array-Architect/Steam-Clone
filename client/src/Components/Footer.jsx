function Footer({}) {
    //
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
                        <a href="http://www.valvesoftware.com" target="_blank" rel>
                            <img src="https://store.akamai.steamstatic.com/public/images/footerLogo_valve_new.png" alt="Valve Software" border="0"></img>
                        </a>
                    </div>
                    <div id="footer_text" data-panel="{&quot;flow-children&quot;:&quot;row&quot;}">

                    </div>
                    <div style={{clear: "left"}}></div>
                    <br></br>
                    <div class="rule"></div>
                    <div class="valve_links" data-panel="{&quot;flow-children&quot;:&quot;row&quot;}">

                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Footer;