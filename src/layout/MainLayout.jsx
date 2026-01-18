import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen bg-white text-white overflow-hidden">
      {/* soft light blobs */}
      <div className="absolute -top-10 left-20  w-1/2 h-[244.67px] bg-[#FFB800] opacity-30 blur-3xl rounded-full" />
      <div className="absolute -top-10 right-20 w-1/2   h-[244.67px] bg-fuchsia-600/40 opacity-43 blur-3xl rounded-full" />
      <div className="absolute -bottom-10 right-20  w-1/2 h-[244.67px] bg-[#FFB800] opacity-30 blur-3xl rounded-full" />
      <div className="absolute -bottom-10 left-20 w-1/2   h-[244.67px] bg-fuchsia-600/40 opacity-43 blur-3xl rounded-full" />
      

      <Navbar />
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
