import { Outlet } from "react-router-dom";
import Header from "./components/Header";
const App = () => {
  return (
    <div className="h-screen w-full">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
