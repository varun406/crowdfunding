import { createContext, useState } from "react";
import Home from "./pages/Home";
import SideBar from "./views/Home/Sidebar";

export const SideBarContext = createContext(null);

const App = () => {
  const [isSideBarOpen, setSideBarOpen] = useState(true);

  console.log(isSideBarOpen);

  return (
    <div className="App">
      <SideBarContext.Provider value={{ isSideBarOpen, setSideBarOpen }}>
        {isSideBarOpen && <SideBar />}
        <Home />
      </SideBarContext.Provider>
    </div>
  );
};

export default App;
