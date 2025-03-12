import css from './App.module.css';
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <Content />
    </div>
  );
}

export default App;