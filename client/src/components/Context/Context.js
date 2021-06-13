import { createContext, useState, useContext } from 'react'

const context = createContext()

function Provider ({children}) {

    const [data, setData] = useState(null)

    return (
        <context.Provider value={{data, setData}}>
            {children}
        </context.Provider>
    )
}

function useData () {
    const { data, setData } = useContext(context)
    return [data, setData]
}


export {Provider, useData}
    
