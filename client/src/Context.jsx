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
        setreadmore
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