import { createContext,useState,useContext } from "react"

const contexts = createContext()

export function ContextProvider({children}){
    const [displayTags,setDisplayTags] = useState(false)

    return(
        <contexts.Provider value={{displayTags,setDisplayTags}}>{children}</contexts.Provider>
    )
}

export const setContexts = () => {
    return useContext(contexts)
}