import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const MainLayout = () => {
  return (
    <div className="relative min-h-screen text-gray-800 dark:text-gray-100 overflow-hidden">
      {/* Theme color blend blobs - gold & fuchsia */}
      <div className="absolute -top-10 left-20 w-1/2 h-[244.67px] bg-[#FFB800]/20 dark:bg-[#FFB800]/25 blur-3xl rounded-full mix-blend-soft-light" />
      <div className="absolute -top-10 right-20 w-1/2 h-[244.67px] bg-fuchsia-500/25 dark:bg-fuchsia-500/30 blur-3xl rounded-full mix-blend-soft-light" />
      <div className="absolute -bottom-10 right-20 w-1/2 h-[244.67px] bg-[#FFB800]/20 dark:bg-[#FFB800]/25 blur-3xl rounded-full mix-blend-soft-light" />
      <div className="absolute -bottom-10 left-20 w-1/2 h-[244.67px] bg-fuchsia-500/25 dark:bg-fuchsia-500/30 blur-3xl rounded-full mix-blend-soft-light" />
      

      <Navbar />
      <div className="relative z-10">
        <Outlet />
        
      </div>
      <div className="relative z-10">
        
<Footer/>
      </div>
      
    </div>
  );
};

export default MainLayout;
