import ViewTags from "./TagsModal"
import { setContexts } from "../Context"

export default function Summary(){
    const {displayTags,setDisplayTags} = setContexts()

    const toggleTagsModal=()=>{
        displayTags?
            setDisplayTags(false):
            setDisplayTags(true)
    }
    console.log(displayTags)

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
            {/* summary links */}
                            <div className="glance_ctn_responsive_left">
                {/* review summary */}
                                <div className="user_reviews" id="userReviews">
                    {/* recent review summary */}
                                    <div className="user_reviews_summary_row" style={{cursor:'pointer'}}>
                                        <div className="subtitle column">Recent Reviews:</div>
                                        <div className="summary column">
                                            <span className="game_review_summary positive">Very Positive</span>
                                            <span className="responsive_hidden"> (4,522) </span>
                                            <span className="nonresponsive_hidden store_tooltip">{'- 91% of the 4,566 user reviews in the last 30 days are positive.'}</span>
                                        </div>
                                    </div>
                    {/* all reviews summary */}
                                    <div className="user_reviews_summary_row" style={{cursor: 'pointer'}}>
                                        <div className="subtitle column all">All Reviews:</div>
                                        <div className="summary column">
                                            <span className="game_review_summary positive">Overwhelmingly Positive</span>
                                            <span className="responsive_hidden"> (371,189) </span>
                                            <span className="nonresponsive_hidden store_tooltip">{'- 95% of the 371,230 user reviews for this game are positive.'}</span>
                                        </div>
                                    </div>
                                </div>
                {/* release date */}
                                <div className="release_date">
                                    <div className="subtitle column">Release Date:</div>
                                    <div className="date">Feb 2, 2021</div>
                                </div>
                {/* dev name */}
                                <div className="dev_row">
                                    <div className="subtitle column">Developer:</div>
                                    <div className="summary column" id="developers_list">
                                        <a href="https://store.steampowered.com/developer/coffeestain?snr=1_5_9__2000">Iron Gate AB</a>
                                    </div>
                                </div>
                {/* publisher name */}
                                <div className="dev_row">
                                    <div className="subtitle column">Publisher:</div>
                                    <div className="summary column">
                                        <a href="https://store.steampowered.com/publisher/coffeestain?snr=1_5_9__2000">Coffee Stain Publishing</a>
                                    </div>
                                </div>
                            </div>
            {/* tags */}
                            <div className="glanceCtnResponsiveRight">
                                <div className="glance_tags_ctn popular_tags_ctn">
                                    <div className="glance_tags_label">Popular user-defined tags for this product:</div>
                                    <div className="glance_tags popular_tags">
                                        <div className="real_tags">
                                            <a href="https://store.steampowered.com/tags/en/Open%20World%20Survival%20Craft/?snr=1_5_9__409" className="app_tag2"> Open World Survival Craft </a>
                                            <a href="https://store.steampowered.com/tags/en/Survival/?snr=1_5_9__409" className="app_tag2"> Survival </a>
                                            <a href="https://store.steampowered.com/tags/en/Online%20Co-Op/?snr=1_5_9__409" className="app_tag2"> Online Co-Op </a>
                                            <a href="https://store.steampowered.com/tags/en/Open%20World/?snr=1_5_9__409" className="app_tag2"> Open World </a>
                                            <a href="https://store.steampowered.com/tags/en/Multiplayer/?snr=1_5_9__409" className="app_tag2"> Multiplayer </a>
                                            <a href="https://store.steampowered.com/tags/en/Building/?snr=1_5_9__409" className="app_tag2"> Building </a>
                                            <a href="https://store.steampowered.com/tags/en/Crafting/?snr=1_5_9__409" className="app_tag2"> Crafting </a>
                                            <a href="https://store.steampowered.com/tags/en/Exploration/?snr=1_5_9__409" className="app_tag2"> Exploration </a>
                                            <a href="https://store.steampowered.com/tags/en/Base%20Building/?snr=1_5_9__409" className="app_tag2"> Base Building </a>
                                            <a href="https://store.steampowered.com/tags/en/Co-op/?snr=1_5_9__409" className="app_tag2"> Co-op </a>
                                            <a href="https://store.steampowered.com/tags/en/Sandbox/?snr=1_5_9__409" className="app_tag2"> Sandbox </a>
                                            <a href="https://store.steampowered.com/tags/en/Adventure/?snr=1_5_9__409" className="app_tag2"> Adventure </a>
                                            <a href="https://store.steampowered.com/tags/en/Mythology/?snr=1_5_9__409" className="app_tag2"> Mythology </a>
                                            <a href="https://store.steampowered.com/tags/en/RPG/?snr=1_5_9__409" className="app_tag2"> RPG </a>
                                            <a href="https://store.steampowered.com/tags/en/Early%20Access/?snr=1_5_9__409" className="app_tag2"> Early Access </a>
                                            <a href="https://store.steampowered.com/tags/en/Action/?snr=1_5_9__409" className="app_tag2"> Action </a>
                                            <a href="https://store.steampowered.com/tags/en/PvE/?snr=1_5_9__409" className="app_tag2"> PvE </a>
                                            <a href="https://store.steampowered.com/tags/en/Indie/?snr=1_5_9__409" className="app_tag2"> Indie </a>
                                            <a href="https://store.steampowered.com/tags/en/Singleplayer/?snr=1_5_9__409" className="app_tag2"> Singleplayer </a>
                                            <a href="https://store.steampowered.com/tags/en/Third%20Person/?snr=1_5_9__409" className="app_tag2"> Third Person </a>
                                        </div>
                                        <div className="app_tag2 add_button" onClick={toggleTagsModal}>+</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{clear:'both'}}></div>
                        </div>
                    </div>
        {/* left column (preview) */}
                    <div className="leftcol">
                        <div className="highlight_ctn">
                            <div className="highlight_overflow">
            {/* display */}
                                <div className="highlight_player_area">
                                    <div className="highlight_player_area_spacer">
                                        <img src="https://store.akamai.steamstatic.com/public/images/game/game_highlight_image_spacer.gif"/>
                                    </div>
                                </div>
                                {/* <div className="highlight_strip">
                                    <div id="highlight_strip_scroll" style={{width:'2762px',left:'0px'}}>
                                        <div className="highlight_selector" style={{left:'0px'}}></div>
                                        <div className="highlight_strip_item highlight_strip_movie ttip focus" id="thumb_movie_256919598">
                                            <img className="movie_thumb" src="https://cdn.akamai.steamstatic.com/steam/apps/256919598/movie.184x123.jpg?t=1670328406"/>
                                            <div className="highlight_movie_marker"></div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div style={{clear:'both'}}></div>
                </div>
            </div>
        </>
    )
}