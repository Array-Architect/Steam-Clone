import { createContext,useState,useContext } from "react"

const contexts = createContext()

export function ContextProvider({children}) {
    const [displayTags,setDisplayTags] = useState(false)
    const [graphVisible, setGraphVisible] = useState(false)

    const contextValues = {
        displayTags,
        setDisplayTags,
        graphVisible,
        setGraphVisible
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