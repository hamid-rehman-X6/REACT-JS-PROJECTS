import "./App.css";
import Accordian from "./Components/Accordians";
import SearchComplete from "./Components/AutoComplete";
import RandomColor from "./Components/Color-Generator";
import Tabs from "./Components/Custom-Tabs/Tabs";
import ImageSlider from "./Components/Image Slider";
import Main from "./Components/Light-Dark-Mode/Main";
import { ThemeProvider } from "./Components/Light-Dark-Mode/ThemeContext";
import LoadProducts from "./Components/Load-More-Product";
import Modal from "./Components/pop-up-Modal/Modal";
import QrCode from "./Components/QR-code";
import Scroll from "./Components/Scroll-Indicator";
import StarRating from "./Components/Star-Rating";
import TreView from "./Components/Tree-View-Sidebar";
import menus from "./Components/Tree-View-Sidebar/data";
import Four from "./Components1/Four";
import One from "./Components1/One";
import Three from "./Components1/Three";
import Two from "./Components1/Two";

function App() {
  return (
    <>
      <div className="App">
        {/* <Accordian /> */}
        {/* <RandomColor /> */}
        {/* <StarRating noOfStars={8} /> */}
        <ImageSlider
          url={`https://picsum.photos/v2/list`}
          page={"1"}
          limit={"10"}
        />
        {/* <LoadProducts /> */}

        {/* <TreView menus={menus} /> */}

        {/* <QrCode /> */}

        {/* <ThemeProvider>
          {" "}
          <Main />
        </ThemeProvider> */}

        {/* <Scroll url={"https://dummyjson.com/products?limit=100"} /> */}

        {/* <Tabs /> */}

        {/* <Modal /> */}

        {/* <SearchComplete /> */}

        {/* <One /> */}

        {/* <Two /> */}

        {/* <Three /> */}

        {/* <Four /> */}
      </div>
    </>
  );
}

export default App;
