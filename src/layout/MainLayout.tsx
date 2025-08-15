import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useSidebarStore } from "@/stores/useSidebarStore";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const { isSidebarOpen, isSidebarHovered, setSidebarHovered } =
    useSidebarStore();

  // Compute final state for sidebar width
  const expanded = isSidebarOpen || isSidebarHovered;

  return (
    <>
      <div className="relative z-[100]">
        <Header />
      </div>

      <div className="relative">
        <div
          onMouseEnter={() => {
            if (!isSidebarOpen) setSidebarHovered(true);
          }}
          onMouseLeave={() => {
            if (!isSidebarOpen) setSidebarHovered(false);
          }}
          style={{ height: "calc(100vh - 64px)" }}
          className={`sidebar absolute top-0 left-0 z-[99] overflow-x-hidden border-r border-[#dddddd] bg-white transition-all duration-200 ${
            expanded
              ? "w-[24rem] overflow-y-auto"
              : "w-[7.2rem] overflow-y-hidden"
          }`}
        >
          <Sidebar />
        </div>

        <div
          style={{ height: "calc(100vh - 64px)" }}
          className={`main-container overflow-y-auto transition-all duration-200 ${
            isSidebarOpen ? "ml-[24rem]" : "ml-[7.2rem]"
          }`}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
