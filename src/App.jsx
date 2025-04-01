import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import ParticlesComponent from "./components/particles";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="h-screen w-full relative">
      {/* Particles in the background */}
      <ParticlesComponent className="absolute top-0 left-0 w-full h-full z-0" />

      {/* Header and content above the particles */}
      <div className="relative z-10">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default App;
