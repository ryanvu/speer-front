import React, { useContext, useState } from 'react'

const AppContext = React.createContext();

export const useAppContext = () => {
    return useContext(AppContext);
}

export const AppProvider = ({ children }) => {
    const [colour, setColour] = useState("#FFFFFF");
    const [headerCol, setHeaderCol] = useState("#FFFFFF");
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false)
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

    const changeNavState = () => {
        setIsNavOpen(prev => !prev)
    };

    const changeScrollingState = (state) => {
        setIsScrolling(state)
    }

    const value = {
        colour,
        changeAppColour,
        headerCol,
        changeHeaderCol,
        page,
        changePage,
        isNavOpen,
        changeNavState,
        isScrolling,
        changeScrollingState
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContext
