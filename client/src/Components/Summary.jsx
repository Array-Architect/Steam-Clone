export default function Summary(){
    return(
        <>
        {/* Title Area */}
                    <div className='page_title_area game_title_area page_content'>
        {/* BreadCrumbs */}
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
{/* Title & Community BTN */}
                <div className='apphub_HomeHeaderContent'>
                    <div className='apphub_HeaderStandardTop'>
{/* Community BTN */}
                        <div className='apphub_OtherSiteInfo'>
                            <a className='btnv6_blue_hoverfade btn_medium' href='https://steamcommunity.com/app/892970'>
                                <span>Community Hub</span>
                            </a>
                        </div>
{/* Valheim Title */}
                        <div className='apphub_AppName' id='appHubAppName'>Valheim</div>
                        <div style={{clear:'both'}}></div>
                    </div>
                </div>
            </div>
{/* Summary Area */}
            <div className='block game_media_and_summary_ctn'>
                <div className="block_content page_content" id="game_highlights">
{/* right column (summary) */}
                    <div className="rightcol">
                        <div className="glance_ctn">
{/* Game Image */}
                            <div id="gameHeaderImageCtn" className="game_header_image_ctn">
                                <img className="game_header_image_full" src="https://cdn.akamai.steamstatic.com/steam/apps/892970/header.jpg?t=1701931405"/>
                            </div>
{/* Description */}
                            <div className="game_description_snippet">
                                {'A brutal exploration and survival game for 1-10 players, set in a procedurally-generated purgatory inspired by viking culture. Battle, build, and conquer your way to a saga worthy of Odin\’s patronage!'}
                            </div>
{/* summary hyperlinks */}
                            <div className="glance_ctn_responsive_left">
{/* review summary */}
                                <div className="user_reviews" id="userReviews">
{/* recent review summary */}
                                    <div className="user_reviews_summary_row" style={{cursor:'pointer'}}>
                                        <div className="div.subtitle.column">Recent Reviews:</div>
                                        <div className="div.summary.column">
                                            <span className="game_review_summary positive">Very Positive</span>
                                            <span className="responsive_hidden">4505</span>
                                            <span className="nonresponsive_hidden responsive_reviewdesc">{'- 91% of the 4,505 user reviews in the last 30 days are positive.'}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}