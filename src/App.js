import Header from "./Header/Header";
import css from "./App.module.css"
import Banner from "./Banner/Banner";
import UsersBlock from "./UsersBlock/UsersBlock";
import Registration from "./Registration/Registration";
import {useEffect, useRef, useState} from "react";
import {getData} from "./Request/fetchData";
import Popup from "./Popup/Popup";

function App() {
    const [data, setData] = useState([])
    const [limit, setLimit] = useState(6);
    const [newUser, setNewUser] = useState(false)
    const [isPressLoadMore, setIsPressLoadMore] = useState(false)
    const [isPopup, setIsPopup] = useState(false)

    const getUsers  = async () => {
        let newData = await getData(`https:frontend-test-assignment-api.abz.agency/api/v1/users?&count=${limit}`);
        return newData.users;
    }

    useEffect( () => {
        getUsers().then((newData)=>setData([...newData]))
    }, [limit, newUser, isPressLoadMore]);

    const userGetRef = useRef(null)
    const userPostRef = useRef(null)
    const executeScroll = (ref) => ref.current.scrollIntoView()

    return (
        <div className={css.body}>
            <Header executeScroll={executeScroll} userGetRef={userGetRef} userPostRef={userPostRef}/>
            <Banner executeScroll={executeScroll} userPostRef={userPostRef}/>
            <Popup setIsPopup={setIsPopup} isPopup={isPopup} />
            <UsersBlock getUsers={getUsers} data={data} setLimit={setLimit} userGetRef={userGetRef}
                        limit={limit} setNewUser={setNewUser} setIsPressLoadMore={setIsPressLoadMore}/>
            <Registration setNewUser={setNewUser} userPostRef={userPostRef} setIsPopup={setIsPopup} executeScroll={executeScroll} userGetRef={userGetRef}/>
        </div>
  );
}

export default App;
