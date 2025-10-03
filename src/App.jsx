import "./App.css";
import AddButton from "./components/addButton";
import Baner from "./components/Baner";
import SlideShow from "./components/SlideShow";
import "./CSS/SlideShow.css";
import "./CSS/Baner.css";
import Mainb from "./components/Mainb";
import Departs from "./components/Departes";
import Host from "./components/Host";
import Drink from "./components/Drink";
import CookComp from "./components/CookComp";
import ParistaComp from "./components/ParistaComp";
import News from "./components/news";
import "./CSS/News.css";
import "./CSS/Media.css";
import Media from "./components/Media";
import { Routes, Route, Link } from "react-router-dom";

import "./CSS/Speaker.css";
import Speaker from "./components/Speaker";
function App() {
  return (
    <>
      <SlideShow />
      <Routes>
        <Route path="/" element={<Baner />} />
        <Route path="/Departs" element={<Departs />} />
        <Route path="/Host" element={<Host />} />
        <Route path="/Media" element={<Media />} />
        <Route path="/Speaker" element={<Speaker />} />
        <Route path="/ParistaComp" element={<ParistaComp />} />
        <Route path="/News" element={<News />} />
        <Route path="/Drink" element={<Drink />} />
        <Route path="/CookComp" element={<CookComp />} />
      </Routes>
    </>
  );
}

export default App;
