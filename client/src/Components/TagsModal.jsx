import '../App.css'

export default function TagsModal(){
    return(
        <>
            <div className='newmodal_background' style={{opacity: 0.8, display: 'block'}}></div>
            <div className="newmodal app_tag_modal_frame" style={{position: 'fixed', zIndex: 1000, maxWidth: '2466px', left: '35%', top: '36px'}}>
                <div className='newmodal_header_border'>
                    <div className='newmodal_header'>
                        <div className='newmodal_close'></div>
                        <div className='title_text'>View and edit tags for this product</div>
                    </div>
                </div>
                <div className='newmodal_content_border'>
                    <div className='newmodal_content' style={{maxHeight:'731px'}}>
                        <div>
                            <div id='app_tagging_modal' className='app_tag_modal nologin' style={{display: 'block'}}>
                                <div className='class="app_tag_modal_content"'>
                                    <div className='app_tag_modal_seperator'></div>
                                    <div className='app_tag_modal_left'>
                                        <h2>
                                            {'Popular user-defined tags for this product:'}
                                            <span className='app_tag_modal_tooltip'>(?)</span>
                                            <span className='nonresponsive_hidden store_tooltip'>{'These are tags applied to the product by the most users.  You can click a tag to find other products with that tag applied.  Or, you can hit the plus symbol for any existing tags to increase that tag\'s popularity on this product.'}</span>
                                        </h2>
                                        <div className='app_tags popular_tags'>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag' href='https://store.steampowered.com/tags/en/Open%20World%20Survival%20Craft/?snr=1_5_9__410'>Open World Survival Craft</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag' href='https://store.steampowered.com/tags/en/Survival/?snr=1_5_9__410'>Survival</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag' href='https://store.steampowered.com/tags/en/Online%20Co-Op/?snr=1_5_9__410'>Online Co-Op</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag' href='https://store.steampowered.com/tags/en/Open%20World/?snr=1_5_9__410'>Open World</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag' href='https://store.steampowered.com/tags/en/Multiplayer/?snr=1_5_9__410'>Multiplayer</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag' href='https://store.steampowered.com/tags/en/Building/?snr=1_5_9__410'>Building</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag' href='https://store.steampowered.com/tags/en/Crafting/?snr=1_5_9__410'>Crafting</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag' href='https://store.steampowered.com/tags/en/Exploration/?snr=1_5_9__410'>Exploration</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag' href='https://store.steampowered.com/tags/en/Base%20Building/?snr=1_5_9__410'>Base Building</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag' href='https://store.steampowered.com/tags/en/Co-op/?snr=1_5_9__410'>Co-op</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag' href='https://store.steampowered.com/tags/en/Sandbox/?snr=1_5_9__410'>Sandbox</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag' href='https://store.steampowered.com/tags/en/Adventure/?snr=1_5_9__410'>Adventure</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag' href='https://store.steampowered.com/tags/en/Mythology/?snr=1_5_9__410'>Mythology</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag' href='https://store.steampowered.com/tags/en/RPG/?snr=1_5_9__410'>RPG</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag' href='https://store.steampowered.com/tags/en/Early%20Access/?snr=1_5_9__410'>Early Access</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag' href='https://store.steampowered.com/tags/en/Action/?snr=1_5_9__410'>Action</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag' href='https://store.steampowered.com/tags/en/PvE/?snr=1_5_9__410'>PvE</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag' href='https://store.steampowered.com/tags/en/Indie/?snr=1_5_9__410'>Indie</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag' href='https://store.steampowered.com/tags/en/Singleplayer/?snr=1_5_9__410'>Singleplayer</a>
                                            </div>
                                            <div className='app_tag_control popular'>
                                                <a className='app_tag' href='https://store.steampowered.com/tags/en/Third%20Person/?snr=1_5_9__410'>Third Person</a>
                                            </div>
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