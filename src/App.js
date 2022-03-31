import Header from "./Header/Header";
import css from "./App.module.css"
import Banner from "./Banner/Banner";

function App() {
  return (
    <div className={css.body}>
      <Header/>
        <Banner/>
    </div>
  );
}

export default App;
