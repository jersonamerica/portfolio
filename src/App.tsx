import Menu from "components/menu";
import PagesRouter from "components/pagesRouter";
import "./App.scss";

const App = () => {
  return (
    <div className="contents">
      <PagesRouter />
      <Menu />
    </div>
  );
};

export default App;
