//themecontext

import { createContext, useReducer } from "react";

const ThemeContext = createContext();

//themecontextprovider component

let ThemeReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_THEME":
            return { ...state, theme: action.payload }; // {   theme : 'dark'}
        default:
            return state; // {theme : 'light'}
    }
}

const ThemeContextProvider = ({ children }) => {

    let [state, dispatch] = useReducer(ThemeReducer, {
        theme: 'light'
    })

    let changeTheme = (theme) => {
        //action -> type + payload -> {type,payload}
        dispatch({ type: "CHANGE_THEME", payload: theme })
    }

    const isDark = state.theme === 'dark';

    return (
        <ThemeContext.Provider value={{ ...state, changeTheme, isDark }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeContextProvider }