import React, { useContext, useState } from 'react'

const AppContext = React.createContext();

export const useAppContext = () => {
    return useContext(AppContext);
}

export const AppProvider = ({ children }) => {
    const [colour, setColour] = useState("#FFFFFF")
    const [headerCol, setHeaderCol] = useState("#FFFFFF")
    const [page, setPage] = useState("");

    const changeAppColour = (colour) =>{
        setColour(colour)
    }

    const changeHeaderCol = (col) => {
        setHeaderCol(col);
    }

    const changePage = (page) => {
        setPage(page);
    }

    const value = {
        colour,
        changeAppColour,
        headerCol,
        changeHeaderCol,
        page,
        changePage
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContext
