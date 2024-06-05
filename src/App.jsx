import { useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import Topbar from "./Components/Topbar/Topbar.jsx";
import Home from "./Pages/Home/Home.jsx";

function App() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <>
      <div>
        <Topbar open={open} toggleDrawer={toggleDrawer} />
        <div className="container">
          <Sidebar open={open} toggleDrawer={toggleDrawer} /> 
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
