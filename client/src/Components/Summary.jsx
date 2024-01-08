import { useEffect, useRef } from "react"
import { setContexts } from "../Context.jsx"
import Preview from "./Preview.jsx"


export default function Summary(){
    const {displayTags,setDisplayTags,selectedPreview,setSelectedPreview,showPreview,setShowPreview,autoplay,previewNavSlider,setpreviewNavSlider} = setContexts()
    let selectorShift = `${selectedPreview*120}px`

    useEffect(()=>{setShowPreview(true)},[showPreview])

    const toggleTagsModal=()=>{
        displayTags?
            setDisplayTags(false):
            setDisplayTags(true)
    }

    const switchPreview=(previewIndex)=>{
        if(previewIndex>22){previewIndex=0}
        if(previewIndex<0){previewIndex=22}
        setSelectedPreview(previewIndex)
        setShowPreview(false)
        console.log(previewIndex*120, previewNavSlider*2762/522)
        if(previewIndex*120<previewNavSlider*2762/522){
            setpreviewNavSlider(previewIndex*120*522/2762)
        }
        if(previewIndex*120>(previewNavSlider*2762/522)+480){
            console.log(previewIndex*120)
            if(previewIndex*120>2402){
                setpreviewNavSlider(2160*522/2762)
            }else{
                setpreviewNavSlider(previewIndex*120*522/2762)
            }
        }
    }

    const moveSlider=(e)=>{
        const handleMouseMove=(event)=>{
            console.log(event.x)
            let shift=0
            if(event.target.className==='handle'){
                console.log(event)
                shift=event.target.parentNode.offsetLeft-30
                if(shift<0){shift=0}
                if(shift>462){shift=462}
            }else{
                shift=event.offsetX-30
                if(shift<0){shift=0}
                if(shift>462){shift=462}

            }
            setpreviewNavSlider(shift)
        }
        const handleMouseUp=()=>{
            removeEventListener('mousemove',handleMouseMove)
            removeEventListener('mouseup',handleMouseUp)
        }

        addEventListener('mousemove',handleMouseMove)
        addEventListener('mouseup',handleMouseUp)
    }

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
                <div className="game_background_glow">
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
                                        {showPreview?<Preview switchPreview={switchPreview}/>:<div style={{width:'600px',height:'337.5px',opacity:1,display:'block'}}></div>}
                                    </div>
                                    <div id="highlight_strip">
                {/* preview navbar */}
                                        <div id="highlight_strip_scroll" style={{width:'2762px',left:`-${previewNavSlider*2420/522}px`}}>
                                            <div className="highlight_selector" style={{left:selectorShift}}></div>
                                            <div className="highlight_strip_item highlight_strip_movie ttip focus" id="thumb_movie_256919598" onClick={()=>{switchPreview(0)}}>
                                                <img className="movie_thumb" src="https://cdn.akamai.steamstatic.com/steam/apps/256919598/movie.184x123.jpg?t=1670328406"/>
                                                <div className="highlight_movie_marker"></div>
                                            </div>
                                            <div className="highlight_strip_item highlight_strip_movie ttip focus" id="thumb_movie_256919598" onClick={()=>{switchPreview(1)}}>
                                                <img className="movie_thumb" src="https://cdn.akamai.steamstatic.com/steam/apps/256820008/movie.184x123.jpg?t=1612278985"/>
                                                <div className="highlight_movie_marker"></div>
                                            </div>
                                            <div className="highlight_strip_item highlight_strip_movie ttip focus" id="thumb_movie_256919598" onClick={()=>{switchPreview(2)}}>
                                                <img className="movie_thumb" src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_a600a7d4ca954543e22f571a9629521a13f82143.116x65.jpg?t=1701931405"/>
                                            </div>
                                            <div className="highlight_strip_item highlight_strip_movie ttip focus" id="thumb_movie_256919598" onClick={()=>{switchPreview(3)}}>
                                                <img className="movie_thumb" src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_cd0262c5abf8a90ee5e1059acafc5a92b6be0e73.116x65.jpg?t=1701931405"/>
                                            </div>
                                            <div className="highlight_strip_item highlight_strip_movie ttip focus" id="thumb_movie_256919598" onClick={()=>{switchPreview(4)}}>
                                                <img className="movie_thumb" src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_3db385fc1223914dadb199ac8682683a8c59454e.116x65.jpg?t=1701931405"/>
                                            </div>
                                            <div className="highlight_strip_item highlight_strip_movie ttip focus" id="thumb_movie_256919598" onClick={()=>{switchPreview(5)}}>
                                                <img className="movie_thumb" src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_6032c9336c6cf9c1ebc914cedf022b38e97fd271.116x65.jpg?t=1701931405"/>
                                            </div>
                                            <div className="highlight_strip_item highlight_strip_movie ttip focus" id="thumb_movie_256919598" onClick={()=>{switchPreview(6)}}>
                                                <img className="movie_thumb" src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_f6cbfeea728d557fa9f483685fea3205f08f5d9e.116x65.jpg?t=1701931405"/>
                                            </div>
                                            <div className="highlight_strip_item highlight_strip_movie ttip focus" id="thumb_movie_256919598" onClick={()=>{switchPreview(7)}}>
                                                <img className="movie_thumb" src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_551f06a43b72609d7ca3cd63e93c58e949d58384.116x65.jpg?t=1701931405"/>
                                            </div>
                                            <div className="highlight_strip_item highlight_strip_movie ttip focus" id="thumb_movie_256919598" onClick={()=>{switchPreview(8)}}>
                                                <img className="movie_thumb" src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_f4ea4f0f93cc8b38042f6d5916413da185ec221c.116x65.jpg?t=1701931405"/>
                                            </div>
                                            <div className="highlight_strip_item highlight_strip_movie ttip focus" id="thumb_movie_256919598" onClick={()=>{switchPreview(9)}}>
                                                <img className="movie_thumb" src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_553301e2432883e9f026fe1dd0e91d7a8886d6f1.116x65.jpg?t=1701931405"/>
                                            </div>
                                            <div className="highlight_strip_item highlight_strip_movie ttip focus" id="thumb_movie_256919598" onClick={()=>{switchPreview(10)}}>
                                                <img className="movie_thumb" src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_9b4abc60696de192c40064364a1395ad5074e5c3.116x65.jpg?t=1701931405"/>
                                            </div>
                                            <div className="highlight_strip_item highlight_strip_movie ttip focus" id="thumb_movie_256919598" onClick={()=>{switchPreview(11)}}>
                                                <img className="movie_thumb" src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_15a86a1c4175f9392127265735c177a91535de65.116x65.jpg?t=1701931405"/>
                                            </div>
                                            <div className="highlight_strip_item highlight_strip_movie ttip focus" id="thumb_movie_256919598" onClick={()=>{switchPreview(12)}}>
                                                <img className="movie_thumb" src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_ad81cc7ced8585ad344ba50e9d0b4bf9c597e62e.116x65.jpg?t=1701931405"/>
                                            </div>
                                            <div className="highlight_strip_item highlight_strip_movie ttip focus" id="thumb_movie_256919598" onClick={()=>{switchPreview(13)}}>
                                                <img className="movie_thumb" src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_4ba939a383dc363c14e6cb7995322f39a5a26b07.116x65.jpg?t=1701931405"/>
                                            </div>
                                            <div className="highlight_strip_item highlight_strip_movie ttip focus" id="thumb_movie_256919598" onClick={()=>{switchPreview(14)}}>
                                                <img className="movie_thumb" src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_988d92f03856895ef73a636ad20c2951086b865c.116x65.jpg?t=1701931405"/>
                                            </div>
                                            <div className="highlight_strip_item highlight_strip_movie ttip focus" id="thumb_movie_256919598" onClick={()=>{switchPreview(15)}}>
                                                <img className="movie_thumb" src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_8db2e5f40b64e105c7174b3d3679fce6d7a04d20.116x65.jpg?t=1701931405"/>
                                            </div>
                                            <div className="highlight_strip_item highlight_strip_movie ttip focus" id="thumb_movie_256919598" onClick={()=>{switchPreview(16)}}>
                                                <img className="movie_thumb" src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_b3c171e257dd1a3173254b1b61a7995dec204df4.116x65.jpg?t=1701931405"/>
                                            </div>
                                            <div className="highlight_strip_item highlight_strip_movie ttip focus" id="thumb_movie_256919598" onClick={()=>{switchPreview(17)}}>
                                                <img className="movie_thumb" src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_64ae63dcfde6612266cf72884132fa144908b777.116x65.jpg?t=1701931405"/>
                                            </div>
                                            <div className="highlight_strip_item highlight_strip_movie ttip focus" id="thumb_movie_256919598" onClick={()=>{switchPreview(18)}}>
                                                <img className="movie_thumb" src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_0c218f8040f1d7850baff4ff4e3109942388ac98.116x65.jpg?t=1701931405"/>
                                            </div>
                                            <div className="highlight_strip_item highlight_strip_movie ttip focus" id="thumb_movie_256919598" onClick={()=>{switchPreview(19)}}>
                                                <img className="movie_thumb" src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_e79d3106549c1269a14888f2095e4c667643c3ad.116x65.jpg?t=1701931405"/>
                                            </div>
                                            <div className="highlight_strip_item highlight_strip_movie ttip focus" id="thumb_movie_256919598" onClick={()=>{switchPreview(20)}}>
                                                <img className="movie_thumb" src="https://cdn.akamai.steamstatic.com/steam/apps/256919597/movie.184x123.jpg?t=1670328411"/>
                                                <div className="highlight_movie_marker"></div>
                                            </div>
                                            <div className="highlight_strip_item highlight_strip_movie ttip focus" id="thumb_movie_256919598" onClick={()=>{switchPreview(21)}}>
                                                <img className="movie_thumb" src="https://cdn.akamai.steamstatic.com/steam/apps/256863747/movie.184x123.jpg?t=1639060621"/>
                                                <div className="highlight_movie_marker"></div>
                                            </div>
                                            <div className="highlight_strip_item highlight_strip_movie ttip focus" id="thumb_movie_256919598" onClick={()=>{switchPreview(22)}}>
                                                <img className="movie_thumb" src="https://cdn.akamai.steamstatic.com/steam/apps/256851823/movie.184x123.jpg?t=1631797230"/>
                                                <div className="highlight_movie_marker"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slider_ctn'>
                                        <div id='highlight_slider_left' className='slider_left' onClick={()=>switchPreview(selectedPreview-1)}>
                                            <span></span>
                                        </div>
                                        <div className="slider" id="highlight_slider" onMouseDown={moveSlider}>
                                            <div className="slider_bg" ></div>
                                            <div className="handle" style={{position:'absolute',left:`${previewNavSlider}px`}} onMouseMove={event=>event.stopPropagation()}></div>
                                        </div>
                                        <div id="highlight_slider_right" className="slider_right" onClick={()=>switchPreview(selectedPreview+1)}>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{clear:'both'}}></div>
                    </div>

                </div>
{/* Wishlist Area */}
                <div className="queue_overflow_ctn">
                    <div className="queue_ctn">
                        <div className="queue_actions_ctn" id="queueActionsCtn">
                            <p>
                                <a href="https://store.steampowered.com/login/?redir=app%2F892970&snr=1_5_9_">Sign in</a>
                                {' to add this item to your wishlist, follow it, or mark it as ignored'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}