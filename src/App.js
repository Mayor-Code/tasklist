import "./App.css";
import Header from "./Header.js";
import { DataProvider } from "./context/DataContext";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App w-full h-screen md:flex items-center justify-center">
      <div className="bg-white min-h-screen lg:min-h-max lg:h-[60vh] w-full max-w-3xl overflow-y-auto lg:rounded-xl lg:shadow-[0_10px_15px_-3px_rgb(0_0_0_/_0.1),_0_4px_6px_-4px_rgb(0_0_0_/_0.1),_0_-5px_15px_-3px_rgb(0_0_0_/_0.1),_0_-4px_6px_-4px_rgb(0_0_0_/_0.1)] shadow-slate-400 relative">
        <DataProvider>
          <Header />
          <Outlet />
        </DataProvider>
      </div>
    </div>
  );
}

export default App;
