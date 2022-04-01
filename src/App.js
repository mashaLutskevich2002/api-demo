import Header from "./Header/Header";
import css from "./App.module.css"
import Banner from "./Banner/Banner";
import UsersBlock from "./UsersBlock/UsersBlock";

function App() {
  return (
    <div className={css.body}>
        <Header/>
        <Banner/>
        <UsersBlock/>
    </div>
  );
}

export default App;
