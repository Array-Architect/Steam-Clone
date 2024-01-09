import { createContext,useState,useContext } from "react"

const contexts = createContext()

export function ContextProvider({children}) {
    const [displayTags,setDisplayTags] = useState(false)
    const [graphVisible, setGraphVisible] = useState(false)
    const [displayPreviewModal,setDisplayPreviewModal] = useState(0)
    const [selectedPreview, setSelectedPreview] = useState(0)
    const [showPreview, setShowPreview] = useState(true)
    const [play,setPlay] = useState(true)
    const [time,setTime] = useState(0)
    const [muted,setMuted] = useState(true)
    const [volume,setVolume] = useState(0)
    const [autoplay,setAutoplay] = useState(true)
    const [videoHover,setVideoHover] = useState(false)
    const [previewNavSlider,setpreviewNavSlider] = useState(0)
    const [readmore, setreadmore] = useState(false)
    const [reviewBoxPartial, setReviewBoxPartial] = useState(true)
    const [reviewTipVisible, setReviewTipVisible ] = useState(false)
    const [customerTipVisible, setCustomerTipVisible] = useState(false)
    const [recentTipVisible, setRecentTipVisible] = useState(false)
    const [toolTipAxis, setToolTipAxis ] = useState({x: null, y: null})
    const [reviewToolTips, setReviewToolTips ] = useState({
        fullReview: {
                className: "store_tooltip",
                style: {
                    position: "absolute",
                    zIndex: 1500,
                    opacity: 1,
                    pointerEvents: "auto"
                },
                text: 'See Full Review'
            },
        customerReview: {
            className: "store_tooltip",
            style: {
                position: "absolute",
                zIndex: 1500,
                opacity: 1,
                pointerEvents: "auto"
            },
            text: '95% of the 371,979 user reviews for this game are positive.'
        },
        recentReview: {
            className: "store_tooltip",
            style: {
                position: "absolute",
                zIndex: 1500,
                opacity: 1,
                pointerEvents: "auto"
            },
            text: '91% of the 4,886 user reviews in the last 30 days are positive.'
        },
        4: null,
        5: null,
        6: null,
        7: null,
        8: null,
        9: null,
        10: null,
    })

    const contextValues = {
        displayTags,
        setDisplayTags,
        graphVisible,
        setGraphVisible,
        displayPreviewModal,
        setDisplayPreviewModal,
        selectedPreview,
        setSelectedPreview,
        showPreview,
        setShowPreview,
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
        setVideoHover,
        previewNavSlider,
        setpreviewNavSlider,
        readmore,
        setreadmore,
        reviewBoxPartial,
        setReviewBoxPartial,
        toolTipAxis,
        setToolTipAxis,
        reviewToolTips,
        setReviewToolTips,
        reviewTipVisible,
        setReviewTipVisible,
        customerTipVisible,
        setCustomerTipVisible,
        recentTipVisible,
        setRecentTipVisible
    }

    return (
        <contexts.Provider value={contextValues}>
            {children}
        </contexts.Provider>
    )
}

export const setContexts = () => {
    return useContext(contexts)
}