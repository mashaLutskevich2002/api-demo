import Header from "./Header/Header";
import css from "./App.module.css"
import Banner from "./Banner/Banner";
import UsersBlock from "./UsersBlock/UsersBlock";
import Registration from "./Registration/Registration";
import {useEffect, useState} from "react";
import {getData} from "./Request/fetchData";

function App() {
    const [data, setData] = useState([])
    const [limit, setLimit] = useState(6);
    const [newUser, setNewUser] = useState(false)
    const [isPressLoadMore, setIsPressLoadMore] = useState(false)

    const getUsers  = async () => {
        let newData = await getData(`https:frontend-test-assignment-api.abz.agency/api/v1/users?&count=${limit}`);
        return newData.users;
    }

    useEffect( () => {
        getUsers().then((newData)=>setData([...newData]))
    }, [limit, newUser, isPressLoadMore]);

    return (
        <div className={css.body}>
            <Header/>
            <Banner/>
            <UsersBlock getUsers={getUsers} data={data} setLimit={setLimit}
                        limit={limit} setNewUser={setNewUser} setIsPressLoadMore={setIsPressLoadMore}/>
            <Registration setNewUser={setNewUser}/>
        </div>
  );
}

export default App;
