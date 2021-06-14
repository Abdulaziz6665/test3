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

    // const host = 'http://ec2-3-218-71-191.compute-1.amazonaws.com'
    // const host = 'http://localhost:5000'
    const { data, setData } = useContext(context)

    return [data, setData]
}


export {Provider, useData}
    
