export default function Summary(){
    return(
        <>
            <div className='page_title_area game_title_area page_content'>
                <div className='breadcrumbs'>
                    <div className='blockbg'>
                        <a href="https://store.steampowered.com/search/?term=&snr=1_5_9__205">All Games</a>
                        {' > '}
                        <a href='https://store.steampowered.com/genre/Action/?snr=1_5_9__205'>Action Games</a>
                        {' > '}
                        <a href='https://store.steampowered.com/franchise/coffeestain?snr=1_5_9__205'>Coffee Stain Franchise</a>
                        {' > '}
                        <a href='https://store.steampowered.com/app/892970/?snr=1_5_9__205'>Valheim</a>
                    </div>
                    <div style={{clear:'left'}}></div>
                </div>
                <div className='apphub_HomeHeaderContent'>
                    <div className='apphub_HeaderStandardTop'>
                        <div className='apphub_OtherSiteInfo'>
                            <a className='btnv6_blue_hoverfade btn_medium' href='https://steamcommunity.com/app/892970'>
                                <span>Community Hub</span>
                            </a>
                        </div>
                        <div className='apphub_AppName' id='appHubAppName'>Valheim</div>
                        <div style={{clear:'both'}}></div>
                    </div>
                </div>
            </div>
            <div className='block game_media_and_summary_ctn'>
            </div>
        </>
    )
}