import React, { useContext, useState } from 'react'

const AppContext = React.createContext();

export const useAppContext = () => {
    return useContext(AppContext);
}

export const AppProvider = ({ children }) => {
    const [colour, setColour] = useState("#FFFFFF")

    const changeAppColour = (colour) =>{
        setColour(colour)
    }
    const value = {
        colour,
        changeAppColour
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContext
