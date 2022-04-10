import {useEffect, useState} from "react";
import ThemeContext, {themes} from "../Сontext/themeContext";
import BodyComponent from "./BodyComponent/BodyComponent";
import {Route, Routes} from "react-router-dom";
import User from "../User/User";

function Main() {
    const [changeTheme, setChangeTheme] = useState(themes.light)

    useEffect(() => {
        setChangeTheme(()=> JSON.parse(localStorage.getItem('theme')));
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(changeTheme));
    }, [changeTheme]);

    return (
        <Routes >
                <Route exact path='/api-demo' element={
                    <ThemeContext.Provider value={changeTheme}  >
                        <BodyComponent setChangeTheme={setChangeTheme}/>
                    </ThemeContext.Provider>
                }/>
            <Route path='/api-demo/user/:id' element={<User/>}/>
        </Routes>
  );
}

export default Main;
