import { createContext } from "react";

let AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    return (
        <AuthContext.Provider value={{ user: 'hlaingminthan' }}>{children}</AuthContext.Provider>
    )
}


export { AuthContext, AuthContextProvider };