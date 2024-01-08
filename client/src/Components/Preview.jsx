import { useEffect, useRef } from "react"
import { setContexts } from "../Context.jsx"

export default function Preview({switchPreview}){
    const {
        selectedPreview,
        setDisplayPreviewModal,
        play,
        setPlay,
        time,
        setTime,
        muted,
        setMuted,
        volume,
        setVolume,
        autoplay,
        setAutoplay,
        videoHover,
        setVideoHover
    } = setContexts()
    // const timeOutID = useRef([])

    // useEffect(()=>{
    //     console.log(timeOutID.current,'on render')
    //     timeOutID.current.forEach(x=>clearTimeout(x))
    // },[])
    
    // const setTimeOutID=(current)=>{
    //     timeOutID.current.push(setTimeout(() => {switchPreview(current+1)}, 6000))
    //     console.log(timeOutID.current, 'setting timeout')
    // }

    const videoRef = useRef()

    const videoInfo=()=>{
        let returnArr = []
        let timeStr = `${Math.floor(time/60)}:${Math.floor((time%60)).toLocaleString('en-US',{minimumIntegerDigits:2})}`
        play?returnArr[0]='play_button pause':returnArr[0]='play_button play'
        returnArr[1] = timeStr
        muted?returnArr[2]="volume_icon muted":returnArr[2]='volume_icon'
        returnArr[3]=volume
        returnArr[4]={left:`${volume*80}px`}
        videoHover?returnArr[5]='html5_video_overlay_hover':returnArr[5]='html5_video_overlay'
        autoplay?returnArr[6]='autoplay_checkbox checked':returnArr[6]='autoplay_checkbox'
        return returnArr
    }

    const changePlay=()=>{
        play?videoRef.current.pause():videoRef.current.play()
        setPlay(!play)
    }

    const fullScreen=()=>{
        videoRef.current.requestFullscreen()
    }

    const updateTime=()=>{
        setTime(videoRef.current.currentTime)
    }

    const toggleMute=()=>{
        setMuted(!muted)
        videoRef.current.muted=!videoRef.current.muted
    }

    const changeVolume=(e)=>{
        const handleMouseMove=(event)=>{
            setVolume(event.offsetX/80)
            videoRef.current.volume=volume
        }
        const handleMouseUp=()=>{
            removeEventListener('mousemove',handleMouseMove)
            removeEventListener('mouseout',handleMouseOut)
            removeEventListener('mouseup',handleMouseUp)
        }
        const handleMouseOut=()=>{
            removeEventListener('mousemove',handleMouseMove)
            removeEventListener('mouseup',handleMouseUp)
            removeEventListener('mouseout',handleMouseOut)
        }

        addEventListener('mousemove',handleMouseMove)
        addEventListener('mouseup',handleMouseUp)
        addEventListener('mouseout',handleMouseOut)
    }

    const toggleAutoplay=()=>{
        setAutoplay(!autoplay)
    }

    const changeProgress=(duration,divLength)=>{
        const handleMouseMove=(event)=>{
            const calculatedProgress=event.offsetX*duration/divLength
            setTime(calculatedProgress)
            videoRef.current.currentTime=calculatedProgress
        }
        const handleMouseUp=()=>{
            removeEventListener('mousemove',handleMouseMove)
            removeEventListener('mouseout',handleMouseOut)
            removeEventListener('mouseup',handleMouseUp)
        }
        const handleMouseOut=()=>{
            removeEventListener('mousemove',handleMouseMove)
            removeEventListener('mouseup',handleMouseUp)
            removeEventListener('mouseout',handleMouseOut)
        }

        addEventListener('mousemove',handleMouseMove)
        addEventListener('mouseup',handleMouseUp)
        addEventListener('mouseout',handleMouseOut)
    }

    const controlUp=()=>{
        setVideoHover(true)

        const handleMouseOut=()=>{
            setVideoHover(false)
            removeEventListener('mouseout',handleMouseOut)
        }

        addEventListener('mouseout',handleMouseOut)
    }

    useEffect(()=>{
        if(videoRef.current){
            videoRef.current.addEventListener('timeupdate',updateTime)
        }
        if(!videoRef.current){
            removeEventListener('timeupdate',updateTime)
        }
        if(autoplay){
            setPlay(true)
        }
    },[videoRef])

    const previewItem=()=>{
        switch(selectedPreview){
            case 0:
                return (
                    <div className="highlight_player_item highlight_movie" id='highlight_movie_256919598' style={{opacity:1,display:'block'}} onMouseOver={()=>controlUp()}>
                        <video id="movie_256919598"
                            ref={videoRef}
                            className="highlight_player_item highlight_movie" 
                            playsInline
                            autoPlay={autoplay}
                            onEnded={()=>{switchPreview(1)}} 
                            poster="https://cdn.akamai.steamstatic.com/steam/apps/256919598/movie.293x165.jpg?t=1670328406" 
                            muted
                            onClick={()=>changePlay()}
                            >
                            <source src={'https://cdn.akamai.steamstatic.com/steam/apps/256919598/movie480_vp9.webm?t=1670328406'} type="video/mp4"/>
                        </video>
                        <div className={videoInfo()[5]}>
                            <div className={videoInfo()[0]} onClick={()=>{changePlay()}}></div>
                            <div className="control_container">
                                <div className="fullscreen_button" onClick={()=>fullScreen()}></div>
                                <div className="time">{videoInfo()[1]} / 1:06</div>
                                <div className={videoInfo()[2]} onClick={()=>toggleMute()}></div>
                                <div className="volume_slider" onMouseDown={changeVolume}>
                                    <div className="volume_handle" style={videoInfo()[4]} onMouseMove={event=>event.stopPropagation()}></div>
                                </div>
                                <div className={videoInfo()[6]} onClick={()=>{toggleAutoplay()}}></div>
                                <div className="autoplay_label">Autoplay videos</div>
                            </div>
                            <div className="progress_bar_wrapper">
                                <div className="progress_bar_container" onMouseDown={()=>changeProgress(66,596)}>
                                    <div className="progress_bar_background" style={{overflow:'hidden',width:'596px'}}></div>
                                    <div className="progress_bar" style={{overflow:'hidden',width:time*596/66}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            case 1:
                return (
                    <div className="highlight_player_item highlight_movie" id='highlight_movie_256820008' style={{opacity:1,display:'block'}} onMouseOver={()=>controlUp()}>
                        <video ref={videoRef} id="movie_256820008" className="highlight_player_item highlight_movie" playsInline autoPlay={autoplay} onEnded={()=>{switchPreview(2)}} onClick={()=>changePlay()} poster="https://cdn.akamai.steamstatic.com/steam/apps/256820008/movie.293x165.jpg?t=1612278985" muted>
                            <source src={'https://cdn.akamai.steamstatic.com/steam/apps/256820008/movie_max_vp9.webm?t=1612278985'} type="video/mp4" />
                        </video>
                        <div className={videoInfo()[5]}>
                            <div className={videoInfo()[0]} onClick={()=>{changePlay()}}></div>
                            <div className="control_container">
                                <div className="fullscreen_button" onClick={()=>fullScreen()}></div>
                                <div className="time">{videoInfo()[1]} / 1:35</div>
                                <div className={videoInfo()[2]} onClick={()=>toggleMute()}></div>
                                <div className="volume_slider" onMouseDown={changeVolume}>
                                    <div className="volume_handle" style={videoInfo()[4]}></div>
                                </div>
                                <div className={videoInfo()[6]} onClick={()=>{toggleAutoplay()}}></div>
                                <div className="autoplay_label">Autoplay videos</div>
                            </div>
                            <div className="progress_bar_wrapper">
                                <div className="progress_bar_container" onMouseDown={()=>changeProgress(95,596)}>
                                    <div className="progress_bar_background" style={{overflow:'hidden',width:'596px'}}></div>
                                    <div className="progress_bar" style={{overflow:'hidden',width:time*596/95}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            case 2:
                // setTimeOutID(2)
                return (
                    <div className="highlight_player_item highlight_screenshot" id="highlight_screenshot_ss_a600a7d4ca954543e22f571a9629521a13f82143.jpg" style={{display:'block',opacity:1}}>
                        <div className="screenshot_holder">
                            <img src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_a600a7d4ca954543e22f571a9629521a13f82143.600x338.jpg?t=1701931405" onClick={()=>{setDisplayPreviewModal(2)}}/>
                        </div>
                    </div>
                )
            case 3:
                // setTimeOutID(3)
                return (
                    <div className="highlight_player_item highlight_screenshot" id="highlight_screenshot_ss_cd0262c5abf8a90ee5e1059acafc5a92b6be0e73.jpg" style={{display:'block',opacity:1}}>
                        <div className="screenshot_holder">
                            <img src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_cd0262c5abf8a90ee5e1059acafc5a92b6be0e73.1920x1080.jpg?t=1701931405" onClick={()=>{setDisplayPreviewModal(3)}}/>
                        </div>
                    </div>
                )
            case 4:
                // setTimeOutID(4)
                return (
                    <div className="highlight_player_item highlight_screenshot" id="highlight_screenshot_ss_3db385fc1223914dadb199ac8682683a8c59454e.jpg" style={{display:'block',opacity:1}}>
                        <div className="screenshot_holder">
                            <img src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_3db385fc1223914dadb199ac8682683a8c59454e.1920x1080.jpg?t=1701931405" onClick={()=>{setDisplayPreviewModal(4)}}/>
                        </div>
                    </div>
                )
            case 5:
                // setTimeOutID(setTimeout(() => {switchPreview(6)}, 6000))
                return (
                    <div className="highlight_player_item highlight_screenshot" id="highlight_screenshot_ss_6032c9336c6cf9c1ebc914cedf022b38e97fd271.jpg" style={{display:'block',opacity:1}}>
                        <div className="screenshot_holder">
                            <img src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_6032c9336c6cf9c1ebc914cedf022b38e97fd271.1920x1080.jpg?t=1701931405" onClick={()=>{setDisplayPreviewModal(5)}}/>
                        </div>
                    </div>
                )
            case 6:
                // setTimeOutID(setTimeout(() => {switchPreview(7)}, 6000))
                return (
                    <div className="highlight_player_item highlight_screenshot" id="highlight_screenshot_ss_f6cbfeea728d557fa9f483685fea3205f08f5d9e.jpg" style={{display:'block',opacity:1}}>
                        <div className="screenshot_holder">
                            <img src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_f6cbfeea728d557fa9f483685fea3205f08f5d9e.1920x1080.jpg?t=1701931405" onClick={()=>{setDisplayPreviewModal(6)}}/>
                        </div>
                    </div>
                )
            case 7:
                // setTimeOutID(setTimeout(() => {switchPreview(8)}, 6000))
                return (
                    <div className="highlight_player_item highlight_screenshot" id="highlight_screenshot_ss_551f06a43b72609d7ca3cd63e93c58e949d58384.jpg" style={{display:'block',opacity:1}}>
                        <div className="screenshot_holder">
                            <img src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_551f06a43b72609d7ca3cd63e93c58e949d58384.1920x1080.jpg?t=1701931405" onClick={()=>{setDisplayPreviewModal(7)}}/>
                        </div>
                    </div>
                )
            case 8:
                // setTimeOutID(setTimeout(() => {switchPreview(9)}, 6000))
                return (
                    <div className="highlight_player_item highlight_screenshot" id="highlight_screenshot_ss_f4ea4f0f93cc8b38042f6d5916413da185ec221c.jpg" style={{display:'block',opacity:1}}>
                        <div className="screenshot_holder">
                            <img src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_f4ea4f0f93cc8b38042f6d5916413da185ec221c.1920x1080.jpg?t=1701931405" onClick={()=>{setDisplayPreviewModal(8)}}/>
                        </div>
                    </div>
                )
            case 9:
                // setTimeOutID(setTimeout(() => {switchPreview(10)}, 6000))
                return (
                    <div className="highlight_player_item highlight_screenshot" id="highlight_screenshot_ss_553301e2432883e9f026fe1dd0e91d7a8886d6f1.jpg" style={{display:'block',opacity:1}}>
                        <div className="screenshot_holder">
                            <img src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_553301e2432883e9f026fe1dd0e91d7a8886d6f1.1920x1080.jpg?t=1701931405" onClick={()=>{setDisplayPreviewModal(9)}}/>
                        </div>
                    </div>
                )
            case 10:
                // setTimeOutID(setTimeout(() => {switchPreview(11)}, 6000))
                return (
                    <div className="highlight_player_item highlight_screenshot" id="highlight_screenshot_ss_9b4abc60696de192c40064364a1395ad5074e5c3.jpg" style={{display:'block',opacity:1}}>
                        <div className="screenshot_holder">
                            <img src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_9b4abc60696de192c40064364a1395ad5074e5c3.1920x1080.jpg?t=1701931405" onClick={()=>{setDisplayPreviewModal(10)}}/>
                        </div>
                    </div>
                )
            case 11:
                // setTimeOutID(setTimeout(() => {switchPreview(12)}, 6000))
                return (
                    <div className="highlight_player_item highlight_screenshot" id="highlight_screenshot_ss_15a86a1c4175f9392127265735c177a91535de65.jpg" style={{display:'block',opacity:1}}>
                        <div className="screenshot_holder">
                            <img src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_15a86a1c4175f9392127265735c177a91535de65.1920x1080.jpg?t=1701931405" onClick={()=>{setDisplayPreviewModal(11)}}/>
                        </div>
                    </div>
                )
            case 12:
                // setTimeOutID(setTimeout(() => {switchPreview(13)}, 6000))
                return (
                    <div className="highlight_player_item highlight_screenshot" id="highlight_screenshot_ss_ad81cc7ced8585ad344ba50e9d0b4bf9c597e62e.jpg" style={{display:'block',opacity:1}}>
                        <div className="screenshot_holder">
                            <img src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_ad81cc7ced8585ad344ba50e9d0b4bf9c597e62e.1920x1080.jpg?t=1701931405" onClick={()=>{setDisplayPreviewModal(12)}}/>
                        </div>
                    </div>
                )
            case 13:
                // setTimeOutID(setTimeout(() => {switchPreview(14)}, 6000))
                return (
                    <div className="highlight_player_item highlight_screenshot" id="highlight_screenshot_ss_4ba939a383dc363c14e6cb7995322f39a5a26b07.jpg" style={{display:'block',opacity:1}}>
                        <div className="screenshot_holder">
                            <img src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_4ba939a383dc363c14e6cb7995322f39a5a26b07.1920x1080.jpg?t=1701931405" onClick={()=>{setDisplayPreviewModal(13)}}/>
                        </div>
                    </div>
                )
            case 14:
                // setTimeOutID(setTimeout(() => {switchPreview(15)}, 6000))
                return (
                    <div className="highlight_player_item highlight_screenshot" id="highlight_screenshot_ss_988d92f03856895ef73a636ad20c2951086b865c.jpg" style={{display:'block',opacity:1}}>
                        <div className="screenshot_holder">
                            <img src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_988d92f03856895ef73a636ad20c2951086b865c.1920x1080.jpg?t=1701931405" onClick={()=>{setDisplayPreviewModal(14)}}/>
                        </div>
                    </div>
                )
            case 15:
                // setTimeOutID(setTimeout(() => {switchPreview(16)}, 6000))
                return (
                    <div className="highlight_player_item highlight_screenshot" id="highlight_screenshot_ss_8db2e5f40b64e105c7174b3d3679fce6d7a04d20.jpg" style={{display:'block',opacity:1}}>
                        <div className="screenshot_holder">
                            <img src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_8db2e5f40b64e105c7174b3d3679fce6d7a04d20.1920x1080.jpg?t=1701931405" onClick={()=>{setDisplayPreviewModal(15)}}/>
                        </div>
                    </div>
                )
            case 16:
                // setTimeOutID(setTimeout(() => {switchPreview(17)}, 6000))
                return (
                    <div className="highlight_player_item highlight_screenshot" id="highlight_screenshot_ss_b3c171e257dd1a3173254b1b61a7995dec204df4.jpg" style={{display:'block',opacity:1}}>
                        <div className="screenshot_holder">
                            <img src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_b3c171e257dd1a3173254b1b61a7995dec204df4.1920x1080.jpg?t=1701931405" onClick={()=>{setDisplayPreviewModal(16)}}/>
                        </div>
                    </div>
                )
            case 17:
                // setTimeOutID(setTimeout(() => {switchPreview(18)}, 6000))
                return (
                    <div className="highlight_player_item highlight_screenshot" id="highlight_screenshot_ss_64ae63dcfde6612266cf72884132fa144908b777.jpg" style={{display:'block',opacity:1}}>
                        <div className="screenshot_holder">
                            <img src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_64ae63dcfde6612266cf72884132fa144908b777.600x338.jpg?t=1701931405" onClick={()=>{setDisplayPreviewModal(17)}}/>
                        </div>
                    </div>
                )
            case 18:
                // setTimeOutID(setTimeout(() => {switchPreview(19)}, 6000))
                return (
                    <div className="highlight_player_item highlight_screenshot" id="highlight_screenshot_ss_0c218f8040f1d7850baff4ff4e3109942388ac98.jpg" style={{display:'block',opacity:1}}>
                        <div className="screenshot_holder">
                            <img src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_0c218f8040f1d7850baff4ff4e3109942388ac98.1920x1080.jpg?t=1701931405" onClick={()=>{setDisplayPreviewModal(18)}}/>
                        </div>
                    </div>
                )
            case 19:
                // setTimeOutID(setTimeout(() => {switchPreview(20)}, 6000))
                return (
                    <div className="highlight_player_item highlight_screenshot" id="highlight_screenshot_ss_e79d3106549c1269a14888f2095e4c667643c3ad.jpg" style={{display:'block',opacity:1}}>
                        <div className="screenshot_holder">
                            <img src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_e79d3106549c1269a14888f2095e4c667643c3ad.1920x1080.jpg?t=1701931405" onClick={()=>{setDisplayPreviewModal(19)}}/>
                        </div>
                    </div>
                )
            case 20:
                return (
                    <div className="highlight_player_item highlight_movie" id='highlight_movie_256919597' style={{opacity:1,display:'block'}} onMouseOver={()=>controlUp()}>
                        <video ref={videoRef} id="movie_256919597" className="highlight_player_item highlight_movie" playsInline autoPlay={autoplay} onEnded={()=>{switchPreview(21)}} poster="https://cdn.akamai.steamstatic.com/steam/apps/256919597/movie.293x165.jpg?t=1670328411" muted onClick={()=>changePlay()}>
                            <source src={'https://cdn.akamai.steamstatic.com/steam/apps/256919597/movie480_vp9.webm?t=1670328411'} type="video/mp4"/>
                        </video>
                        <div className={videoInfo()[5]}>
                            <div className={videoInfo()[0]} onClick={()=>{changePlay()}}></div>
                            <div className="control_container">
                                <div className="fullscreen_button" onClick={()=>fullScreen()}></div>
                                <div className="time">{videoInfo()[1]} / 2:03</div>
                                <div className={videoInfo()[2]} onClick={()=>toggleMute()}></div>
                                <div className="volume_slider" onMouseDown={changeVolume}>
                                    <div className="volume_handle" style={videoInfo()[4]}></div>
                                </div>
                                <div className={videoInfo()[6]} onClick={()=>{toggleAutoplay()}}></div>
                                <div className="autoplay_label">Autoplay videos</div>
                            </div>
                            <div className="progress_bar_wrapper">
                                <div className="progress_bar_container" onMouseDown={()=>changeProgress(123,596)}>
                                    <div className="progress_bar_background" style={{overflow:'hidden',width:'596px'}}></div>
                                    <div className="progress_bar" style={{overflow:'hidden',width:time*596/123}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            case 21:
                return (
                    <div className="highlight_player_item highlight_movie" id='highlight_movie_256863747' style={{opacity:1,display:'block'}} onMouseOver={()=>controlUp()}>
                        <video ref={videoRef} id="movie_256863747" className="highlight_player_item highlight_movie" playsInline autoPlay={autoplay} onEnded={()=>{switchPreview(22)}} poster="https://cdn.akamai.steamstatic.com/steam/apps/256863747/movie.293x165.jpg?t=1639060621" muted onClick={()=>changePlay()}>
                            <source src={'https://cdn.akamai.steamstatic.com/steam/apps/256863747/movie480_vp9.webm?t=1639060621'} type="video/mp4"/>
                        </video>
                        <div className={videoInfo()[5]}>
                            <div className={videoInfo()[0]} onClick={()=>{changePlay()}}></div>
                            <div className="control_container">
                                <div className="fullscreen_button" onClick={()=>fullScreen()}></div>
                                <div className="time">{videoInfo()[1]} / 1:42</div>
                                <div className={videoInfo()[2]} onClick={()=>toggleMute()}></div>
                                <div className="volume_slider" onMouseDown={changeVolume}>
                                    <div className="volume_handle" style={videoInfo()[4]}></div>
                                </div>
                                <div className={videoInfo()[6]} onClick={()=>{toggleAutoplay()}}></div>
                                <div className="autoplay_label">Autoplay videos</div>
                            </div>
                            <div className="progress_bar_wrapper">
                                <div className="progress_bar_container" onMouseDown={()=>changeProgress(102,596)}>
                                    <div className="progress_bar_background" style={{overflow:'hidden',width:'596px'}}></div>
                                    <div className="progress_bar" style={{overflow:'hidden',width:time*596/102}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            case 22:
                return (
                    <div className="highlight_player_item highlight_movie" id='highlight_movie_256851823' style={{opacity:1,display:'block'}} onMouseOver={()=>controlUp()}>
                        <video ref={videoRef} id="movie_256851823" className="highlight_player_item highlight_movie" playsInline autoPlay={autoplay} onEnded={()=>{switchPreview(0)}} poster="https://cdn.akamai.steamstatic.com/steam/apps/256851823/movie.293x165.jpg?t=1631797230" muted onClick={()=>changePlay()}>
                            <source src={'https://cdn.akamai.steamstatic.com/steam/apps/256851823/movie480_vp9.webm?t=1631797230'} type="video/mp4"/>
                        </video>
                        <div className={videoInfo()[5]}>
                            <div className={videoInfo()[0]} onClick={()=>{changePlay()}}></div>
                            <div className="control_container">
                                <div className="fullscreen_button" onClick={()=>fullScreen()}></div>
                                <div className="time">{videoInfo()[1]} / 1:02</div>
                                <div className={videoInfo()[2]} onClick={()=>toggleMute()}></div>
                                <div className="volume_slider" onMouseDown={changeVolume}>
                                    <div className="volume_handle" style={videoInfo()[4]}></div>
                                </div>
                                <div className={videoInfo()[6]} onClick={()=>{toggleAutoplay()}}></div>
                                <div className="autoplay_label">Autoplay videos</div>
                            </div>
                            <div className="progress_bar_wrapper">
                                <div className="progress_bar_container" onMouseDown={()=>changeProgress(62,596)}>
                                    <div className="progress_bar_background" style={{overflow:'hidden',width:'596px'}}></div>
                                    <div className="progress_bar" style={{overflow:'hidden',width:time*596/62}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
        }
    }


    return(
        <>
            {previewItem()}
        </>
    )
}