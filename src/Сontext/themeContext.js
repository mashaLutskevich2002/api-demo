import {createContext} from "react";

export const themes ={
    dark:{
        color: 'white',
        background: '#1C1C1C'
    },
    light:{
        color: 'black',
        background: 'white'
    }
}

const ThemeContext = createContext(themes.light)

export default ThemeContext;

