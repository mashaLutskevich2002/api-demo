import {createContext, useContext, useEffect, useState} from "react";
import {getToken} from "../MainPage/Request/getToken";

const TokenContext = createContext('');

export const useTokenContext = () =>{
    return useContext(TokenContext)
}

export const ContextWrapper = ({children}) => {
    const [token, setToken] = useState('');

    useEffect( () => {
        getToken().then((token)=>setToken(token))
    },[])

    return (
        <TokenContext.Provider value={token}>
            {children}
        </TokenContext.Provider>
    )
}

