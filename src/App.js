import AppBar from "./Components/AppBar";
import "./App.css";
import Banner from "./Components/Banner";
import Menu from "./Components/Menu";
import PickoftheWeek from "./Components/PickoftheWeek";
import Comments from "./Components/Comments";

// import { Container, Image } from "react-bootstrap";
function App() {
  return (
    <>
      <AppBar />
      <Banner />
      <Menu />
      <PickoftheWeek />
      <Comments />
      <div className="text-center my-3 text-primary small">
        Copyright 2023-2024
      </div>
    </>
  );
}

export default App;
