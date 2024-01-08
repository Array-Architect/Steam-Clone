import '../App.css'
import { setContexts } from "../Context"

export default function TagsModal(){
    const {displayTags,setDisplayTags} = setContexts()

    const toggleTagsModal=()=>{
        displayTags?
            setDisplayTags(false):
            setDisplayTags(true)
    }

    return(
        <>
{/* background */}
            <div className='newmodal_background'onClick={toggleTagsModal} style={{opacity: 0.8, display: 'block'}}></div>
            <div className="newmodal app_tag_modal_frame" style={{position: 'fixed', zIndex: 1000, maxWidth: '2466px', left: '38%', top: '36px'}}>
                <div className='modal_top_bar'></div>
    {/* header */}
                <div className='newmodal_header_border'>
                    <div className='newmodal_header'>
                        <div className='newmodal_close' onClick={toggleTagsModal}></div>
                        <div className='title_text'>View and edit tags for this product</div>
                    </div>
                </div>
    {/* body */}
                <div className='newmodal_content_border'>
                    <div className='newmodal_content' style={{maxHeight:'731px'}}>
                        <div>
                            <div id='app_tagging_modal' className='app_tag_modal nologin' style={{display: 'block'}}>
                                <div className='app_tag_modal_content'>
        {/* middle seperating line */}
                                    <div className='app_tag_modal_seperator'></div>
        {/* left column */}
                                    <div className='app_tag_modal_left'>
            {/* description */}
                                        <h2>
                                            {'Popular user-defined tags for this product:'}
                                            <span className='app_tag_modal_tooltip'>(?)</span>
                                            <span className='nonresponsive_hidden store_tooltip'>{'These are tags applied to the product by the most users.  You can click a tag to find other products with that tag applied.  Or, you can hit the plus symbol for any existing tags to increase that tag\'s popularity on this product.'}</span>
                                        </h2>
            {/* tag list */}
                                        <div className='app_tags popular_tags'>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag2' href='https://store.steampowered.com/tags/en/Open%20World%20Survival%20Craft/?snr=1_5_9__410'>Open World Survival Craft</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag2' href='https://store.steampowered.com/tags/en/Survival/?snr=1_5_9__410'>Survival</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag2' href='https://store.steampowered.com/tags/en/Online%20Co-Op/?snr=1_5_9__410'>Online Co-Op</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag2' href='https://store.steampowered.com/tags/en/Open%20World/?snr=1_5_9__410'>Open World</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag2' href='https://store.steampowered.com/tags/en/Multiplayer/?snr=1_5_9__410'>Multiplayer</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag2' href='https://store.steampowered.com/tags/en/Building/?snr=1_5_9__410'>Building</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag2' href='https://store.steampowered.com/tags/en/Crafting/?snr=1_5_9__410'>Crafting</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag2' href='https://store.steampowered.com/tags/en/Exploration/?snr=1_5_9__410'>Exploration</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag2' href='https://store.steampowered.com/tags/en/Base%20Building/?snr=1_5_9__410'>Base Building</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag2' href='https://store.steampowered.com/tags/en/Co-op/?snr=1_5_9__410'>Co-op</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag2' href='https://store.steampowered.com/tags/en/Sandbox/?snr=1_5_9__410'>Sandbox</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag2' href='https://store.steampowered.com/tags/en/Adventure/?snr=1_5_9__410'>Adventure</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag2' href='https://store.steampowered.com/tags/en/Mythology/?snr=1_5_9__410'>Mythology</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag2' href='https://store.steampowered.com/tags/en/RPG/?snr=1_5_9__410'>RPG</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag2' href='https://store.steampowered.com/tags/en/Early%20Access/?snr=1_5_9__410'>Early Access</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag2' href='https://store.steampowered.com/tags/en/Action/?snr=1_5_9__410'>Action</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag2' href='https://store.steampowered.com/tags/en/PvE/?snr=1_5_9__410'>PvE</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag2' href='https://store.steampowered.com/tags/en/Indie/?snr=1_5_9__410'>Indie</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag2' href='https://store.steampowered.com/tags/en/Singleplayer/?snr=1_5_9__410'>Singleplayer</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag2' href='https://store.steampowered.com/tags/en/Third%20Person/?snr=1_5_9__410'>Third Person</a>
                                            </div>
                                        </div>
                                    </div>
        {/* right column */}
                                    <div className='app_tag_modal_right'>
                                        <h2>Sign In</h2>
                                        <p>Sign in to add your own tags to this product.</p>
                                        <p>
                                            <a className='btnv6_blue_hoverfade btn_medium' href='https://store.steampowered.com/login/?redir=app/892970'>
                                                <span>Sign In</span>
                                            </a>
                                        </p>
                                    </div>
                                    <div style={{clear:'both'}}></div>
                                </div>
                            </div>
                        </div>
                        <div className='newmodal_buttons'>
                            <div className='btn_grey_steamui btn_medium'>
                                <span onClick={toggleTagsModal}>Close</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}