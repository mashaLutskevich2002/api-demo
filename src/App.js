import Header from "./Header/Header";
import css from "./App.module.css"
import Banner from "./Banner/Banner";
import UsersBlock from "./UsersBlock/UsersBlock";
import Registration from "./Registration/Registration";
import {useState} from "react";

function App() {
    const [user, setUser] = useState({})
    const getUsers = (user) =>{
        setUser(user)
    }
  return (
    <div className={css.body}>

        <Header/>

        <Banner/>
        <UsersBlock getUser={getUsers}/>
        <p>{ JSON.stringify(user)}</p>
        {console.log(JSON.stringify(user))}
        <Registration/>
    </div>
  );
}

export default App;
